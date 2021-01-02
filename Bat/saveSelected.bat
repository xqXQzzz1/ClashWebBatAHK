chcp 65001
setlocal enabledelayedexpansion
set Selected=%~1
cd .\App
curl -s http://127.0.0.1:9090/proxies | cmdutils --getselected > "..\Profile\selection\%Selected%.dat"