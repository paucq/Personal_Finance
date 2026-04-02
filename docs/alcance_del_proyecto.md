# Alcance del Proyecto

## 1. Vision general

Aplicacion web de finanzas personales para registrar ingresos y gastos, visualizar el saldo total, organizar gastos por etiquetas y controlar presupuestos por categoria. El proyecto se desarrolla por fases de aprendizaje (documentacion/maquetacion, React+TypeScript, Firebase).

## 2. Objetivos

- Permitir registrar movimientos financieros (ingresos y gastos) de forma rapida.
- Ofrecer control visual del estado financiero mediante saldo total con codigos de color.
- Mejorar el orden de gastos con etiquetas predefinidas y personalizables.
- Incorporar presupuestos por categoria para prevenir sobrecostos.
- Mostrar un dashboard con resumen mensual y graficos.

## 3. Alcance funcional (MVP)

### 3.1 Movimientos

- Crear movimiento de tipo `income` o `expense`.
- Editar movimiento existente.
- Eliminar movimiento existente.
- Campos de movimiento:
  - tipo
  - monto
  - descripcion
  - fecha
  - metodo de pago (`cash`, `card`, `transfer`)
  - etiqueta

### 3.2 Balance

- Calcular saldo total en tiempo real a partir de ingresos y gastos.
- Mostrar saldo en verde si es positivo o cero.
- Mostrar saldo en rojo si es negativo.

### 3.3 Etiquetas

- Soporte para etiquetas predefinidas (iniciales).
- Soporte para etiquetas personalizadas por el usuario.
- Asociar cada gasto a una etiqueta.

### 3.4 Presupuestos por categoria

- Crear limite mensual por etiqueta/categoria.
- Comparar gasto acumulado vs limite definido.
- Senalizar visualmente categorias cerca o fuera del presupuesto.

### 3.5 Dashboard y visualizacion

- Resumen mensual (ingresos, gastos, saldo del mes).
- Graficos de distribucion y/o tendencia usando Recharts (fase posterior).

## 4. Fuera de alcance inicial

- Autenticacion y cuentas de usuario (no se incluye en alcance actual).
- Multi-moneda (solo COP).
- Integraciones bancarias automaticas.
- Exportacion de datos (CSV/JSON) en fase inicial.

## 5. Reglas de negocio

- La moneda oficial es COP.
- El monto debe ser mayor a cero.
- Todo gasto debe tener etiqueta.
- Fecha obligatoria en cada movimiento.
- El saldo se calcula como: `total_ingresos - total_gastos`.
- Los presupuestos son mensuales por etiqueta.

## 6. Criterios de exito

- Registrar, editar y eliminar movimientos sin errores.
- Visualizar saldo actualizado inmediatamente.
- Gestionar etiquetas predefinidas y personalizadas.
- Definir y consultar presupuestos por categoria.
- Visualizar resumen mensual y graficos basicos.

## 7. Supuestos y riesgos

### Supuestos

- Uso individual (sin login).
- Firebase Firestore como base de datos final.
- UI responsive para mobile y desktop.

### Riesgos

- Aumento de complejidad al migrar de almacenamiento local a Firebase.
- Inconsistencias de datos si no se define validacion desde fases tempranas.
- Dependencia de buenas practicas de documentacion para mantener DDD.
