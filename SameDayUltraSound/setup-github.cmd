@echo off
echo Setting up GitHub repository...
git init
git add .
git commit -m "Initial commit - Next.js web3 project"
echo.
echo Now create a repository on GitHub and run:
echo git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo git branch -M main
echo git push -u origin main