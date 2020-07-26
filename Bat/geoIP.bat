@echo off
cd .\App
set CODE=oeEqpP5QI21N
curl -o GeoLite2-Country.tar.gz "https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country&license_key=%CODE%&suffix=tar.gz"
7za.exe e GeoLite2-Country.tar.gz
7za e GeoLite2-Country.tar "GeoLite2-Country*\GeoLite2-Country.mmdb" -aoa
del "GeoLite2-Country.tar*" /f /q
ren GeoLite2-Country.mmdb Country.mmdb
move /Y Country.mmdb ..\Profile
 