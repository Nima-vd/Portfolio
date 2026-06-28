@echo off
REM Portfolio React + Express - Quick Start Script for Windows

echo.
echo 🚀 Portfolio Setup - React + Express
echo ====================================
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node -v
echo ✅ npm version:
npm -v
echo.

REM Backend Setup
echo 📦 Setting up Backend...
cd backend
call npm install
if errorlevel 1 (
    echo ❌ Backend setup failed
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed
cd ..
echo.

REM Frontend Setup
echo 📦 Setting up Frontend...
cd frontend
call npm install
if errorlevel 1 (
    echo ❌ Frontend setup failed
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed
cd ..
echo.

echo ============================================
echo ✅ Setup Complete!
echo ============================================
echo.
echo To start the application:
echo.
echo Terminal 1 - Backend:
echo   cd backend
echo   npm run dev
echo   Runs on: http://localhost:5000
echo.
echo Terminal 2 - Frontend:
echo   cd frontend
echo   npm run dev
echo   Runs on: http://localhost:3000
echo.
echo Then open: http://localhost:3000 in your browser
echo.
pause
