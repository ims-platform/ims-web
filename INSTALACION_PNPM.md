# 📦 Guía de Instalación de pnpm

Este proyecto utiliza **pnpm** como gestor de paquetes principal. Su uso es obligatorio para garantizar la consistencia en las dependencias y aprovechar su alto rendimiento en comparación con npm o yarn.

---

## 🔧 1. Instalación Global

Si aún no tienes pnpm en tu sistema, la forma más sencilla es instalarlo a través de npm:

```bash
npm install -g pnpm
```

## ⚙️ 2. Activar Corepack (Recomendado)

Corepack es una herramienta oficial de Node.js que gestiona las versiones de tus gestores de paquetes. Activarlo asegura que todo el equipo use la versión exacta de pnpm definida en el proyecto:

```bash
corepack enable pnpm
```

## ✅ 3. Verificar Instalación

Para confirmar que todo está correcto, ejecuta:

```bash
pnpm -v
```

Si el terminal devuelve un número de versión (ej. `10.x.x`), ¡ya estás listo!

---

## 🚀 4. Instalación de Dependencias

Una vez que tengas pnpm listo, puedes instalar todas las piezas del proyecto ejecutando:

```bash
pnpm install
```

> **Nota**: No uses `npm install` ni `yarn install`, ya que podrían generar archivos de bloqueo (`lockfiles`) conflictivos.