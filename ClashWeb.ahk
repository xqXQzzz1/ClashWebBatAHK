full_command_line := DllCall("GetCommandLine", "str")
if not (A_IsAdmin or RegExMatch(full_command_line, " /restart(?!\S)"))
{
    try
    {
        if A_IsCompiled
            Run *RunAs "%A_ScriptFullPath%" /restart
        else
            Run *RunAs "%A_AhkPath%" /restart "%A_ScriptFullPath%"
    }
    ExitApp
}

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

Menu, Submenu5, Add, 启动TUN, MenuHandlerStartTun
Menu, Submenu5, Add, 默认启动, defaultTun
Menu, Submenu5, Add, 取消默认, cancledefaultTun
Menu, Submenu5, Add, 取消TUN, MenuHandlerDeleteTun
Menu, tray, add, TUN管理, :Submenu5 

Menu, Submenu1, Add, 原版geoIP, updategeoIP
; Menu, Submenu1, Add, 添加规则, updategeoIP
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

; uploadquan:
;     RunWait, %A_ScriptDir%\Bat\uploadquan.bat,,
; return
; *********About Tun *********
MenuHandlerStartTun:
    IniWrite, tun, pref.ini, profile, currentState
    gosub, MenuHandlerrestartclash
Return

defaultTun:
    IniWrite, tun, pref.ini, profile, defaultState
    goto, MenuHandlerStartTun
Return

cancledefaultTun:
    IniWrite, general, pref.ini, profile, defaultState
    goto, MenuHandlerDeleteTun
return

MenuHandlerDeleteTun:
    gosub, DeleteTun
    goto, MenuHandlerrestartclash
return

StartTun:
    IniWrite, tun, pref.ini, profile, currentState
    IniRead, configName, pref.ini, profile, configname, Default
    RunWait, %A_ScriptDir%\Bat\settunconfig.bat %configName%,,Hide
return

DeleteTun:
    IniWrite, general, pref.ini, profile, currentState
    IniRead, configName, pref.ini, profile, configname, Default 
    FileDelete, Profile\selection\tun_%configname%.dat 
return

; *********About Tap *********
MenuHandlerUninstallTap:
    gosub, DeleteTap
    FileGetSize, UninstallSize, C:\Program Files\TAP-Windows\Uninstall.exe, 
    If UninstallSize
        RunWait, C:\Program Files\TAP-Windows\Uninstall.exe,,Hide
    IniWrite, False, pref.ini, profile, tapdevState
return

MenuHandlerAddTap:
    RunWait, %A_ScriptDir%\App\tap\add_tap_device.bat,,
    IniWrite, True, pref.ini, profile, tapdevState
return

defaultTap:
    IniWrite, tap, pref.ini, profile, defaultState
    goto, MenuHandlerStartTap
return

cancledefaultTap:
    IniWrite, general, pref.ini, profile, defaultState
    goto, MenuHandlerDeleteTap
return

MenuHandlerStartTap:
    IniWrite, tap, pref.ini, profile, currentState
    gosub, MenuHandlerrestartclash
return

MenuHandlerDeleteTap:
    gosub, DeleteTap
    goto, MenuHandlerrestartclash
return

StartTap:
    IniWrite, tap, pref.ini, profile, currentState
    IniRead, configName, pref.ini, profile, configname, Default
    IniRead, devstate, pref.ini, profile, tapdevState, Default
    If (devstate != True){
        gosub, MenuHandlerAddTap
    } 
    RunWait, %A_ScriptDir%\App\tap\tapstart.bat,,Hide
    RunWait, %A_ScriptDir%\Bat\settapconfig.bat %configName%,,Hide
return

DeleteTap:
    IniWrite, general, pref.ini, profile, currentState
    IniRead, configName, pref.ini, profile, configname, Default 
    RunWait, %A_ScriptDir%\App\tap\tapstop.bat,,Hide
    FileDelete, Profile\selection\tap_%configname%.dat 
return

; *********about ConfigSet********

; GuiClose:
;     Gui, Destroy 
; return

SetConfig:
    Gui, Destroy
    Gui, Add, Text,, 双击配置文件进行下一步操作
    Gui, Add, ListView,r10 w800 Multi AltSubmit gSelectConfigs, 名称|更新日期|大小|订阅地址
    Gui, Add, Button, Default w80, 添加
    Gui, Add, Button, xp+100 yp w80, 订阅转换
    Gui, Add, Button, xp+100 yp w80, 打开目录
    Loop, Profile\*.yaml
    {
        FileReadLine, oUrl, %A_ScriptDir%\Profile\%A_LoopFileName%, 1
        cUrl := StrSplit(oUrl, ":http")
        cUrl := cUrl[2]
        cUrl := StrSplit(cUrl, "NicoNewBeee")
        cUrl := cUrl[1]
        cUrl = http%cUrl%
        StringMid, monthmodi, A_LoopFileTimeModified, 5, 2
        StringMid, datemodi, A_LoopFileTimeModified, 7, 2
        StringMid, hourmodi, A_LoopFileTimeModified, 9, 2
        StringMid, minmodi, A_LoopFileTimeModified, 11, 2
        TimeModi = %monthmodi%/%datemodi% %hourmodi%:%minmodi%
        LV_Add("", A_LoopFileName, TimeModi, A_LoopFileSizeKB, cUrl) 
    } 
    LV_ModifyCol() ; 根据内容自动调整每列的大小.
    LV_ModifyCol(2,"100 Integer") ; 为了进行排序, 指出列 2 是整数.
    ; 显示窗口并返回. 每当用户点击一行时脚本会发出通知.
    Gui, Show
return

Button添加:
    Goto,Url
return

Url:
    Gui, Destroy
    Gui, Add, Text,, 订阅链接:
    Gui, Add, Edit,w500 vsubUrl
    Gui, Add, Text,, 配置名称，不支持中文(例如：nico):
    Gui, Add, Edit,w500 vsubName
    Gui, Add, Button, Default, 保存
    Gui, Show
return

Button保存:
    Gui, Submit
    If (subUrl <> "" And subName <> ""){
        Needle := ".yaml"
        IfInString, subName, %Needle%
        {

        }
        else
        {
            subName := subName ".yaml"
        }
        IniRead, subconverterName, pref.ini, own, sub, Default
        RunWait, %A_ScriptDir%\Bat\updateconfig.bat %subconverterName% "%subUrl%" %subName%,,
        FileEncoding, UTF-8-RAW
        FileRead, currentConfig, %A_ScriptDir%\Profile\%subName%
        FileDelete, %A_ScriptDir%\Profile\%subName% 
        FileAppend, #托管地址: , %A_ScriptDir%\Profile\%subName% , UTF-8-RAW
        FileAppend, %subUrl% , %A_ScriptDir%\Profile\%subName% , UTF-8-RAW 
        FileAppend, NicoNewBeee的Clash控制台`n , %A_ScriptDir%\Profile\%subName% , UTF-8-RAW
        FileAppend, %currentConfig%`n , %A_ScriptDir%\Profile\%subName%, UTF-8-RAW
        currentConfig := ""
        Gui, Destroy
        goto, SetConfig
    }
return

Button订阅转换:
    Run, %A_ScriptDir%\Bat\Subcon.bat,,Hide
Return

Button打开目录:
    Run, %A_ScriptDir%\Profile
return

SelectConfigs:
    if A_GuiEvent = DoubleClick
    {
        LV_GetText(NameText, A_EventInfo) ; 从行的第一个字段中获取文本.
        LV_GetText(Urltext, A_EventInfo, 4)
        If (%A_EventInfo%<>0){
            Gui, Destroy
            Gui, Add, Text,, 
            Gui, Add, Text,, 
            Gui, Add, Text,, 所选文件：%NameText% 
            Gui, Add, Text,, 
            Gui, Add, Text,, 
            Gui, Add, Button, Default w80, 启动
            ; Gui, Add, Button, xp+90 yp w80, 更新
            Gui, Add, Button, xp+90 yp w80, 修改
            Gui, Add, Button, xp+90 yp w80, 查看
            Gui, Add, Button, xp+90 yp w80, 删除
            Gui, Add, Button, xp+90 yp w80, 取消
            Gui, Show
        }
    }
return

Button启动:
    Gui, Submit
    ; IniRead, configName, pref.ini, profile, configname, Default
    ; If (State = "tap"){
    ;     RunWait, %A_ScriptDir%\Bat\saveSelected.bat tap_%configName%,,Hide
    ; }
    ; else if (State = "tun")
    ; {
    ;     RunWait, %A_ScriptDir%\Bat\saveSelected.bat tun_%configName%,,Hide
    ; } 
    ; else{
    ;     RunWait, %A_ScriptDir%\Bat\saveSelected.bat %configName%,,Hide
    ; }
    IniWrite, %NameText%, pref.ini, profile, configname
    goto, MenuHandlerrestartconfig
return

Button修改:
    Gui, Submit
    Gui, Destroy
    Gui, Add, Text,, 所选配置
    Gui, Add,Edit, w500 va,%NameText%
    Gui, Add, Text,, 订阅地址
    Gui, Add,Edit, w500 vb,%Urltext%
    Gui, Add, Button, Default w80, 确认修改
    ; Gui, Add, Button, xp+90 yp w80, 订阅/转换
    Gui, Add, Button, xp+90 yp w80, 取消
    Gui, Show
return

Button确认修改:
    Gui, Submit
    Needle := ".yaml"
    IfInString, a, %Needle%
    {

    }
    else
    {
        a := a ".yaml"
    }
    IniRead, subconverterName, pref.ini, own, sub, Default
    RunWait, %A_ScriptDir%\Bat\updateconfig.bat %subconverterName% "%b%" %a%,,
    FileEncoding, UTF-8-RAW
    FileRead, currentConfig, %A_ScriptDir%\Profile\%a%
    FileDelete, %A_ScriptDir%\Profile\%a% 
    FileAppend, #托管地址: , %A_ScriptDir%\Profile\%a% , UTF-8-RAW 
    FileAppend, %b% , %A_ScriptDir%\Profile\%a% , UTF-8-RAW
    FileAppend, NicoNewBeee的Clash控制台`n , %A_ScriptDir%\Profile\%a% , UTF-8-RAW
    FileAppend, %currentConfig%`n , %A_ScriptDir%\Profile\%a%, UTF-8-RAW
    currentConfig := ""
    IniRead, Nt, pref.ini, profile, configname
    ; MsgBox, 0,, "%Nt%"`n所选配置:为当前配置，请更换当前配置`n"%NameText%"
    If (Nt != NameText)
    {
        Gui, Destroy
        goto, SetConfig
    }
    else
    {
        Gui, Destroy
        goto, MenuHandlerrestartconfig
    }

return

Button删除:
    Gui, Submit
    IniRead, Nt, pref.ini, profile, configname
    ; MsgBox, 0,, "%Nt%"`n所选配置:为当前配置，请更换当前配置`n"%NameText%"
    If (Nt != NameText)
    {
        MsgBox, 4,, 所选配置:%NameText%，是否删除
        IfMsgBox, Yes
        {
            FileDelete, %A_ScriptDir%\Profile\%NameText%
            FileDelete, %A_ScriptDir%\Profile\selection\%NameText%.dat
            FileDelete, %A_ScriptDir%\Profile\selection\tap_%NameText%.dat
            FileDelete, %A_ScriptDir%\Profile\selection\tun_%NameText%.dat
            FileDelete, %A_ScriptDir%\Profile\providers
        } 

    }
    else
    {
        MsgBox, 0,, 所选配置:为当前配置，请更换当前配置
        IfMsgBox, Yes
        {
            Gui, Destroy
            goto, SetConfig
        }
    }
    Gui, Destroy
    goto, SetConfig
return

Button查看:
    Gui, Submit
    Run, open "%A_ScriptDir%\Profile\%NameText%"
    goto,SetConfig
return

Button取消:
    goto, SetConfig
return

; about *********
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
    ; IniRead, tapState, pref.ini, profile, tapcurrentState, Default
    ; If (%tapState% <> True And %tapState%<>true){
    ;     ; Menu, Tray, Check,系统代理
    ;     RunWait, %A_ScriptDir%\Bat\setsys.bat,,Hide
    ;     ; IniWrite, True, pref.ini, profile, sysState
    ; }
    RunWait, %A_ScriptDir%\Bat\setsys.bat,,Hide
    Goto, checkclash
return

dissys:
    ; Menu, Tray, UnCheck,系统代理
    RunWait, %A_ScriptDir%\Bat\dissys.bat,,Hide
    ; IniWrite, false, pref.ini, profile, sysState
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
    IniRead, State, pref.ini, profile, currentState, Default
    If (State = "tap"){
        TapVar := "Tap模式"
    }
    else if (State = "tun")
    {
        TapVar := "Tun模式"
    }
    else{
        TapVar := "常规模式"
    }
    IniRead, configName, pref.ini, profile, configname, Default
    TrayTip % Format("📢运行状态📢"),Clash状态：%ClashVar%`n系统 代理：%ProxyVar%`n连接 模式：%TapVar%`n当前 配置：%configName%

return

MenuHandlerstartclash:
    Process,Exist, clash-win64.exe ;                         
    if ErrorLevel
    { 
        MsgBox, 0,, clash已启动！
    }
    else
    {
        IniRead, configName, pref.ini, profile, configname, Default
        RunWait, %A_ScriptDir%\Bat\startclash.bat %configName%,,Hide
        FileGetSize, configSize, %A_ScriptDir%\App\message.json,
        If configSize
        {
            FileRead, Message, %A_ScriptDir%\App\message.json
            MsgBox, 0, , %Message%`n请检查配置，已使用默认配置
            Message := ""
            FileDelete, %A_ScriptDir%\App\message.json
        }
        else 
        {
            IniRead, State, pref.ini, profile, currentState, Default
            If (State = "tap"){
                gosub, StartTap
                RunWait, %A_ScriptDir%\Bat\restartconfig.bat tap_%configName%,,Hide
                FileDelete, %A_ScriptDir%\Profile\tap_%configName%
                FileDelete, %A_ScriptDir%\App\message.json
                goto, dissys
            }
            else if (State = "tun")
            {
                gosub, StartTun
                RunWait, %A_ScriptDir%\Bat\restartconfig.bat tun_%configName%,,Hide
                FileDelete, %A_ScriptDir%\Profile\tun_%configName%
                FileDelete, %A_ScriptDir%\App\message.json
                goto, dissys
            } 
            else{
                FileDelete, %A_ScriptDir%\App\message.json
                goto, setsys
            }
        }

    }
return

MenuHandlerstopclash:
    MsgBox, 4,, 是否关闭clash和系统应用
    IfMsgBox, Yes
    {
        IniRead, configName, pref.ini, profile, configname, Default
        IniRead, State, pref.ini, profile, currentState, Default
        If (State = "tap"){
            ; gosub, StartTap
            RunWait, %A_ScriptDir%\Bat\stop.bat tap_%configName%,,Hide
        }
        else if (State = "tun")
        {
            ; gosub, StartTun
            RunWait, %A_ScriptDir%\Bat\stop.bat tun_%configName%,,Hide
        } 
        else{
            RunWait, %A_ScriptDir%\Bat\stop.bat %configName%,,Hide
        }
        IniRead, dState, pref.ini, profile, defaultState, Default
        If (dState != "tap"){
            gosub, DeleteTap
        }
        If (dState != "tun"){
            gosub, DeleteTun
        }
        IniWrite, %dState%, pref.ini, profile, currentState 
    }
return

MenuHandlerrestartclash:
    IniRead, configName, pref.ini, profile, configname, Default
    IniRead, State, pref.ini, profile, currentState, Default
    If (State = "tap"){
        RunWait, %A_ScriptDir%\Bat\stop.bat tap_%configName%,,Hide
    }
    else if (State = "tun")
    {
        RunWait, %A_ScriptDir%\Bat\stop.bat tun_%configName%,,Hide
    } 
    else{
        RunWait, %A_ScriptDir%\Bat\stop.bat %configName%,,Hide
    }
    goto, MenuHandlerstartclash
return

MenuHandlerrestartconfig:
    IniRead, configName, pref.ini, profile, configname, Default
    IniRead, State, pref.ini, profile, currentState, Default
    If (State = "tap"){
        gosub, StartTap
        RunWait, %A_ScriptDir%\Bat\saveSelected.bat tap_%configName%,,Hide
        RunWait, %A_ScriptDir%\Bat\restartconfig.bat tap_%configName%,,Hide
        FileDelete, %A_ScriptDir%\Profile\tap_%configName%
        FileGetSize, configSize, %A_ScriptDir%\App\message.json,
        If configSize
        {
            FileRead, Message, %A_ScriptDir%\App\message.json
            MsgBox, 0, , %Message%`n请检查配置，重载失败
            Message := ""
            FileDelete, %A_ScriptDir%\App\message.json
        }
        Else{
            FileDelete, %A_ScriptDir%\App\message.json
            goto, dissys
        }
    }
    else if (State = "tun")
    {
        gosub, StartTun
        RunWait, %A_ScriptDir%\Bat\saveSelected.bat tun_%configName%,,Hide
        RunWait, %A_ScriptDir%\Bat\restartconfig.bat tun_%configName%,,Hide
        FileDelete, %A_ScriptDir%\Profile\tun_%configName%
        FileGetSize, configSize, %A_ScriptDir%\App\message.json,
        If configSize
        {
            FileRead, Message, %A_ScriptDir%\App\message.json
            MsgBox, 0, , %Message%`n请检查配置，重载失败
            Message := ""
            FileDelete, %A_ScriptDir%\App\message.json
        }
        Else{
            FileDelete, %A_ScriptDir%\App\message.json
            goto, dissys
        }
    } 
    else{
        RunWait, %A_ScriptDir%\Bat\saveSelected.bat %configName%,,Hide
        RunWait, %A_ScriptDir%\Bat\restartconfig.bat %configName%,,Hide
        FileGetSize, configSize, %A_ScriptDir%\App\message.json,
        If configSize
        {
            FileRead, Message, %A_ScriptDir%\App\message.json
            MsgBox, 0, , %Message%`n请检查配置，重载失败
            Message := ""
            FileDelete, %A_ScriptDir%\App\message.json
        }
        Else{
            FileDelete, %A_ScriptDir%\App\message.json
            goto, setsys
        }
    }
return

Updateconfig:
    IniRead, subconverterName, pref.ini, own, sub, Default
    IniRead, configName, pref.ini, profile, configname, Default
    FileReadLine, oUrl, %A_ScriptDir%\Profile\%configName%, 1
    cUrl := StrSplit(oUrl, ":http")
    cUrl := cUrl[2]
    cUrl := StrSplit(cUrl, "NicoNewBeee")
    cUrl := cUrl[1]
    cUrl = http%cUrl%
    RunWait, %A_ScriptDir%\Bat\updateconfig.bat %subconverterName% "%cUrl%" %configName%,,
    FileEncoding, UTF-8-RAW
    FileRead, currentConfig, %A_ScriptDir%\Profile\%configName%
    FileDelete, %A_ScriptDir%\Profile\%configName% 
    FileAppend, #托管地址: , %A_ScriptDir%\Profile\%configName% , UTF-8-RAW
    FileAppend, %cUrl% , %A_ScriptDir%\Profile\%configName% , UTF-8-RAW 
    FileAppend, NicoNewBeee的Clash控制台`n , %A_ScriptDir%\Profile\%configName% , UTF-8-RAW
    FileAppend, %currentConfig%`n , %A_ScriptDir%\Profile\%configName%, UTF-8-RAW
    currentConfig := ""
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
IniRead, State, pref.ini, profile, currentState, Default
If (State = "tap"){
    RunWait, %A_ScriptDir%\Bat\stop.bat tap_%configName%,,Hide
}
else if (State = "tun")
{
    RunWait, %A_ScriptDir%\Bat\stop.bat tun_%configName%,,Hide
} 
else{
    RunWait, %A_ScriptDir%\Bat\stop.bat %configName%,,Hide
}
IniRead, dState, pref.ini, profile, defaultState, Default
If (dState != "tap"){
    gosub, DeleteTap
}
If (dState != "tun"){
    gosub, DeleteTun
}
IniWrite, %dState%, pref.ini, profile, currentState 
Gosub, checkclash
ExitApp

