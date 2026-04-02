# Tech Stack

## 1. Stack principal

- Frontend: React
- Lenguaje: TypeScript
- Estilos: Tailwind CSS + CSS
- Base de datos: Firebase Firestore
- Graficos: Recharts

## 2. Herramientas y librerias

### 2.1 Aplicacion

- `react`, `react-dom`
- `typescript`
- `vite` para entorno de desarrollo
- `tailwindcss`, `postcss`, `autoprefixer`
- `recharts` para visualizacion
- `firebase` para Firestore

### 2.2 Calidad y mantenimiento

- `eslint` para linting
- `prettier` para formateo (opcional recomendado)
- `@types/*` segun necesidad

## 3. Entorno y configuracion

### 3.1 Versiones objetivo (referencia)

- Node.js: 20 LTS
- npm: 10+
- React: 18+
- TypeScript: 5+

### 3.2 Variables de entorno

Crear archivo `.env` (no versionar secretos) con:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

Nota: aunque no haya autenticacion, las credenciales de Firebase Web SDK se usan para conectar el cliente al proyecto.

## 4. Justificacion tecnica

- React + TypeScript: equilibrio entre productividad, escalabilidad y tipado seguro.
- Tailwind CSS: velocidad de maquetacion y consistencia visual.
- Firestore: base de datos NoSQL con SDK sencillo y actualizacion en tiempo real.
- Recharts: integracion nativa con React para dashboards.

## 5. Estrategia por fases

- Fase 1: documentacion completa + maquetacion de interfaz.
- Fase 2: logica con React/TypeScript y persistencia temporal local.
- Fase 3: migracion a Firestore y consolidacion final.

## 6. Convenciones de codigo

- Tipado explicito en modelos de dominio.
- Componentes pequenos y reutilizables.
- Servicios separados para acceso a datos (`localStorage` en fase 2, `firebase` en fase 3).
- Formato de moneda COP centralizado en utilidades.
