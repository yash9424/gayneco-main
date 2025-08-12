@echo off
echo Setting up Git repository...
git init
git add .
git commit -m "Initial commit: Free Pregnancy Test website"
echo.
echo Enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git):
set /p repo_url=
git remote add origin %repo_url%
git branch -M main
git push -u origin main
echo.
echo Project pushed to GitHub successfully!
pause