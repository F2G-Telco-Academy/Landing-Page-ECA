@echo off
REM ECA Landing Page - Setup Script (Windows)
REM This script automates the setup process for the landing page

echo.
echo ============================================
echo    ECA Landing Page Setup (Windows)
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js detected: 
node -v
echo.

REM Install dependencies
echo [STEP 1/2] Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo [OK] Dependencies installed successfully
echo.

REM Build project
echo [STEP 2/2] Building project...
call npm run build

if %errorlevel% neq 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)

echo [OK] Build successful
echo.
echo ============================================
echo    Setup Complete!
echo ============================================
echo.
echo Next steps:
echo   1. Run 'npm run dev' to start development server
echo   2. Open http://localhost:3000 in your browser
echo   3. Customize content in src\components\sections\
echo   4. Add images to public\images\
echo   5. Review CHECKLIST.md before launch
echo.
echo Documentation:
echo   - START_HERE.md - Quick start guide
echo   - CUSTOMIZATION.md - How to customize
echo   - DEPLOYMENT.md - Deployment options
echo   - CHECKLIST.md - Pre-launch checklist
echo.
echo Happy building! 🎉
echo.
pause
