cd .\Profile
set configname=%1
copy /y %configname% tun\tun_%configname%
type defaultconfig\tunpart.yaml>>tun\tun_%configname%