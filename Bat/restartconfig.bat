chcp 65001
setlocal enabledelayedexpansion
taskkill /IM  subconverter.exe /F /T>NUL 2>NUL
set outval=data
set !outval!={"path": "%cd%\Profile\%~1"}
set !outval!=!%outval%:\=\\!
set !outval!=!%outval%:"=\"!
set !outval!="!%outval%!"

cd .\App
curl -s -X PUT -d !data! --write-out %%{http_code} http://127.0.0.1:9090/configs
REM curl -H "Content-Type: application/json" -X PUT --data-binary @"{\"path\": \".\Profile\%~1\"}"  http://127.0.0.1:9090/configs