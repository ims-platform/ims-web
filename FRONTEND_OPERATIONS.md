# 💻 Manual de Operaciones Frontend

## Tu misión principal
Eres el creador de la experiencia. Tu trabajo es tomar el "plano" de UI/UX y construirlo con Next.js y Tailwind para que se vea idéntico, y luego darle vida conectándolo a las APIs del Backend. Eres el escudo del usuario: si el internet falla o el servidor se cae, tú debes mostrarle un mensaje amable, no una pantalla en blanco.

## Fase 1: La Preparación y Negociación
**¿Cuándo ocurre?** Al recibir la tarea, cuando UI/UX te entrega el Figma y el Backend te entrega la documentación (Swagger/Postman).

**¿Qué haces?**
1. Revisas el Figma en "Dev Mode".
2. Identificas qué componentes de Shadcn UI vas a necesitar (Botones, Tablas, Modales).
3. **La Negociación**: Si ves que el diseñador dibujó un componente rarísimo que Shadcn no tiene, hablas con UI/UX para usar un estándar de Shadcn y ahorrar tiempo.

## Fase 2: Maquetación Estricta y Tipado (TypeScript)
**¿Qué haces?**
1. **Fidelidad Visual**: Los márgenes, colores y tipografías deben ser calcados del Figma usando Tailwind CSS.
2. **Cero any**: Trabajas con TypeScript estricto. Pides los tipos al Backend o los generas según la base de datos. Está absolutamente prohibido usar `any`.

## Fase 3: Conexión Exclusiva con la API (La Regla de Oro)
**¿Qué haces?**
1. Escribes funciones para consumir las URLs documentadas en Postman/Swagger.
2. **Nunca** intentes saltarte al Backend para hablar directo con la base de datos.

## Fase 4: Los 3 Estados de la UX y el Código Limpio
**¿Qué haces?**
1. **Estado Loading**: Skeleton de Shadcn o Spinner.
2. **Estado Error/Success**: Toasts verdes para éxito y rojos con mensajes claros para errores.
3. **Pasar la Escoba (Linter)**: Antes de hacer Commit, corre `pnpm lint` y `pnpm format`.

---

## El Flujo de Trabajo (Ramas y PRs)
1. **Feature branch**: Se crea desde `develop` (ej. `feature/TASK-1.1.1-UI/boton-logout`).
2. **PR a develop**: Revisión de código por otro programador.
3. **PR de develop a staging**: Para pruebas de QA en un servidor idéntico al real.
4. **PR de staging a main**: Pase a producción para el público real.
