# ims-web
Frontend application for IMS Platform (Next.js, TypeScript, Zustand, React Query)
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

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## ⚙️ Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_ENV=development
```

---

## 📁 Project Structure

```
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
```

---

## 🔗 API Integration

All API requests should be handled through:

```
services/api.ts
```

Example:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
```

---
## 🔗 Backend

This app connects to:

- ims-api (backend)
- Base URL defined via environment variables

## 🧠 State Management

* **Zustand** → global UI/app state
* **TanStack Query** → server data fetching & caching

---

## 🎨 UI & Styling

* Built with **shadcn/ui**
* Styled using **Tailwind CSS**
* Animations with **Framer Motion**

---

## 🧪 Forms & Validation

* Forms handled with **React Hook Form**
* Validation with **Zod**

---

## 🛡️ Development Rules

* Do NOT hardcode API URLs
* Always use environment variables
* Keep components reusable and modular
* Use React Query for all server data

---

## 🔄 CI/CD

* Pull Requests trigger build checks (GitHub Actions)
* Must pass build before merging (when enforced)

---

## 🚀 Deployment

* Recommended: deploy with Vercel
* Branch environments:

  * `develop` → preview
  * `staging` → staging
  * `main` → production

---

## 📌 Notes

* This app connects directly to IMS API
* Designed for scalability and real-time features
* Focused on personalized learning experience and metrics
