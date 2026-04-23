# 🏁 Guía de Inicio Rápido: IMS Web Frontend

> **¡Bienvenido, Arquitecto de Experiencias!**
> Estás a punto de abrir las puertas de la nueva interfaz de IMS. Esta es una aplicación moderna, construida con Next.js 16 y la suite más reciente de herramientas de desarrollo.

## 🛠️ Lo que tienes en tus manos
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Lenguaje**: TypeScript
*   **Estilos**: Tailwind CSS 4 (con [Shadcn/UI](https://ui.shadcn.com/) integrado)
*   **Ecosistema**: PMX (Package Manager Extended)

---

## 🚀 1. Instalación y Preparación
Como estás usando **PMX**, el comando de instalación es un poco diferente. Asegúrate de tener Node.js instalado.

1.  **Ejecuta este comando único** para instalar las dependencias:
    ```bash
    pmx install
    ```
    *(Si `pmx` no está disponible, puedes intentar `pnpm install`, `npm install`, `yarn install` o `bun install`)*

---

## ⚡ 2. Comandos de Desarrollo
Una vez instalado, estos son los comandos que usarás todos los días:

*   **Iniciar el servidor en desarrollo (con vigilancia de cambios):**
    ```bash
    pmx run dev
    ```
    *Abre [http://localhost:3000](http://localhost:3000) en tu navegador.*

*   **Compilar la aplicación (para producción):**
    ```bash
    pmx run build
    ```

*   **Ver la aplicación ya compilada:**
    ```bash
    pmx run start
    ```

*   **Verificar el código (Linting):**
    ```bash
    pmx run lint
    ```
    > **¡OJO!** En este proyecto corre un "Linter" que revisa tu código. Asegúrate de que no existan errores (rojos) antes de hacer commits.

---

## 🎨 3. Comandos de Estilo (Styling)
Shadcn/UI utiliza comandos específicos dentro de `package.json` para añadir nuevos componentes a tu proyecto.

*   **Añadir un nuevo componente (ej. una Tabla):**
    ```bash
    pmx run shadcn:add table
    ```

*   **Elegir una colección completa de componentes:**
    ```bash
    pmx run shadcn:add collection @shadcn/collection-ecommerce
    ```

> **Nota**: Puedes ver la lista de todos los comandos de shadcn disponibles en tu archivo `package.json` en la sección `scripts`.

---

## 📂 4. Estructura de Carpetas
*   `src/app/`: La raíz de tu aplicación. Define tus páginas principales aquí.
*   `src/components/ui/`: Los componentes de Shadcn.
*   `src/components/`: Componentes personalizados que crees.
*   `src/lib/`: Lógica, utilidades y configuración de estilos.
*   `src/services/`: Conexión con la API externa (Backend).

---

## 🎨 5. Configuración de Paleta de Colores (Estilos)
La aplicación usa [Tailwind CSS 4](https://tailwindcss.com/). Los colores están definidos en `src/lib/utils.ts`.

| Propiedad | Definición | Uso | Ejemplo de Código |
| :--- | :--- | :--- | :--- |
| **`--background`** | Color de fondo principal | Se usa en `body` y contenedores base. | `bg-background` |
| **`--foreground`** | Color de texto principal | Se usa para el texto principal. | `text-foreground` |
| **`--card`** | Color de las tarjetas/bloques | Se usa en componentes tipo "Card". | `bg-card` |
| **`--card-foreground`** | Texto de las tarjetas | Texto que va sobre las tarjetas. | `text-card-foreground` |
| **`--primary`** | Color principal (Botones, Enlaces Activos) | El color más importante de tu marca. | `bg-primary` |
| **`--primary-foreground`** | Texto sobre el color principal | Texto blanco o claro sobre el botón. | `text-primary-foreground` |

> **Recuerda**: Como es Tailwind 4, puedes usar clases como `bg-muted`, `hover:bg-accent`, etc., directamente en tus componentes.