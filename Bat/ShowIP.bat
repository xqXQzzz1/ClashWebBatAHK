@echo off 
setlocal enabledelayedexpansion
for /f "tokens=4" %%a in ('route print^|findstr 0.0.0.0.*0.0.0.0^|findstr /V 198.18.0.1') do (
 set IP=%%a
)
echo %IP%
pause
