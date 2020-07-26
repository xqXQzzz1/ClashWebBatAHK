taskkill /IM clash-win64.exe /F /T>NUL 2>NUL
set default=%1
start /b .\App\clash-win64.exe -d .\Profile -f .\Profile\defaultconfig\%default%.yaml