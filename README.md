# ims-web
Aplicación Frontend para la Plataforma IMS (Next.js, TypeScript, Zustand, React Query)

---

## ⚠️ Estado
Este repositorio contiene la configuración inicial de DevOps.
La aplicación frontend aún no ha sido completamente inicializada.

---

## 🧱 Stack Tecnológico
- Next.js (App Router)
- TypeScript
- Zustand (estado global)
- TanStack Query (estado del servidor)
- Axios (cliente HTTP)
- Tailwind CSS
- shadcn/ui + Radix UI
- React Hook Form + Zod
- Framer Motion
- Lucide React
- Date-fns
- Sonner (toasts)

---

## 🚀 Inicio Rápido

### Instalar dependencias
npm install

### Ejecutar servidor de desarrollo
npm run dev

Abrir:
http://localhost:3000

---

## ⚙️ Variables de Entorno
Crear un archivo `.env.local` basado en `.env.example`:

NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_ENV=

---

## 📁 Estructura del Proyecto
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

## 🔗 Integración con la API
Todas las peticiones a la API deben realizarse a través de:
services/api.ts

Ejemplo:
import axios from "axios";
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

---

## 🔗 Backend
Esta aplicación se conecta a:
- ims-api (backend)
- URL base definida mediante variables de entorno

---

## 🧠 Manejo de Estado
- Zustand → estado global de UI/app
- TanStack Query → fetching y caché de datos del servidor

---

## 🎨 UI & Estilos
- Construido con shadcn/ui
- Estilos con Tailwind CSS
- Animaciones con Framer Motion

---

## 🧪 Formularios & Validación
- Formularios con React Hook Form
- Validación con Zod

---

## 🛡️ Reglas de Desarrollo
- NO hardcodear URLs de la API
- Usar siempre variables de entorno
- Mantener componentes reutilizables y modulares
- Usar React Query para todos los datos del servidor
- Mantener la lógica separada (services, hooks, components)

---

## 🔄 CI/CD
- Los Pull Requests activan checks automáticos (GitHub Actions)
- El build debe pasar antes de hacer merge
- Los checks de lint y test serán enforced cuando las branch protection rules estén activas

## 🔒 Reglas de Protección de Ramas
Se encuentran configuradas reglas de protección para `main`, `staging` y `develop`.

### Reglas configuradas
- No se permite push directo a ninguna de las tres ramas
- Todo cambio debe ingresar mediante Pull Request
- Los siguientes checks del CI deben pasar antes de hacer merge:
  - Lint
  - Build

### Nota
Las reglas están configuradas pero actualmente no se encuentran activas debido a que el
repositorio pertenece a una organización con plan gratuito de GitHub. Se requiere un plan
GitHub Team o Enterprise para activarlas.

---

## 🚀 Despliegue
Desplegado usando Vercel

### Entornos por rama
| Rama | Entorno |
|------|---------|
| develop | Preview |
| staging | Staging |
| main | Producción |

---

## 🔐 Notas de Seguridad
- Nunca exponer claves privadas en el frontend
- Usar únicamente variables NEXT_PUBLIC_* en este proyecto
- Los secretos del backend deben manejarse en ims-api

---

## 📌 Notas
- Esta app se conecta a la API backend de IMS
- Diseñada para escalabilidad y arquitectura modular
- La configuración basada en entornos es obligatoria
- Pipeline de DevOps preparado antes del código de la aplicación

---

## 👥 Flujo de Trabajo del Equipo (DevOps)
1. Los desarrolladores trabajan en develop
2. Pull Request → staging
3. QA testea en el entorno de staging
4. Merge a main → deploy a producción

## 🚀 Despliegue
Desplegado usando Vercel

### Nota
El despliegue automático desde Vercel no está activo actualmente debido a que el 
repositorio pertenece a una organización con plan gratuito. Se requiere un plan 
Pro de Vercel para desplegar desde repositorios privados de organizaciones.

---

## 🚧 Próximos Pasos
- Inicialización del frontend (setup de Next.js)
- Integración con la API del backend
- Flujo de autenticación (Supabase)
- Implementación de UI
- Enforcement de testing y linting
