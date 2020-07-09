taskkill /IM clash-win64.exe /F>NUL 2>NUL
set key="configname"
for /f "eol=# eol=; tokens=1,* delims==" %%i in (pref.ini) do ( 
    if "%%i"==%key% (
        set configname=%%~j
        goto next 
        )
)
:next
start /b .\App\clash-win64.exe -d .\Profile -f .\Profile\%configname%