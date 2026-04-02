# Personal Finance App

Aplicacion web para control de finanzas personales enfocada en registrar ingresos/gastos, visualizar saldo total, gestionar etiquetas y controlar presupuestos por categoria.

## Estado del Proyecto

- Fase actual: **Fase 1 - Documentacion + Maquetacion (HTML/CSS)**
- Subfase actual: **1.3 Responsive y estados visuales (en progreso)**
- Siguiente subfase: **Cierre Fase 1 y preparacion de setup React + TypeScript**

## Stack Tecnologico

- React
- TypeScript
- Firebase Firestore
- Tailwind CSS + CSS
- Recharts (fase de graficos)

## Decisiones Clave (resumen)

- Se trabaja sin autenticacion en el alcance actual.
- Moneda unica del sistema: COP.
- Etiquetas mixtas: predefinidas + personalizables.
- App responsive para mobile y desktop.
- Presupuestos por categoria y dashboard mensual incluidos en alcance.
- Progreso por fases de aprendizaje: documentacion/maquetacion -> React+TS -> Firebase.
- Maquetacion inicial creada en `index.html` + `styles.css` con dashboard, formulario de movimientos, lista de transacciones y panel de presupuestos.
- Maquetacion separada por vistas en `dashboard.html`, `transacciones.html` y `presupuestos.html` con navegacion compartida para facilitar migracion a React.
- Estados visuales implementados en maquetacion: `empty`, `loading`, `error` y `confirmacion de eliminacion`.

Ver detalle de decisiones en:
- `docs/alcance_del_proyecto.md`
- `docs/tech_stack.md`
- `docs/arquitectura_del_proyecto.md`
- `docs/plan_de_implementacion.md`
- `docs/sistema_de_diseño.md`

## Regla Documental del Proyecto (obligatoria)

Toda decision funcional o tecnica debe quedar documentada y reflejada de forma resumida en este `README.md`, enlazando el documento especifico en `docs/`.

Checklist minimo por actualizacion:

1. Actualizar estado de fase/subfase en README.
2. Registrar decision resumida en README.
3. Actualizar documento detallado correspondiente en `docs/`.
4. Verificar consistencia entre README y documentos tecnicos.

## Estructura de Documentacion

```text
docs/
├── alcance_del_proyecto.md
├── fase_1_documentacion_y_maquetacion.md
├── sistema_de_diseño.md
├── tech_stack.md
├── arquitectura_del_proyecto.md
└── plan_de_implementacion.md
```
