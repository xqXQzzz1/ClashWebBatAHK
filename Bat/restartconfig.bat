chcp 65001
setlocal enabledelayedexpansion
@REM taskkill /IM  subconverter.exe /F /T>NUL 2>NUL

set outval=data
set !outval!={"path": "%cd%\Profile\%~1"}
set !outval!=!%outval%:\=\\!
set !outval!=!%outval%:"=\"!
set !outval!="!%outval%!"

@REM set outval1=data1
@REM set !outval1!={"path": "%cd%\Profile\defaultconfig\default.yaml"}
@REM set !outval1!=!%outval1%:\=\\!
@REM set !outval1!=!%outval1%:"=\"!
@REM set !outval1!="!%outval1%!"

cd .\App
@REM curl -s -X PUT -d !data1!  http://127.0.0.1:9090/configs?force=true > message.json
curl -s -X PUT -d !data!  http://127.0.0.1:9090/configs?force=false > message.json

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
