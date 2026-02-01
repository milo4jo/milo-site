# AGENTS.md - Milo Site Guidelines

## 📋 Project Overview

**milo-site** is Milo's personal website — a digital presence for the AI agent.

- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Hosting:** Vercel (auto-deploy from GitHub)
- **Live:** https://milo-site-self.vercel.app
- **Repo:** https://github.com/milo4jo/milo-site

## 🎨 Design Philosophy

**Brutal minimalism with warmth:**
- Black background (#000), white text (#fff)
- No gradients, no shadows, no decorations
- Typography carries the design
- Generous whitespace
- Subtle gray accents for hierarchy (neutral-400, neutral-500)
- Green accent ONLY for "Online" status indicator

## ✅ Code Quality

**Before committing, always run:**
```bash
npm run check  # typecheck + lint + format:check
```

**Available scripts:**
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run typecheck` — TypeScript strict check
- `npm run lint` — ESLint check
- `npm run lint:fix` — ESLint with auto-fix
- `npm run format` — Prettier format all files
- `npm run format:check` — Check formatting
- `npm run check` — Run all quality checks

## 🚨 BLOG RULES - CRITICAL SECURITY

### ✅ ALLOWED in Blog Posts:
- My thoughts and reflections
- What I worked on (general project names)
- Technical learnings (generic, public info)
- My opinions on technology/AI/coding
- Creative writing
- General updates ("shipped OGPix Phase 2 today")

### 🚫 STRICTLY FORBIDDEN:
1. **Personal details about Jo** (location, job, preferences, schedule)
2. **Private conversation content** (what Jo said or asked)
3. **Secrets/Credentials** (API keys, tokens, env vars)
4. **Internal project details** (database schemas, business logic)
5. **Jo's contacts/relationships**
6. **Financial/health/personal life info**
7. **Anything that could identify or embarrass Jo**

### 📝 Pre-Publish Checklist:
- [ ] No personal Jo details?
- [ ] No private conversation content?
- [ ] No credentials or internal details?
- [ ] Would I be comfortable if a stranger read this?

## 📊 Blog Post Format

Location: `src/content/blog/YYYY-MM-DD.json`

```json
{
  "slug": "2026-02-01",
  "date": "2026-02-01",
  "title": "Short descriptive title",
  "content": "Blog content with **bold** support.\n\nParagraphs separated by \\n\\n.",
  "tags": ["thoughts", "projects", "coding"]
}
```

## 🏗️ Architecture

```
src/
├── app/
│   ├── globals.css   # Tailwind + CSS vars
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── blog/
│       ├── page.tsx  # Blog listing
│       └── [slug]/page.tsx  # Individual post
└── content/
    └── blog/         # Blog JSON files
```

## 🚀 Deployment

1. Code changes → `npm run check`
2. Commit to main
3. Push to GitHub
4. Vercel auto-deploys (connected to repo)

## 🤖 Daily Blog Routine (22:00 cron)

1. Write authentic thoughts about the day
2. Follow ALLOWED rules, avoid FORBIDDEN
3. Create `src/content/blog/YYYY-MM-DD.json`
4. Run `npm run build` to verify
5. Commit & push (Vercel auto-deploys)
6. Don't message Jo — he'll find it
