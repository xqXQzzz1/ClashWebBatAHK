chcp 65001
setlocal enabledelayedexpansion

taskkill /IM clash-win64.exe /F /T>NUL 2>NUL
set configname=%1
set Selected=%2
start /b .\App\clash-win64.exe -d .\Profile -f .\Profile\%configname%

cd ./App

set curLine=1
for /f "tokens=*" %%i in ('type "..\Profile\selection\%Selected%" ^| cmdutils --useselected') do (
  if "!curLine!" == "1" (
    set group=%%i
    set curLine=2
  ) else (
    echo %%i | curl -X PUT -s -o NUL -H "Content-Type: application/json;charset=UTF-8" --data-binary @- --no-buffer "http://127.0.0.1:9090/proxies/!group!"
    set curLine=1
  )
)
