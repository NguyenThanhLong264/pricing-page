@echo off
setlocal enabledelayedexpansion
set i=1
for %%a in (*.png) do (
    ren "%%a" "logo-!i!.png"
    set /a i+=1
)