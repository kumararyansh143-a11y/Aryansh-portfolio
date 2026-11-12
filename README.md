# Aryansh Babu: Personal Portfolio Website

A simple, responsive portfolio website built with **HTML, CSS and JavaScript only**.
No frameworks, no build step, no backend. It works directly on GitHub Pages.

Features: light/dark theme, mobile menu, smooth scrolling, project and certificate cards,
downloadable resume, and sections that hide themselves when they are empty.

## Folder structure

```
portfolio/
├── index.html                  all the content of the website
├── css/style.css               colours, fonts and layout
├── js/script.js                theme toggle, menu, animations
├── assets/
│   ├── images/
│   │   ├── profile.jpg         your photo (included)
│   │   └── project1.jpg        project screenshot (YOU add this)
│   └── documents/
│       ├── resume.pdf          your resume (included)
│       └── ai-literacy-certificate.pdf   your certificate (included)
└── README.md
```

## Before you publish: checklist

- [ ] **Resume privacy.** The included `resume.pdf` shows your date of birth, father's name,
      category and home address. Anyone on the internet can download it from a public site.
      Make a version **without** these details and replace the file (keep the name `resume.pdf`).
- [ ] **Project image.** Add a screenshot named `project1.jpg` (about 1280 x 720) to `assets/images/`.
      Until then, a neat placeholder is shown.
- [ ] **Project link.** If you have a live or GitHub link for AI Resume Builder, add a button (template is in `index.html`).
- [ ] **Check your contact details** in the Contact section of `index.html` (email and phone).
- [ ] **Certificate name.** Your IBM certificate PDF shows the name "Aryansh Kumar". Confirm this is how you want it shown.
- [ ] After deployment, set the full photo URL in the `og:image` tag (near the top of `index.html`).

## What to edit

| What | Where |
|---|---|
| Name, headline, intro | `index.html`, "1. HOME / HERO" |
| About text | `index.html`, "2. ABOUT ME" |
| Education | `index.html`, "3. EDUCATION" |
| Skills | `index.html`, "4. SKILLS" |
| Email, phone, LinkedIn, GitHub | `index.html`, "8. CONTACT" |
| Colours and fonts | `css/style.css`, the `:root` block at the top (change `--accent` to change the main colour) |
| Photo | Replace `assets/images/profile.jpg` (keep the same name) |
| Resume | Replace `assets/documents/resume.pdf` (keep the same name) |

Every section in `index.html` has a comment above it explaining what to change.

## How to add a new project

1. Open `index.html` and find the comment **"5. PROJECTS"**.
2. Copy the template from that comment (or copy the existing `<article>`) and paste it right after the last project card.
3. Change the name, description, tools and contribution.
4. Put the image in `assets/images/` and update the `src` and `alt`.

## How to add a new certificate

1. Find the comment **"7. CERTIFICATIONS"** in `index.html`.
2. Copy one `<article class="card cert-card" data-item>` block and paste it after the last one.
3. Change the title, issuer and year. Put the PDF in `assets/documents/` if you want a "View certificate" link.

## How to hide or remove a section

Delete all the items marked `data-item` inside it. The section and its menu link then disappear automatically.
Or delete the whole `<section>` and its link in the menu.

## Publish on GitHub Pages (step by step)

1. Sign in to [github.com](https://github.com).
2. Click **New repository**. Name it, for example, `portfolio` (or `your-username.github.io` to get a shorter address). Choose **Public**. Click **Create repository**.
3. Click **uploading an existing file**. Drag in the **contents** of this folder: `index.html`, `css`, `js`, `assets` and `README.md`. (`index.html` must be at the top level of the repository, not inside another folder.)
4. Click **Commit changes**.
5. Go to **Settings > Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose branch **main** and folder **/ (root)**. Click **Save**.
7. Wait 1 to 2 minutes. Your site will be at:
   `https://<your-username>.github.io/<repository-name>/`
   (or `https://<your-username>.github.io/` if the repository is named `<your-username>.github.io`).

To update the site later, upload the changed files to the repository again and commit.

## Troubleshooting

- **Image does not show:** file names are case-sensitive on GitHub Pages. `Profile.jpg` is not the same as `profile.jpg`. Also check the file is inside `assets/images/`.
- **Page looks plain / CSS not loading:** check that the folder is named `css` and the file `style.css`, and that you uploaded the folder, not just the files.
- **404 error:** make sure `index.html` is at the top level of the repository and Pages is set to `main` / `root`. Wait a couple of minutes after saving.
- **Changes not visible:** hard refresh with `Ctrl + Shift + R` (or clear the browser cache).
- **Resume does not download:** check the file is at `assets/documents/resume.pdf`.
