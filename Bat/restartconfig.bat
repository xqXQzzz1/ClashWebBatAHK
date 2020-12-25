chcp 65001
setlocal enabledelayedexpansion
@REM taskkill /IM  subconverter.exe /F /T>NUL 2>NUL


cd .\App
set Selected=%2
curl -s http://127.0.0.1:9090/proxies | cmdutils --getselected > "..\Profile\selection\%Selected%"
@REM curl -s -X PUT -d !data! --write-out %%{http_code} http://127.0.0.1:9090/configs

set outval=data
set !outval!={"path": "%cd%\Profile\%~1"}
set !outval!=!%outval%:\=\\!
set !outval!=!%outval%:"=\"!
set !outval!="!%outval%!"

set setprofile_success=0

set arrname=curl_retdata
set _count_!arrname!=-1

for /f "tokens=*" %%i in ('curl -s -X PUT -d !data! --write-out %%{http_code} http://127.0.0.1:9090/configs') do (
  set strLine=%%i

  set arrname=curl_retdata
  set arrcount=!_count_%arrname%!
  set /a arrcount=!arrcount!+1
  set !arrname!!arrcount!=!strLine!
  set _count_!arrname!=!arrcount!

)
if not "!_count_curl_retdata!" == "-1" (
  if !_count_curl_retdata! gtr 0 (
    echo !curl_retdata0! | cmdutils --utf8toacp
  )
  
  set key=curl_retdata!_count_curl_retdata!
  set out=retcode
  set !out!=!%key%!

  if "!retcode!" == "204" (
    set setprofile_success=1
  )
)

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