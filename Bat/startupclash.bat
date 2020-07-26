CD /D %~dp0\..\
taskkill /IM ClashWeb.exe /F /T >NUL 2>NUL
taskkill /IM clash-win64.exe /F /T >NUL 2>NUL
start ClashWeb.exe