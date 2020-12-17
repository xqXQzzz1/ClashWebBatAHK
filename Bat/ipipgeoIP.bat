@echo off
cd .\App
@REM curl -o Country.mmdb "https://cdn.jsdelivr.net/gh/alecthw/mmdb_china_ip_list@release/Country.mmdb"
curl -o Country.mmdb "https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb"
move /Y Country.mmdb ..\Profile