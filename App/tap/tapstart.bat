cd App\tap
setlocal
set DEVICE_NAME=clash-tap
set PATH=%PATH%;%SystemRoot%\system32;%SystemRoot%\system32\wbem;%SystemRoot%\system32\WindowsPowerShell/v1.0
call add_tap_device.bat
call tun2socks.vbs
netsh interface ip add route 0.0.0.0/0 %DEVICE_NAME% 10.0.0.1 metric=0 store=active
netsh interface ipv6 add route ::/0 %DEVICE_NAME% fdfe:dcba:9876::1 metric=0 store=active
ipconfig /flushdns