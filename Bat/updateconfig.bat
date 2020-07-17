
taskkill /IM subconverter.exe /F>NUL 2>NUL
set key="subconverter"
for /f "eol=# eol=; tokens=1,* delims==" %%i in (pref.ini) do ( 
    if "%%i"==%key% (
        set subconverterName=%%~j
        goto next0 
        )
)
:next0
start .\App/subconverter\subconverter.exe -f .\App\subconverter\%subconverterName%
set key="currentUrl"
for /f "eol=# eol=; tokens=1,* delims==" %%i in (pref.ini) do ( 
    if "%%i"==%key% (
        set URL=%%~j
        goto next1
        )
)
:next1
set key="configname"
for /f "eol=# eol=; tokens=1,* delims==" %%i in (pref.ini) do ( 
    if "%%i"==%key% (
        set configname=%%~j
        goto next2 
        )
)
:next2
cd .\App
curl -o ..\Profile\%configname% "%URL%"
cd ..\Profile
ren %configname% _temp.yaml
echo # "%URL%">%configname%
type _temp.yaml>>%configname%
del _temp.yaml


