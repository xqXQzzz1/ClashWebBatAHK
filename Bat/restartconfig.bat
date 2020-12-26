chcp 65001
setlocal enabledelayedexpansion
@REM taskkill /IM  subconverter.exe /F /T>NUL 2>NUL

set outval=data
set !outval!={"path": "%cd%\Profile\%~1"}
set !outval!=!%outval%:\=\\!
set !outval!=!%outval%:"=\"!
set !outval!="!%outval%!"

cd .\App
set Selected=%2
curl -s http://127.0.0.1:9090/proxies | cmdutils --getselected > "..\Profile\selection\%Selected%"
curl -s -X PUT -d !data! --write-out %%{http_code} http://127.0.0.1:9090/configs

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
