# Sheridan Financial — Landing Page

Next.js 14 · TypeScript · Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## File Structure

```
app/
  layout.tsx       ← fonts, metadata, root layout
  page.tsx         ← main landing page
  globals.css      ← tailwind + base styles

components/
  BookingButton.tsx  ← reusable Calendly CTA button
  LeadForm.tsx       ← lead capture form with validation
```

---

## Connect Your Form (Required)

Open `components/LeadForm.tsx` and find the comment block `CONNECT YOUR FORM SERVICE HERE`.

**Easiest option — Formspree (free, 5 min setup):**
1. Go to [formspree.io](https://formspree.io) and create a form
2. Replace the fetch call with:
```ts
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Other options:**
- `/api/lead` — create `app/api/lead/route.ts` to forward to your CRM
- GoHighLevel, ConvertKit, Mailchimp — use their API endpoints

---

## Calendly Link

The Calendly URL is set once at the top of `app/page.tsx`:

```ts
const CALENDLY_URL = 'https://calendly.com/peter-alliance/30min'
```

Change it there and it updates everywhere on the page automatically.

---

## Deploy

**Vercel (recommended — free):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
Push to GitHub → connect repo in Netlify dashboard → done.
