cd .\Profile
set configname=%1
copy /y %configname% tap\tap_%configname%
type defaultconfig\tappart.yaml>>tap\tap_%configname%