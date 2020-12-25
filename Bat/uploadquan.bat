
taskkill /IM subconverter.exe /F>NUL 2>NUL
start /b .\App\subconverter\subconverter.exe -f .\App\subconverter\quan-pref-acl4ssr.yml
set URL="http://127.0.0.1:25500/getprofile?name=profiles/own-quan.ini&token=123456"
cd .\App
curl -o ..\Profile\quan.conf %URL%