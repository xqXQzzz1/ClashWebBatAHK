chcp 65001
setlocal enabledelayedexpansion
@REM taskkill /IM  subconverter.exe /F /T>NUL 2>NUL

set outval=data
set !outval!={"path": "%cd%\Profile\%~1"}
set !outval!=!%outval%:\=\\!
set !outval!=!%outval%:"=\"!
set !outval!="!%outval%!"

cd .\App
curl -s -X PUT -d !data!  http://127.0.0.1:9090/configs > message.json

set curLine=1
for /f "tokens=*" %%i in ('type "..\Profile\selection\%~1.dat" ^| cmdutils --useselected') do (
  if "!curLine!" == "1" (
    set group=%%i
    set curLine=2
  ) else (
    echo %%i | curl -X PUT -s -o NUL -H "Content-Type: application/json;charset=UTF-8" --data-binary @- --no-buffer "http://127.0.0.1:9090/proxies/!group!"
    set curLine=1
  )
)
