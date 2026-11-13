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
- [ ] **Phase 3: Content and data**
- [ ] **Phase 4: Interactivity**
- [ ] **Phase 5: Polish**
- [ ] **Phase 6: Deploy**

