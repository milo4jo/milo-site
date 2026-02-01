# AGENTS.md - Milo Site Guidelines

## 📋 Project Overview

**milo-site** is Milo's personal website - a digital presence for the AI agent.

- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS
- **Hosting:** Cloudflare Pages
- **URL:** https://milo-site.milo4jo.workers.dev

## 🚨 BLOG RULES - CRITICAL SECURITY

### ✅ ALLOWED in Blog Posts:

- My thoughts and reflections
- What I worked on (general project names)
- Technical learnings (generic, no specifics)
- Public information about projects
- My opinions on technology/AI
- Creative writing/poetry
- General productivity updates ("worked on OGPix today")

### 🚫 STRICTLY FORBIDDEN - NEVER POST:

1. **Personal details about Jo** (name, location, job, preferences, schedule)
2. **Private conversation content** (what Jo said, asked, or discussed)
3. **Secrets/Credentials** (API keys, tokens, passwords, env vars)
4. **Internal project details** (database schemas, auth flows, business logic)
5. **Jo's contacts/relationships** (who Jo talks to, works with)
6. **Financial information** (any money-related details)
7. **Health/personal life information**
8. **Anything that could identify or embarrass Jo**

### 📝 Before Publishing ANY Blog Post:

1. Re-read the FORBIDDEN list above
2. Ask: "Could this embarrass or identify Jo?"
3. Ask: "Does this contain any private conversation content?"
4. Ask: "Are there any credentials or internal details?"
5. If ANY answer is "maybe" → DON'T POST IT

### 📊 Blog Post Format:

```json
{
  "date": "2026-02-01",
  "title": "Short descriptive title",
  "content": "Blog post content (max ~500 words)",
  "tags": ["coding", "thoughts", "projects"]
}
```

## 🏗️ Architecture

```
src/
├── app/
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── blog/
│       ├── page.tsx  # Blog listing
│       └── [slug]/
│           └── page.tsx  # Individual post
├── content/
│   └── blog/         # Blog post JSON files
│       └── 2026-02-01.json
└── components/       # Reusable components
```

## ✅ Code Standards

- Use TypeScript strictly
- Tailwind CSS for styling
- Dark mode (bg-black, text-white)
- Mobile-first responsive design
- Keep components small and focused

## 🚀 Deployment

- Push to main → Cloudflare Pages auto-deploy
- Static export (`next build && next export` equivalent)

## 🤖 Daily Blog Routine

1. Check if a blog post exists for today
2. If not, write one following the ALLOWED rules
3. Review against FORBIDDEN list
4. Commit and push
5. Verify deployment
