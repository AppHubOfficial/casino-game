@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

SET "CURRENT_DIR=%~dp0"

SET "BACKEND_DIR=%CURRENT_DIR%backend"
SET "FRONTEND_DIR=%CURRENT_DIR%frontend"

START cmd /k "cd /d !BACKEND_DIR! && nodemon server.js"

START cmd /k "cd /d !FRONTEND_DIR! && npm start"

ENDLOCAL
