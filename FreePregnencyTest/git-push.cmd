@echo off
set PATH=%PATH%;"C:\Program Files\Git\bin";"C:\Program Files\Git\cmd"
git init
git add .
git commit -m "Initial commit"
echo Enter your GitHub repo URL:
set /p repo=
git remote add origin %repo%
git branch -M main
git push -u origin main
pause