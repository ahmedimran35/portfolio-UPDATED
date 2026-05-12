# Portfolio Documentation — Imran Ahmed

## Overview
A single-page portfolio website with separate sub-pages for projects and experience. Built with vanilla HTML/CSS/JS (jQuery) and CDN libraries.

---

## File Structure

```
portfolio-UPDATED/
├── index.html              # Main landing page (all sections)
├── 404.html                # Custom 404 error page
├── PORTFOLIO_DOCS.md       # This file
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   └── 404.css         # 404 page styles
│   ├── js/
│   │   ├── script.js       # Main JS (scroll spy, emailJS, typed.js, scroll-reveal)
│   │   ├── app.js          # Particles.js config
│   │   ├── particles.min.js # Particles.js library (vendored)
│   │   └── 404.js          # 404 page JS
│   └── images/
│       ├── hero.png        # Hero section profile image
│       ├── profile2.JPG    # About section image
│       ├── favicon1.png    # Favicon (copy as favicon.png)
│       ├── contact1.png    # Contact section illustration
│       ├── contact.png     # (unused)
│       ├── preloader.gif   # (commented out in HTML)
│       ├── loader.gif      # (unused)
│       ├── cmsoon.png      # (unused)
│       ├── android.jpg     # (unused in main page)
│       ├── siem.png        # (unused in main page)
│       ├── react.png       # (unused in main page)
│       ├── skills/
│       │   └── TailwindCSS.png  # (unused in main page)
│       ├── projects/
│       │   ├── thesis.png
│       │   ├── resume.png
│       │   ├── restaurent.png
│       │   └── pdfstore.png
│       └── educat/
│           ├── msc.jpg
│           ├── college.jpg
│           └── school.jpg
├── projects/
│   ├── index.html          # Full projects gallery with filtering
│   ├── style.css
│   └── script.js
└── experience/
    ├── index.html          # Full experience timeline page
    ├── style.css
    └── script.js
```

---

## Sections (index.html)

### 1. Navbar
- **Logo:** `<i class="fab fa-redhat"></i> Imran`
- **Links:** Home, About, Skills, Education, Work, Experience, Contact
- **Behavior:** Fixed top, hamburger on mobile (<768px), scroll-spy active state

### 2. Hero
- Particles.js animated background
- **Heading:** "Hi There, I'm Imran Ahmed"
- **Typing text:** "Devops Engineer", "Cyber Security Expert" (Typed.js)
- **About Me button** → scrolls to #about
- **Social icons:** LinkedIn, GitHub, Twitter, Instagram, Daily.dev
- **Image:** `hero.png` (circular, 70% width)

### 3. About
- **Image:** external URL (https://i.imgur.com/yJnyCD9.jpeg) — mix-blend-mode: luminosity
- **Tag:** "Devops Engineer"
- **Bio paragraph** (DevOps / Cyber Security)
- **Info:** email, place (London, UK)
- **Resume button** → Google Drive link

### 4. Skills
- **Background:** Purple gradient (#57059e → #4a00e0)
- **Grid:** 6 columns desktop, 2 columns mobile
- **Icons:** via icons8.com CDN
- **Skills listed:**
  - AWS, Docker, Ansible, Firewall, SIEM, SOAR, Penetration Testing, Analysis

### 5. Education
- **Quote:** "Education is not the learning of facts..."
- **Cards** (horizontal image+text):
  1. MSc Cyber Security — University of Hertfordshire (2024–Continue)
  2. BSc CS — AIUB (2017–2021)
  3. HSC Science — Milestone College (2014–2016)

### 6. Projects (Work)
- **Background:** Dark blue gradient (#000031 → #00002c)
- **Cards with hover-reveal description (4 projects):**
  1. **Thesis** — ML-Assisted Interference Management in 6G UAV Networks (Taylor & Francis link)
  2. **Restaurant Management System** — GitHub repo
  3. **Resume Enhancer Using LLM** — Docker Hub
  4. **PDF Store** — Vercel demo + GitHub

### 7. Experience
- **Timeline** layout (left/right alternating)
- **3 entries:**
  1. Khalifa Tech — DevOps Engineer (Feb 2024 – Present)
  2. Comptech Network System — Cyber Security Engineer (Jan 2022 – Dec 2023)
  3. Rapid Hub Tech — Cyber Security Intern (Jul 2021 – Sep 2021)

### 8. Contact
- Form fields: Name, Email, Phone, Message
- **EmailJS integration** (user_TTDmetQLYgWCLzHTDgqxm)
- Sends via `contact_service` / `template_contact`

### 9. Footer
- 3 columns: branding, quick links, contact info + socials
- Credit line: "Designed with ❤ by Imran Ahmed"

---

## Sub-pages

### /projects
- Full project gallery with **Isotope.js** filtering (All, MERN, LAMP, Basic Web, Android)
- Reads from `projects.json` (not present — needs to be created)
- Back to Home button

### /experience
- Extended experience timeline (9 entries from original template — needs updating)
- Scroll-reveal animations
- Back to Home button

### 404.html
- Animated 404 GIF (from dribbble)
- Back to Home button

---

## CDN Dependencies

| Library | Version | Source |
|---|---|---|
| jQuery | 3.6.0 | cdnjs |
| Font Awesome | 5.15.3 | cdnjs |
| Typed.js | 2.0.5 | cdnjs |
| Particles.js | minified | vendored in `assets/js/` |
| Vanilla-tilt.js | 1.7.0 | cdnjs |
| ScrollReveal | latest | unpkg |
| EmailJS | 3.x | cdn.jsdelivr.net |
| Isotope (projects page) | 3.0.6 | cdnjs |
| Google Fonts | Poppins, Nunito | fonts.googleapis.com |

---

## Assets Required

### Images needed (`/assets/images/`)
| File | Purpose | Notes |
|---|---|---|
| `hero.png` | Hero section | 500x500px, round crop recommended |
| `profile2.JPG` | About section | Currently unused (external img URL used instead) |
| `favicon1.png` | Favicon | Copy as favicon.png |
| `contact1.png` | Contact illustration | ~400px wide |
| `preloader.gif` | Preloader | Currently commented out in HTML |
| `educat/msc.jpg` | MSc card image | Landscape ~800x400px |
| `educat/college.jpg` | BSc card image | Landscape ~800x400px |
| `educat/school.jpg` | HSC card image | Landscape ~800x400px |
| `projects/thesis.png` | Thesis project card | Card thumbnail |
| `projects/restaurent.png` | Restaurant project | Card thumbnail |
| `projects/resume.png` | Resume LLM project | Card thumbnail |
| `projects/pdfstore.png` | PDF Store project | Card thumbnail |

---

## Configuration Points

### EmailJS
- **User ID:** `user_TTDmetQLYgWCLzHTDgqxm`
- **Service ID:** `contact_service`
- **Template ID:** `template_contact`
- Located in: `assets/js/script.js:42-44`

### Tawk.to Live Chat
- **Widget URL:** `https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6`
- Appears on: main page, projects page, experience page

### Typed.js strings
- Located in: `assets/js/script.js:73-79`
- Current: `["Devops Engineer", "Cyber Security Expert"]`

### Social Links (main page)
| Platform | URL |
|---|---|
| LinkedIn | https://www.linkedin.com/in/ahmed-imran35/ |
| GitHub | https://github.com/ahmedimran35 |
| Twitter | https://twitter.com/imranahmed005 |
| Instagram | https://www.instagram.com/imran_ahmed_noyonn |
| Daily.dev | https://app.daily.dev/mdimranahmed |

### Resume link
- https://drive.google.com/file/d/1zifULmdT_ZkYhC4nnDXv3xfiZRmRjyk0/view?usp=drive_link

### Disable dev mode
- Prevents F12, Ctrl+Shift+I/C/J, Ctrl+U (in `script.js`)
- `oncontextmenu="return false"` on `<body>`

---

## Things to Clean Up (Template Artifacts)

1. `/projects/index.html` — Title says "Portfolio Jigar Sable" (template relic)
2. `/projects/index.html` — Logo says `<i class="fab fa-node-js"></i> Jigar`
3. `/experience/index.html` — Title says "Portfolio Jigar Sable"
4. `/experience/index.html` — Logo says `<i class="fab fa-node-js"></i> Jigar`, name in footer "Jigar's Portfolio"
5. `/experience/index.html` — Contains 9 template experience entries (not yours)
6. `/404.html` — Logo says Jigar, footer says "Jigar's Portfolio"
7. `projects.json` referenced in JS but not present in repo

---

## Color Palette

| Token | Color | Hex |
|---|---|---|
| Primary | Purple | `#2506ad` |
| Accent | Orange | `#ffae00` |
| Section bg | White | `#f7f7f7` |
| Nav bg | White | `#ffffff` |
| Skills bg | Purple gradient | `#57059e → #4a00e0` |
| Work bg | Dark blue | `#000031 → #00002c` |
| Footer bg | Navy | `#00012b` |
| Education/Contact bg | Light blue | `#e5ecfb` |
| Scrollbar thumb | Purple | `#420177` |
