@echo off

tun2socks.exe --tundev "tap0901:clash-tap:10.0.0.2:10.0.0.0:255.255.255.0" --netif-ipaddr 10.0.0.1 --netif-netmask 255.255.255.0 --socks-server-addr 127.0.0.1:7890 --netif-ip6addr fdfe:dcba:9876::1 --socks5-udp --logger stdout > tun2socks.log
