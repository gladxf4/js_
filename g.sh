#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
    echo "Error: No commit message provided."
    echo "Usage: ./g.sh \"your commit message\""
    exit 1
fi

# Check if the current directory is a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: You are not inside a Git repository."
    exit 1
fi

# Store the commit message
COMMIT_MSG="$1"

# Stage all changes
echo "Step 1: git add ."
git add .

# Commit changes
echo "Step 2: git commit -m \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG"

# Push to origin main
echo "Step 3: git push origin main"
git push origin main

echo "Done! Changes pushed to origin main."
