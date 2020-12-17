chcp 65001
setlocal enabledelayedexpansion

set curLine=1
for /f "tokens=*" %%i in (.\Profile\config.yaml) do (
    if "%%i" == "rules:"
  if "!curLine!" == "1" (
    set group=%%i
    set curLine=2
  ) else (
    echo %%i | curl -X PUT -s -o NUL -H "Content-Type: application/json;charset=UTF-8" --data-binary @- --no-buffer "http://127.0.0.1:9090/proxies/!group!"
    set curLine=1
  )
)