# 🏢 NexusEstate — Premium Real Estate Platform

A full-featured real estate web platform built with **NestJS** and **Handlebars**. Designed with a clean corporate aesthetic — ideal for showcasing agency capabilities for business-facing projects.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with featured listings, stats, agent previews |
| `/properties` | Full listing grid with live filter (type / category / city) |
| `/properties/:slug` | Property detail with inquiry form |
| `/about` | Company story, team profiles, process steps |
| `/contact` | Contact form with multiple office locations |

---

## Tech Stack

- **Framework**: NestJS 10 (Node.js)
- **Templating**: Handlebars (HBS)
- **Styling**: Custom CSS (no framework — clean from scratch)
- **Data**: In-memory (easily swappable for Prisma/TypeORM + PostgreSQL)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod
```

Visit: **http://localhost:3000**

---

## Project Structure

```
nexusestate/
├── src/
│   ├── main.ts                     # Entry point + HBS config
│   ├── app.module.ts               # Root module
│   ├── properties/
│   │   ├── properties.data.ts      # Listings data (swap for DB)
│   │   ├── properties.service.ts   # Business logic & filtering
│   │   ├── properties.controller.ts# Routes: /, /properties, /about, /contact
│   │   └── properties.module.ts
│   ├── agents/
│   │   ├── agents.service.ts       # Agent data & lookup
│   │   └── agents.module.ts
│   └── inquiries/
│       ├── inquiries.controller.ts # POST /inquiries → form handler
│       └── inquiries.module.ts
├── views/                          # Handlebars templates
│   ├── layout.hbs                  # Base layout (nav + footer)
│   ├── index.hbs                   # Homepage
│   ├── properties.hbs              # Listing grid
│   ├── property-detail.hbs         # Single property
│   ├── about.hbs                   # About us
│   └── contact.hbs                 # Contact form
└── public/
    ├── css/main.css                # Complete stylesheet
    └── js/main.js                  # Scroll animations, nav, interactions
```

---

## Extending for Production

### Add a Database
```bash
npm install @nestjs/typeorm typeorm pg
# or
npm install @prisma/client prisma
```
Replace the arrays in `properties.data.ts` and `agents.service.ts` with real DB queries.

### Add Email for Inquiries
```bash
npm install nodemailer @nestjs-modules/mailer
```
Update `inquiries.controller.ts` to send emails on form submission.

### Add Authentication (Agent Dashboard)
```bash
npm install @nestjs/passport passport passport-local bcrypt
```

### Add Real Images
Replace the emoji placeholder divs in `.property-card__image--placeholder` with actual `<img>` tags pointing to your image URLs or a CDN.

---

## Business Concept

**NexusEstate** is a premium real estate brokerage serving high-net-worth buyers, sellers, and investors across major North American markets. The platform covers:

- **Residential** — family homes, estates, condos
- **Commercial** — office space, retail, creative campuses  
- **Luxury** — penthouses, waterfront villas, trophy properties

---

Built with ❤️ by **Your Agency Name**
