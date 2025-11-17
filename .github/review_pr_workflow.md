
# How to Review a Pull Request Locally

## 1️⃣ Bring the PR to your machine
First, make sure you are in your project folder and on the `main` branch:

```bash
git checkout main
git fetch origin
```

Then, create a local branch from the PR. For example, if the PR is the branch `chore/add-pr-template`:

```bash
git checkout -b chore/add-pr-template origin/chore/add-pr-template
```

Now you have a copy of the PR on your computer **without touching your `main` branch**.

---

## 2️⃣ Review the changes
- Open VSCode and review the modified files.
- Run the project to make sure everything works.
- Compare changes line by line and test new features.

---

## 3️⃣ Return to your `main` branch
Once you have reviewed the PR:

```bash
git checkout main
```

Your `main` branch remains intact, ready to accept the PR if everything is correct.

---

## 4️⃣ Accept the PR on GitHub
- Go to the PR page on GitHub.
- If everything is fine, click **"Merge pull request"** → **"Confirm merge"**.
- Your remote `main` branch now includes the changes.

Optionally, update your local `main` branch afterwards:

```bash
git pull origin main
```

