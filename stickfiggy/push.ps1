# Simple script to push to GitHub
cd stickfiggy
git init
git add .
git commit -m "Initial commit" --allow-empty
git branch -M main
git remote add origin https://github.com/chandlergims/jerry.git
git push -u origin main -f
