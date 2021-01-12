chcp 65001
setlocal enabledelayedexpansion

taskkill /IM clash-win64.exe /F /T>NUL 2>NUL
taskkill /IM UnblockNeteaseMusic.exe /F /T>NUL 2>NUL

set outval=data
set !outval!={"path": "%cd%\Profile\%~1"}
set !outval!=!%outval%:\=\\!
set !outval!=!%outval%:"=\"!
set !outval!="!%outval%!"

start /b .\App\clash-win64.exe -d .\App -f .\Profile\defaultconfig\default.yaml
cd .\App
curl -s -X PUT -d !data!  http://127.0.0.1:9090/configs > message.json
