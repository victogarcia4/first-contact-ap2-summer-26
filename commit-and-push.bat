@echo off
REM ============================================================
REM  One-click commit & push for the A&P II site
REM  Double-click this file, or run it from a terminal in this folder.
REM ============================================================

cd /d "%~dp0"

echo.
echo === Checking for the intro video ===
if not exist "public\assets\intro.mp4" (
  echo [!] WARNING: public\assets\intro.mp4 not found.
  echo     The site needs it. Copy your "Intro to AP.mp4" into public\assets\
  echo     and rename it to intro.mp4 before deploying.
  echo.
)

echo === Initializing git (safe to re-run) ===
git init
git branch -M main

echo === Setting the remote ===
git remote remove origin 2>nul
git remote add origin https://github.com/victogarcia4/first-contact-ap2-summer-26.git

echo === Staging and committing ===
git add .
git commit -m "A&P II course intro site: hero video, D2L materials, Zoom kickoff, intro player with sound"

echo === Pushing to GitHub ===
echo (You'll be asked to log in. Use a GitHub Personal Access Token as the password.)
git push -u origin main

echo.
echo === Done. If the push was rejected because the repo already has commits, run: ===
echo     git pull origin main --allow-unrelated-histories
echo     git push -u origin main
echo.
pause
