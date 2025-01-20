@echo off
:: Запуск backend
start cmd /k "cd server && npm run start"

:: Ждем 2 секунды, чтобы backend успел стартовать
timeout /t 2

:: Запуск frontend
start cmd /k "cd frontend && npm run dev"