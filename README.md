# TwoCents

## Local Development

To run the project locally and preview your changes:

```bash
npm install
npm run dev
```

This will start the Vite development server. Open the local URL shown in the terminal.

To test your section:

* make your changes in your assigned files
* save the file
* check the browser preview
* Vite will automatically reload the page

If you need to test a component temporarily, you can import it into `App.tsx` or the page file it belongs to, view it in the browser, then remove any temporary test code before pushing.

---

## Git Workflow

Always branch off `dev`, not `main`.

### 1. Get the latest `dev`

```bash
git checkout dev
git pull origin dev
```

### 2. Create your own feature branch

Use a clear branch name based on your task:

```bash
git checkout -b feature/header-nav
```

Examples:

* `feature/footer`
* `feature/home-hero`
* `feature/pricing-cards`

### 3. Work and save your changes

When ready, commit your work:

```bash
git add .
git commit -m "feat: build header component"
```

### 4. Push your branch

```bash
git push -u origin feature/header-nav
```

### 5. Open a Pull Request

On GitHub:

* go to the repository
* click **Compare & pull request**
* set the base branch to `dev`
* add a short title and description of what you changed
* create the PR


### 6. Before opening a PR

Make sure:

* the project runs with `npm run dev`
* your code is only for your assigned task
* there is no leftover test code
* there are no merge conflicts or unnecessary file changes

Do not push directly to `main` or `dev`. Always use a feature branch and PR first.
