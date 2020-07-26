cd ./App
set configname=%1
curl -s http://127.0.0.1:9090/proxies | cmdutils --getselected > "..\Profile\selection\%configname%.dat"
taskkill /IM  subconverter.exe /F /T>NUL 2>NUL
taskkill /f clashtun2socks.exe /t>NUL 2>NUL
taskkill /IM  clash-win64.exe /F /T>NUL 2>NUL
sysproxy set 1