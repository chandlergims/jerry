# PowerShell script to push to GitHub

# Configure git
git config user.email "user@example.com"
git config user.name "User"

# Add remote
git remote add origin https://github.com/chandlergims/jerry.git

# Commit changes
git add .
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
