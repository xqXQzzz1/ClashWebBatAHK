cd App\tap
setlocal
set DEVICE_NAME=clash-tap
set PATH=%PATH%;%SystemRoot%\system32;%SystemRoot%\system32\wbem;%SystemRoot%\system32\WindowsPowerShell/v1.0
call add_tap_device.bat
start  /b clashtun2socks.exe --tundev "tap0901:clash-tap:10.0.0.2:10.0.0.0:255.255.255.0" --netif-ipaddr 10.0.0.1 --netif-netmask 255.255.255.0 --socks-server-addr 127.0.0.1:7890 --netif-ip6addr fdfe:dcba:9876::1 --socks5-udp --logger stdout
netsh interface ip add route 0.0.0.0/0 %DEVICE_NAME% 10.0.0.1 metric=0 store=active
netsh interface ipv6 add route ::/0 %DEVICE_NAME% fdfe:dcba:9876::1 metric=0 store=active
ipconfig /flushdns