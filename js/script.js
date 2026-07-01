// 1. SOLICITAR DATOS (Pedimos tres datos distintos al usuario)
const nombreUsuario = prompt("¡Hola! Bienvenid@ a Tripwise. ¿Cuál es tu nombre?");
const destinoViaje = prompt("¿A qué ciudad tenés pensado viajar?");
const presupuestoTexto = prompt("¿Con cuántos dólares (USD) contás para tus gastos de alojamiento?");

// 2. PROCESAR INFORMACIÓN
// Conversión de tipo: pasamos el presupuesto de texto (string) a número decimal
const presupuestoTotal = parseFloat(presupuestoTexto);

// Operación aritmética simple: calculamos cuánto queda restando un costo estimado de hotel
const costoAlojamiento = 300; // Valor de ejemplo para el cálculo matemático
const presupuestoRestante = presupuestoTotal - costoAlojamiento;

// Transformación de texto: Concatenamos las variables en un mensaje único
const mensajeResultado = `¡Hola ${nombreUsuario}! Para tu próximo viaje a ${destinoViaje}, si descontamos $${costoAlojamiento} USD estimados de hotel, te quedarían $${presupuestoRestante} USD libres para comida y paseos.`;

// 3. COMUNICAR RESULTADOS
// Lo mostramos en la consola del navegador para cumplir con el criterio técnico
console.log("--- Simulación de Presupuesto Tripwise ---");
console.log("Destino cargado:", destinoViaje);
console.log("Resultado:", mensajeResultado);

// Se lo mostramos al usuario en una ventana emergente
alert(mensajeResultado);