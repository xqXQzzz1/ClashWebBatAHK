REM saveselected
set key="configname"
for /f "eol=# eol=; tokens=1,* delims==" %%i in (pref.ini) do ( 
    if "%%i"==%key% (
        set configname=%%~j
        goto next 
        )
)
:next
cd ./App
curl -s http://127.0.0.1:9090/proxies | cmdutils --getselected > "..\Profile\selection\%configname%.dat"
taskkill /IM  subconverter.exe /F>NUL 2>NUL
taskkill /IM  clash-win64.exe /F>NUL 2>NUL
sysproxy set 1