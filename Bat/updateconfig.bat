@echo off
taskkill /IM subconverter.exe /F>NUL 2>NUL
set subconverterName=%1
set URL=%2
set configname=%3
start /b .\App\subconverter\subconverter.exe -f .\App\subconverter\%subconverterName%
cd .\App
@REM curl --socks5 127.0.0.1:7890 -o ..\Profile\%configname% %URL%
curl  -o ..\Profile\%configname% %URL%