cd .\Profile
set configname=%1
copy /y %configname% tun_%configname%
type defaultconfig\tunpart.yaml>>tun_%configname%