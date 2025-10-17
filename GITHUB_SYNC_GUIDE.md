# GitHub Sync Guide

This document provides instructions for syncing changes between your local ERPP folder and the GitHub repository.

## Repository Information

- **Repository URL**: https://github.com/tesolchina/erpp
- **Local Path**: /Users/simonwang/Documents/Usage/ObSync/Vault4sync/ERPP

## Pushing Changes to GitHub

To push your local changes to the remote GitHub repository:

1. **Open Terminal** and navigate to the ERPP folder:
   ```
   cd /Users/simonwang/Documents/Usage/ObSync/Vault4sync/ERPP
   ```

2. **Stage your changes**:
   ```
   git add .
   ```
   This stages all modified and new files.
   
   To stage specific files only:
   ```
   git add [file_path]
   ```

3. **Commit your changes** with a descriptive message:
   ```
   git commit -m "Your descriptive commit message here"
   ```

4. **Push to the remote repository**:
   ```
   git push origin main
   ```
   (or use the appropriate branch name if not main)

## Pulling Latest Changes

To get the latest changes from the GitHub repository:

```
cd /Users/simonwang/Documents/Usage/ObSync/Vault4sync/ERPP
git pull origin main
```

## Branch Management

### Creating a New Branch

```
git checkout -b new-branch-name
```

### Switching Between Branches

```
git checkout branch-name
```

## Common Issues

### Authentication Problems

If you encounter authentication issues when pushing, you may need to:
- Use GitHub CLI with proper authentication
- Set up SSH keys for your GitHub account
- Use a personal access token instead of password

### Merge Conflicts

If you encounter merge conflicts, you'll need to:
1. Edit the conflicted files to resolve the issues
2. Stage the resolved files: `git add [conflicted-file]`
3. Continue with the merge: `git commit`

## Best Practices

- Pull the latest changes before making your own changes
- Write clear, descriptive commit messages
- Commit frequently with focused changes
- Push your changes regularly to avoid losing work
- Consider using branching for new features or experiments