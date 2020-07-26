@echo off
cd .\App
curl -o Country.mmdb "https://cdn.jsdelivr.net/gh/alecthw/mmdb_china_ip_list@release/Country.mmdb"
move /Y Country.mmdb ..\Profile