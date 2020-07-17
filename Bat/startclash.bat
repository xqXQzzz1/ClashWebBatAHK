chcp 65001
setlocal enabledelayedexpansion

taskkill /IM clash-win64.exe /F>NUL 2>NUL
set key="configname"
for /f "eol=# eol=; tokens=1,* delims==" %%i in (pref.ini) do ( 
    if "%%i"==%key% (
        set configname=%%~j
        goto next 
        )
)
:next
start /b .\App\clash-win64.exe -d .\Profile -f .\Profile\%configname%

cd ./App

set curLine=1
for /f "tokens=*" %%i in ('type "..\Profile\selection\%configname%.dat" ^| cmdutils --useselected') do (
  if "!curLine!" == "1" (
    set group=%%i
    set curLine=2
  ) else (
    echo %%i | curl -X PUT -s -o NUL -H "Content-Type: application/json;charset=UTF-8" --data-binary @- --no-buffer "http://127.0.0.1:9090/proxies/!group!"
    set curLine=1
  )
)
