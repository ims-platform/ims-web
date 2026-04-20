# ims-web
Frontend application for IMS Platform (Next.js, TypeScript, Zustand, React Query)

---

## ⚠️ Status

This repository contains the initial DevOps setup.  
The frontend application has not been fully initialized yet.

---

## 🧱 Tech Stack

* Next.js (App Router)
* TypeScript
* Zustand (global state)
* TanStack Query (server state)
* Axios (HTTP client)
* Tailwind CSS
* shadcn/ui + Radix UI
* React Hook Form + Zod
* Framer Motion
* Lucide React
* Date-fns
* Sonner (toasts)

---

## 🚀 Getting Started

### Install dependencies

npm install

### Run development server

npm run dev

Open:

http://localhost:3000

---

## ⚙️ Environment Variables

Create a `.env.local` file based on `.env.example`:

NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_APP_ENV=development

### Environment meanings

- NEXT_PUBLIC_API_URL → Backend API URL (ims-api)
- NEXT_PUBLIC_SUPABASE_URL → Supabase project URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY → Public Supabase key (safe for frontend)
- NEXT_PUBLIC_APP_ENV → Environment (development / staging / production)

---

## 📁 Project Structure

app/
 ├── (auth)/
 ├── (marketing)/
 ├── (dashboard)/
 └── layout.tsx

components/
hooks/
services/
schemas/
styles/

---

## 🔗 API Integration

All API requests must be handled through:

services/api.ts

Example:

import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

---

## 🔗 Backend

This app connects to:

- ims-api (backend)
- Base URL defined via environment variables

---

## 🧠 State Management

- Zustand → global UI/app state
- TanStack Query → server data fetching & caching

---

## 🎨 UI & Styling

- Built with shadcn/ui
- Styled using Tailwind CSS
- Animations with Framer Motion

---

## 🧪 Forms & Validation

- Forms handled with React Hook Form
- Validation with Zod

---

## 🛡️ Development Rules

- Do NOT hardcode API URLs
- Always use environment variables
- Keep components reusable and modular
- Use React Query for all server data
- Keep logic separated (services, hooks, components)

---

## 🔄 CI/CD

- Pull Requests trigger automated checks (GitHub Actions)
- Build must pass before merging (when branch protection is enforced)
- Future: lint and test validation will be enforced

---

## 🚀 Deployment

Deployed using Vercel

### Branch environments

- develop → Preview
- staging → Staging
- main → Production

---

## 🔐 Security Notes

- Never expose private keys in frontend
- Only use NEXT_PUBLIC_* variables in this project
- Backend secrets must be handled in ims-api

---

## 📌 Notes

- This app connects to IMS backend API
- Designed for scalability and modular architecture
- Environment-based configuration is required
- DevOps pipeline prepared before application code

---

## 👥 Team Workflow (DevOps)

1. Developers work on develop
2. Pull Request → staging
3. QA tests in staging environment
4. Merge to main → production deploy

---

## 🚧 Next Steps

- Frontend initialization (Next.js setup)
- API integration with backend
- Authentication flow (Supabase)
- UI implementation
- Testing and linting enforcement
