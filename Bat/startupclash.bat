CD /D %~dp0\..\
taskkill /IM ClashWeb.exe /F >NUL 2>NUL
taskkill /IM clash-win64.exe /F >NUL 2>NUL
start ClashWeb.exe