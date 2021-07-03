@echo off
>NUL 2>&1 REG.exe query "HKU\S-1-5-19" || (
    ECHO SET UAC = CreateObject^("Shell.Application"^) > "%TEMP%\Getadmin.vbs"
    ECHO UAC.ShellExecute "%~f0", "%1", "", "runas", 1 >> "%TEMP%\Getadmin.vbs"
    "%TEMP%\Getadmin.vbs"
    DEL /f /q "%TEMP%\Getadmin.vbs" 2>NUL
    Exit /b
)
CD /D %~DP0\..\
SET PATH="%~dp0";"%~dp0App";%PATH%
Reg.exe add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" /v "clashweb" /t REG_SZ /d "\"%~dp0startupclash.bat\"" /f
pause