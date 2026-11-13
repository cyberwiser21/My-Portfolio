# Modern React Portfolio Website

A fast, responsive, and customizable personal developer portfolio built with **Vite**, **React**, and **React Router**.

---

## 🚀 Getting Started

### 1. Install Dependencies
Open your terminal in this directory and run:
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
The application will start at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
Portfolio website/
├── index.html              # HTML entry point
├── package.json            # Scripts & project dependencies
├── vite.config.js          # Vite configuration
├── public/                 # Static assets (favicons, resume.pdf, etc.)
└── src/
    ├── main.jsx            # Application bootstrap & BrowserRouter
    ├── App.jsx             # Main routing configuration
    ├── index.css           # Global design system & CSS variables
    ├── components/
    │   ├── Header.jsx      # Sticky navigation bar with active links
    │   ├── Header.css      # Header styles
    │   ├── Footer.jsx      # Footer with social media icons & links
    │   ├── Footer.css      # Footer styles
    │   └── Layout.jsx      # Shared page wrapper (Header + Outlet + Footer)
    └── pages/
        ├── Home.jsx        # Landing page with hero & preview skeletons
        ├── About.jsx       # Bio, timeline, skills & resume download
        ├── Projects.jsx    # Project grid skeleton & category filters
        ├── Contact.jsx     # Contact form layout & direct contact info
        └── NotFound.jsx    # 404 error page for broken links
```

---

## 🗺️ Roadmap & Build Phases

- [x] **Phase 1: Setup and structure**
  - [x] Vite + React project setup
  - [x] React Router setup with routing tree
  - [x] Shared layout: Header and Footer
  - [x] Page skeletons: Home, About, Projects, Contact, 404
- [x] **Phase 2: Styling and design**
  - [x] Global CSS design tokens & variables (colors, fonts, spacing, glassmorphic cards)
  - [x] Sticky header with active-link pill highlighting and responsive mobile menu
  - [x] Styled hero section with call-to-action buttons & pulsing status badge
  - [x] Project cards with responsive CSS grid layout & hover effects
  - [x] Fully responsive layout (mobile, tablet, desktop)
  - [x] Footer with social icons & quick navigation
- [x] **Phase 3: Content and data**
  - [x] Home: hero, featured projects, skills snapshot, testimonials
  - [x] About: your story, profile card, skills/tech stack, academic timeline
  - [x] Projects: a grid built from data file (portfolioData.js) using .map()
  - [x] Project detail pages: reusable template at /projects/:id showing role, tools, problem, process, results, and live/GitHub links
  - [x] Resume: downloadable PDF button (with verified public/resume.pdf)
  - [x] Contact: form layout plus email and social links
  - [x] 404 page for broken URLs
- [x] **Phase 4: Interactivity**
  - [x] Dark/light mode toggle with theme persistence in localStorage
  - [x] Interactive mobile hamburger menu with animated cross icon & backdrop overlay
  - [x] Project filtering by category, technology tag, and keyword search query
  - [x] Working contact form with validation, Formspree support & direct email draft fallback
  - [x] Real-time form field validation & error/success messages
  - [x] Floating scroll-to-top button & route scroll restoration
  - [x] Dynamic typewriter hero role animation with blinking cursor
- [x] **Phase 5: Polish**
  - [x] SEO: Dynamic page titles, meta descriptions per page, Open Graph & Twitter preview tags
  - [x] Scroll and hover animations with smooth CSS keyframes & transitions
  - [x] Accessibility: Keyboard navigation, skip-to-content link, ARIA attributes, high-contrast focus rings, and prefers-reduced-motion support
  - [x] Performance: Route-level lazy loading (React.lazy + Suspense), code splitting with vendor chunking
  - [x] Custom SVG favicon (TP monogram gradient) & privacy-friendly analytics placeholder
  - [x] Optional engineering log & technical articles section
- [x] **Phase 6: Deploy**
  - [x] Production build tested (`npm run build`)
  - [x] SPA routing configured (`vercel.json` & `public/_redirects`)
  - [x] Pre-deployment testing checklist verified (links, responsive layout, dark/light themes, asset integrity)
  - [x] Ready to push to GitHub (`https://github.com/cyberwiser21/My-Portfolio.git`) and deploy to Vercel/Netlify

---

## 🌐 Deployment Guide (Vercel & Netlify)

### Option A: Deploy with Vercel (Recommended)
1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Complete portfolio build with all 6 phases"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New..."** ➔ **"Project"**.
4. Select `My-Portfolio` from your GitHub repository list.
5. In the configuration dialog:
   - Framework Preset: **Vite**
   - Root Directory: `./` (or `Portfolio website` if in a monorepo root)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**. Your site will be live within ~30 seconds with an SSL certificate (`your-portfolio.vercel.app`)!

### Option B: Deploy with Netlify
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Choose **GitHub** and select your `My-Portfolio` repository.
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy My-Portfolio"**.

---

## 🏷️ Connecting a Custom Domain (Optional)
To connect a domain like `tejaspatil.dev` or `yourname.com`:
1. **On Vercel**: Project Settings ➔ **Domains** ➔ Enter your domain ➔ Follow DNS instructions (add CNAME `cname.vercel-dns.com` or A record).
2. **On Netlify**: Domain Management ➔ **Custom Domains** ➔ Add domain ➔ Follow Netlify DNS instructions.
3. SSL certificates are provisioned automatically for free via Let's Encrypt.

