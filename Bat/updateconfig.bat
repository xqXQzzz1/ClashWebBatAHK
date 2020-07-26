taskkill /IM subconverter.exe /F>NUL 2>NUL

set subconverterName=%1
set URL=%2
set configname=%3

start .\App\subconverter\subconverter.exe -f .\App\subconverter\%subconverterName%

cd .\App
curl -o ..\Profile\%configname% %URL%
cd ..\Profile
ren %configname% _temp_.yaml
echo # %URL%>%configname%
type _temp_.yaml>>%configname%
del _temp_.yaml
