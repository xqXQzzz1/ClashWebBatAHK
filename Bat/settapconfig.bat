cd .\Profile
set configname=%1
copy /y %configname% tap_%configname%
type defaultconfig\tappart.yaml>>tap_%configname%