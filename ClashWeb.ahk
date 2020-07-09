SetWorkingDir %A_ScriptDir%
Process,Exist, clash-win64.exe ;                         
if ErrorLevel
{ 
}
else
{
    gosub, MenuHandlerstartclash
}

Menu, Tray, Icon, clash-logo.ico,1,1
Menu, Tray, NoStandard

#Persistent ; 让脚本持续运行, 直到用户退出.
Menu, Tray, Add ; 创建分隔线.'
Menu, tray, Add, 切换节点, OpenWebBoard 
Menu, tray, Add, 更新配置, Updateconfig

Menu, Submenu4, Add, 选择配置, SetConfig
Menu, Submenu4, Add, 添加配置, Url
Menu, tray, add, 配置管理, :Submenu4 
Menu, Tray, Add ; 创建分隔线.'

Menu, Submenu, Add, 启动Clash, MenuHandlerstartclash
Menu, Submenu, Add, 关闭Clash, MenuHandlerstopclash
Menu, Submenu, Add, 重启Clash, MenuHandlerrestartclash
Menu, tray, add, Clash, :Submenu 

Menu, Submenu2, Add, 开启系统代理, setsys 
Menu, Submenu2, Add, 关闭系统代理, dissys
Menu, tray, add, 系统代理, :Submenu2


Menu, Submenu1, Add, 更新geoIP, updategeoIP
Menu, Submenu1, Add, UWP设置, UWPProxy 
Menu, Submenu1, Add, 开机启动, StartUp
Menu, Submenu1, Add, 关闭启动, DeleteStartUp
Menu, tray, add, 其它设置, :Submenu1 

Menu, Tray, Add ; 创建分隔线.
Menu, Tray, Click, OnClick 
Menu, Tray, Add, 检查状态, OnClick
Menu, Tray, Add, 退出, MenuHandlerexit 
Menu, Tray, Default, 检查状态
Menu, Tray, Add ; 创建分隔线.

OnClick: ;任务栏图标双击单击效果
if !LastClick 
{
    LastClick := 1
    LastTC := A_TickCount
    SetTimer,SingleClickEvent,-200
}
else if (A_TickCount-LastTC<200)
{
    SetTimer,SingleClickEvent,off
    gosub,DoubleClickEvent
}
return

SingleClickEvent:
    LastClick := 0
    Goto, checkclash 
return

DoubleClickEvent:
    LastClick := 0
    Goto, OpenWebBoard
return

nothing:
return

Url:
    Gui, Destroy
    Gui, Add, Text,, 订阅链接:
    Gui, Add, Edit,w500 vsubUrl
    Gui, Add, Text,, 配置名称:
    Gui, Add, Edit,w500 vsubName
    Gui, Add, Button, Default, 更新
    Gui, Show
return

Button更新:
    Gui, Submit
    If (subUrl <> "" And subName <> ""){
        IniWrite, "%subUrl%", pref.ini, profile, currentUrl
        IniWrite, %subName%.yaml, pref.ini, profile, configname
    }
    Gui, Destroy
    RunWait, %A_ScriptDir%\Bat\updateconfig.bat
    Goto, MenuHandlerrestartclash
return

SetConfig:
    Gui, Destroy
    Gui, Add, ListView,w700 g配置管理, Name|Size (KB)|URL
    Loop, Profile\*.yaml
    {
        FileReadLine, oUrl, %A_ScriptDir%\Profile\%A_LoopFileName%, 1
        StringReplace, cUrl, oUrl, #
        StringReplace, cUrl, cUrl, %A_SPACE%
        LV_Add("", A_LoopFileName, A_LoopFileSizeKB, cUrl) 
    } 
    LV_ModifyCol() ; 根据内容自动调整每列的大小.
    LV_ModifyCol(2,"100 Integer") ; 为了进行排序, 指出列 2 是整数.
    ; 显示窗口并返回. 每当用户点击一行时脚本会发出通知.
    Gui, Show
return

配置管理:
    if A_GuiEvent = DoubleClick
    {
        LV_GetText(NameText, A_EventInfo) ; 从行的第一个字段中获取文本.
        LV_GetText(Urltext, A_EventInfo, 3)
        If (%A_EventInfo%<>0){
            
            IniWrite, %NameText%, pref.ini, profile, configname
            IniWrite, %UrlText%, pref.ini, profile, currentUrl
            MsgBox, 4,, 选中配置：%NameText%，是否重启clash？
            IfMsgBox, No
            return ; 如果选择 No, 脚本将会终止.
            Gui, Destroy
            goto, MenuHandlerrestartclash
        }
    }
return

GuiClose:
    Gui, Destroy
return

UWPProxy:
    RunWait, %A_ScriptDir%\Bat\UWP.bat,,Hide
return

updategeoIP:
    RunWait, %A_ScriptDir%\Bat\geoIP.bat
    Goto, MenuHandlerrestartclash
return

setsys:
    RunWait, %A_ScriptDir%\Bat\setsys.bat,,Hide
    Goto, checkclash
return

dissys:
    RunWait, %A_ScriptDir%\Bat\dissys.bat,,Hide
    Goto, checkclash
return

checkclash:
    Process,Exist, clash-win64.exe ; 
    if ErrorLevel
    {
        ClashVar := "开-✅"
    }
    else
    {
        ClashVar := "关-❌"
    }
    RegRead, proxy,HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings,ProxyEnable
    if ( proxy > 0 )
    { 
        ProxyVar := "开-✅"
    }
    else 
    {
        ProxyVar := "关-❌"
    }
    TrayTip % Format("📢运行状态📢"),Clash状态：%ClashVar%`n系统 代理：%ProxyVar%`n推荐 状态：开-开
return

MenuHandlerstartclash:
    IniRead, configName, pref.ini, profile, configname, Default
    FileGetSize, configSize, %A_ScriptDir%\Profile\%configName%, K
    If configSize
        RunWait, %A_ScriptDir%\Bat\startclash.bat,,Hide
    else
        RunWait, %A_ScriptDir%\Bat\defaultstart.bat,,Hide
    goto, setsys
return

MenuHandlerstopclash:
    MsgBox, 4,, 确定要关闭Clash、关闭系统代理吗？
    IfMsgBox, No
return ; 如果选择 No, 脚本将会终止.
RunWait, %A_ScriptDir%\Bat\stop.bat,,Hide
Goto, checkclash
return

MenuHandlerrestartclash:
    RunWait, %A_ScriptDir%\Bat\stop.bat,,Hide
    goto, MenuHandlerstartclash
return

Updateconfig:
    RunWait, %A_ScriptDir%\Bat\updateconfig.bat,,Hide
    Goto, MenuHandlerrestartclash
return

StartUp:
    RunWait, %A_ScriptDir%\Bat\StartUp.bat
return

DeleteStartUp:
    RunWait, %A_ScriptDir%\Bat\DeleteStartUp.bat
Return

OpenWebBoard:
    Process,Exist, clash-win64.exe ; 
    if ErrorLevel
    {
        Run, %A_ScriptDir%\Bat\OpenWeb.bat,,Hide
    }
    else
    {
        ClashVar := "关-❌"
        TrayTip % Format("📢打开失败📢"),Clash：%ClashVar%`n请先启动Clash
    }
return

MenuHandlerexit:
    MsgBox, 4,, 确定要关闭Clash、关闭系统代理吗？
    IfMsgBox, No
return ; 如果选择 No, 脚本将会终止.
RunWait, %A_ScriptDir%\Bat\stop.bat,,Hide
gosub, checkclash
RunWait, %A_ScriptDir%\Bat\Allstop.bat,,Hide
ExitApp

