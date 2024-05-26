@echo off
setlocal EnableDelayedExpansion

REM Function to calculate Adler32 checksum
:adler32
setlocal
set "input=%~1"
echo !input! | openssl dgst -adler32 -binary | openssl enc -base64
endlocal

REM Function to calculate SHA1 checksum
:sha1
setlocal
set "input=%~1"
echo !input! | openssl dgst -sha1
endlocal

REM Read input
set /p "input=Name: "

REM Calculate Adler32 checksum
for /f %%a in ('call :adler32 "!input!"') do set "adler32_result=%%a"

REM Place the result between <cpk> and </cpk>
set "cpk=<cpk>!adler32_result!</cpk>"
set "fname=#!adler32_result!#.cpk"

REM Calculate SHA1 checksum of the result
for /f %%b in ('call :sha1 "!cpk!"') do set "sha1_result=%%b"

REM Print the SHA1 checksum
echo File Name: !fname!
echo File Content: !sha1_result!
