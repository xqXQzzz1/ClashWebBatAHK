taskkill /IM subconverter.exe /F>NUL 2>NUL

set subconverterName=%1
set URL=%2
set configname=%3
start /b .\App\subconverter\subconverter.exe -f .\App\subconverter\%subconverterName%
cd .\App
curl -o ..\Profile\%configname% %URL%
