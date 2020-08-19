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
Menu, tray, Add, 切换节点, OpenWebBoard 
Menu, tray, Add, 更新配置, Updateconfig
Menu, tray, Add, 配置管理, SetConfig
Menu, Tray, Add ; 创建分隔线.'

Menu, Submenu, Add, 启动Clash, MenuHandlerstartclash
Menu, Submenu, Add, 重载Clash, MenuHandlerrestartconfig
Menu, Submenu, Add, 关闭Clash, MenuHandlerstopclash
Menu, Submenu, Add, 重启Clash, MenuHandlerrestartclash
Menu, tray, add, Clash, :Submenu 

Menu, Submenu2, Add, 开启系统代理, setsys 
Menu, Submenu2, Add, 关闭系统代理, dissys
Menu, tray, add, 系统代理, :Submenu2

Menu, Submenu4, Add, 启动TAP, MenuHandlerStartTap
Menu, Submenu4, Add, 默认启动, defaultTap
Menu, Submenu4, Add, 添加TAP, MenuHandlerAddTap
Menu, Submenu4, Add, 卸载TAP, MenuHandlerUninstallTap
Menu, Submenu4, Add, 取消默认, cancledefaultTap
Menu, Submenu4, Add, 取消TAP, MenuHandlerDeleteTap
Menu, tray, add, TAP管理, :Submenu4 

Menu, Submenu1, Add, 原版geoIP, updategeoIP
Menu, Submenu1, Add, IPIPgeoIP, updateipgeoIP
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

MenuHandlerUninstallTap:
    gosub, DeleteTap
    FileGetSize, UninstallSize, C:\Program Files\TAP-Windows\Uninstall.exe, K
    If UninstallSize
        RunWait, C:\Program Files\TAP-Windows\Uninstall.exe,,Hide
    IniWrite, false, pref.ini, profile, tapdevState
return

MenuHandlerAddTap:
    RunWait, %A_ScriptDir%\App\tap\add_tap_device.bat,,
    IniWrite, true, pref.ini, profile, tapdevState
return

defaultTap:
    IniWrite, true, pref.ini, profile, defaulttap
    goto, MenuHandlerStartTap
return

cancledefaultTap:
    IniWrite, false, pref.ini, profile, defaulttap
    goto, MenuHandlerDeleteTap
return

MenuHandlerStartTap:
    IniWrite, true, pref.ini, profile, tapcurrentState
    gosub, MenuHandlerrestartclash
return

MenuHandlerDeleteTap:
    gosub, DeleteTap
    gosub, MenuHandlerrestartclash
return

StartTap:
    IniWrite, true, pref.ini, profile, tapcurrentState
    IniRead, configName, pref.ini, profile, configname, Default
    IniRead, devstate, pref.ini, profile, tapdevState, Default
    If (%devstate% <> True And %devstate%<>true){
        gosub, MenuHandlerAddTap
    } 
    RunWait, %A_ScriptDir%\App\tap\tapstart.bat,,Hide
    RunWait, %A_ScriptDir%\Bat\settapconfig.bat %configName%,,Hide
return

DeleteTap:
    IniWrite, false, pref.ini, profile, tapcurrentState
    IniRead, configName, pref.ini, profile, configname, Default 
    RunWait, %A_ScriptDir%\App\tap\tapstop.bat,,Hide
    FileDelete, Profile\tap\tap_%configname%
    FileDelete, Profile\selection\tap_%configname%.dat 
return

Url:
    Gui, Sub:Destroy
    Gui, Sub:Add, Text,, 订阅链接:
    Gui, Sub:Add, Edit,w500 vsubUrl
    Gui, Sub:Add, Text,, 配置名称:
    Gui, Sub:Add, Edit,w500 vsubName
    Gui, Sub:Add, Button, Default, 保存
    Gui, Sub:Show,,clash配置添加
return

SubGuiclose:
    Gui, Sub:Destroy
return

SubButton保存:
    Gui, Sub:Submit
    If (subUrl <> "" And subName <> ""){
        IniWrite, "%subUrl%", pref.ini, profile, currentUrl
        IniWrite, %subName%.yaml, pref.ini, profile, configname
    }
    gosub, Updateconfig
    Gui, Sub:Destroy
return
Button订阅转换:
    Run, %A_ScriptDir%\Profile\sub-web\index.html
return

Button添加:
    Goto,Url
return

Button打开目录:
    Run, %A_ScriptDir%\Profile
return
Button刷新:
    goto,SetConfig
return

GuiClose:
    Gui, Destroy 
return

SetConfig:
    Gui, Destroy
    Gui, Add, Text,, 双击应用或删除，右键单击打开配置文件
    Gui, Add, ListView,r10 w800 Multi AltSubmit gSelectConfigs, 名称|更新日期|大小|订阅地址
    Gui, Add, Button, Default w80, 添加
    Gui, Add, Button, xp+100 yp w80, 刷新
    Gui, Add, Button, xp+100 yp w80, 订阅转换
    Gui, Add, Button, xp+100 yp w80, 打开目录
    Loop, Profile\*.yaml
    {
        FileReadLine, oUrl, %A_ScriptDir%\Profile\%A_LoopFileName%, 1
        StringReplace, cUrl, oUrl, #
        StringReplace, cUrl, cUrl, %A_SPACE%
        StringMid, monthmodi, A_LoopFileTimeModified, 5, 2
        StringMid, datemodi, A_LoopFileTimeModified, 7, 2
        StringMid, hourmodi, A_LoopFileTimeModified, 9, 2
        StringMid, minmodi, A_LoopFileTimeModified, 11, 2
        TimeModi = %monthmodi%/%datemodi% %hourmodi%:%minmodi%
        LV_Add("", A_LoopFileName, TimeModi,A_LoopFileSizeKB, cUrl) 
    } 
    LV_ModifyCol() ; 根据内容自动调整每列的大小.
    LV_ModifyCol(2,"100 Integer") ; 为了进行排序, 指出列 2 是整数.
    ; 显示窗口并返回. 每当用户点击一行时脚本会发出通知.
    Gui, Show
return

SelectConfigs:
    if A_GuiEvent = DoubleClick
    {
        LV_GetText(NameText, A_EventInfo) ; 从行的第一个字段中获取文本.
        LV_GetText(Urltext, A_EventInfo, 3)
        If (%A_EventInfo%<>0){
            MsgBox, 3,, "是"：应用当前配置并重启clash`n"否"：删除当前配置
            IfMsgBox, Yes
            {
                IniWrite, %NameText%, pref.ini, profile, configname
                IniWrite, %UrlText%, pref.ini, profile, currentUrl
                MsgBox, 4,, 选中配置：%NameText%，是否重启clash？
                IfMsgBox, No
                return ; 如果选择 No, 脚本将会终止.
                gosub, MenuHandlerrestartclash
            }
            IfMsgBox, No
            {
                MsgBox, 4,, 当前配置:%NameText%，是否删除
                IfMsgBox, Yes
                {
                    FileDelete, %A_ScriptDir%\Profile\%NameText%
                    FileDelete, %A_ScriptDir%\Profile\selection\%NameText%.dat
                    FileDelete, %A_ScriptDir%\Profile\selection\tap_%NameText%.dat
                    FileDelete, %A_ScriptDir%\Profile\tap\tap_%NameText%
                } 
            }
        }
    } 
    if A_GuiEvent = RightClick
    {
        LV_GetText(NameText, A_EventInfo) ; 从行的第一个字段中获取文本.
        LV_GetText(Urltext, A_EventInfo, 3)
        If (%A_EventInfo%<>0){
            Run, open "%A_ScriptDir%\Profile\%NameText%"
        }
    }
return

UWPProxy:
    RunWait, %A_ScriptDir%\Bat\UWP.bat,,Hide
return

updategeoIP:
    RunWait, %A_ScriptDir%\Bat\geoIP.bat
    Goto, MenuHandlerrestartclash
return

updateipgeoIP:
    RunWait, %A_ScriptDir%\Bat\ipipgeoIP.bat
    Goto, MenuHandlerrestartclash
return

setsys:
    IniRead, tapState, pref.ini, profile, tapcurrentState, Default
    If (%tapState% <> True And %tapState%<>true){
        RunWait, %A_ScriptDir%\Bat\setsys.bat,,Hide
    }
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
    IniRead, tapState, pref.ini, profile, tapcurrentState, Default
    If (%tapState% <> True And %tapState%<>true){
        TapVar := "关-❌"
    }
    else{
        ; gosub, StartTap
        TapVar := "开-✅"
    }
    IniRead, configName, pref.ini, profile, configname, Default
    TrayTip % Format("📢运行状态📢"),Clash状态：%ClashVar%`n系统 代理：%ProxyVar%`nTap 状态：%TapVar%`n当前配置：%configName%
    
return

MenuHandlerstartclash:
    Process,Exist, clash-win64.exe ;                         
    if ErrorLevel
    { 
        MsgBox, 4,, clash已启动！
    }
    else
    {
        IniRead, configName, pref.ini, profile, configname, Default
        IniRead, tapState, pref.ini, profile, tapcurrentState, Default
        FileGetSize, configSize, %A_ScriptDir%\Profile\%configName%, K
        If configSize
            FileDelete, %A_ScriptDir%\Profile\pak_%configName%
        else 
        {
            FileMove, %A_ScriptDir%\Profile\pak_%configName%, %A_ScriptDir%\Profile\%configName%, 1
            TrayTip % Format("📢订阅失败📢"),已使用之前配置`n请检查订阅
        }
        If (%tapState% <> True And %tapState%<>true){
            RunWait, %A_ScriptDir%\Bat\startclash.bat %configName% %configName%.dat,,Hide
            goto, setsys
        }
        else
        {
            gosub, StartTap
            RunWait, %A_ScriptDir%\Bat\startclash.bat tap\tap_%configName% tap_%configName%.dat,,Hide
            goto, dissys
        } 
    }
return

MenuHandlerstopclash:
    MsgBox, 4,, 是否关闭clash和系统应用
    IfMsgBox, Yes
    {
        IniRead, configName, pref.ini, profile, configname, Default
        IniRead, tapState, pref.ini, profile, tapcurrentState, Default
        If (%tapState% <> True And %tapState%<>true){
            RunWait, %A_ScriptDir%\Bat\stop.bat %configName%,,Hide
        }
        else{
            ; gosub, StartTap
            RunWait, %A_ScriptDir%\Bat\stop.bat tap_%configName%,,Hide
        } 
        IniRead, tapState1, pref.ini, profile, defaulttap, Default
        If (%tapState1% <> True And %tapState1%<>true){
            gosub, DeleteTap
        }
        IniWrite, %tapState1%, pref.ini, profile, tapcurrentState 
    }
return

MenuHandlerrestartclash:
    IniRead, configName, pref.ini, profile, configname, Default
    IniRead, tapState, pref.ini, profile, tapcurrentState, Default
    If (%tapState% <> True And %tapState%<>true){
        RunWait, %A_ScriptDir%\Bat\stop.bat %configName%,,Hide
    }
    else{
        RunWait, %A_ScriptDir%\Bat\stop.bat tap_%configName%,,Hide
    } 
    gosub, MenuHandlerstartclash
return

MenuHandlerrestartconfig:
    IniRead, configName, pref.ini, profile, configname, Default
    IniRead, tapState, pref.ini, profile, tapcurrentState, Default
    FileGetSize, configSize, %A_ScriptDir%\Profile\%configName%, K
    If configSize
        FileDelete, %A_ScriptDir%\Profile\pak_%configName%
    else 
    {
        FileMove, %A_ScriptDir%\Profile\pak_%configName%, %A_ScriptDir%\Profile\%configName%, 1
        TrayTip % Format("📢订阅失败📢"),已使用之前配置`n请检查订阅
    }
    If (%tapState% <> True And %tapState%<>true)
    {
        RunWait, %A_ScriptDir%\Bat\restartconfig.bat %configName% %configName%.dat,,Hide
        goto, setsys
    }
    else
    {
        gosub, StartTap
        RunWait, %A_ScriptDir%\Bat\restartconfig.bat tap\tap_%configName% tap_%configName%.dat,,Hide
        goto, dissys
    } 
return

Updateconfig:
    IniRead, subconverterName, pref.ini, own, sub, Default
    IniRead, subconverterUrl, pref.ini, profile, currentUrl, Default
    IniRead, configName, pref.ini, profile, configname, Default
    FileGetSize, configSize, %A_ScriptDir%\Profile\%configName%, K
    If configSize
        {}
    else
        FileCopy, %A_ScriptDir%\Profile\defaultconfig\default.yaml, %A_ScriptDir%\Profile\%configName%, 1
    FileCopy, %A_ScriptDir%\Profile\%configName%, %A_ScriptDir%\Profile\pak_%configName%, 1
    RunWait, %A_ScriptDir%\Bat\updateconfig.bat %subconverterName% "%subconverterUrl%" %configName%,,Hide
    ; Goto, MenuHandlerrestartclash
    goto, MenuHandlerrestartconfig
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
    MsgBox, 4,, 是否退出
    IfMsgBox, No
return
IniRead, configName, pref.ini, profile, configname, Default
IniRead, tapState, pref.ini, profile, tapcurrentState, Default
If (%tapState% <> True And %tapState%<>true){
    RunWait, %A_ScriptDir%\Bat\stop.bat %configName%,,Hide
}
else{
    ; gosub, StartTap
    RunWait, %A_ScriptDir%\Bat\stop.bat tap_%configName%,,Hide
} 
IniRead, tapState1, pref.ini, profile, defaulttap, Default
If (%tapState1% <> True And %tapState1%<>true){
    gosub, DeleteTap
}
IniWrite, %tapState1%, pref.ini, profile, tapcurrentState 
Gosub, checkclash
ExitApp

