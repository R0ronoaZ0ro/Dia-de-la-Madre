# Día de la Mujer — Mini tarjeta web

Este repositorio contiene una versión autocontenida en HTML de una tarjeta interactiva para "Feliz Día de la Mujer" diseñada para compartirse por medios sencillos (por ejemplo WhatsApp). El archivo principal es `diadelamujer.html` y está pensado para abrirse localmente en el navegador.

## Qué incluye
- `diadelamujer.html` — archivo HTML autocontenible con todo el CSS y JavaScript incrustado (inline). Muestra una caja de regalo, un botón "Presiona" que quita la superposición oscura y activa efectos visuales de confeti y animaciones.

## Cómo usar
1. Clona o descarga este repositorio.
2. Abre `diadelamujer.html` en un navegador moderno (Chrome, Edge, Firefox, Safari).
3. Haz click en el botón "Presiona" para activar la sorpresa: la superposición se ocultará y los confetis comenzarán a animarse. Para ver la carta, haz click en la caja de regalo.

## Prepararlo para enviar por WhatsApp
- Opción único archivo: es posible convertir los mp3 a data URIs e insertar en el HTML (esto ya se puede hacer manualmente); ten en cuenta que el HTML crecerá mucho y puede que WhatsApp limite el tamaño.

## Compatibilidad y notas
- Diseñado para uso local (file://) y para abrir en navegadores móviles. Algunos navegadores o clientes in-app (por ejemplo el visor interno de WhatsApp).

## Personalización
- Puedes editar el texto dentro del HTML (por ejemplo el mensaje de la carta) — [Ver ejemplo (línea 66) del `index.html`] ( https://github.com/R0ronoaZ0ro/Dia-de-la-Mujer/blob/29878d74309a66211bfd5945a2cbbc6927d2adc5/index.html#L66-L67  y en `diadelamujer.html` https://github.com/R0ronoaZ0ro/Dia-de-la-Mujer/blob/29878d74309a66211bfd5945a2cbbc6927d2adc5/diadelamujer_whatsapp_enviar.html#L900-L901). Si quieres cambiar colores o animaciones, edita las reglas CSS al principio del HTML o vuelve a mantener los archivos `styles.css` y los scripts por separado.

## Licencia
Usalo libremente para fines personales. Si lo compartes públicamente en GitHub, puedes añadir una licencia (por ejemplo MIT) en un archivo `LICENSE` si quieres permitir uso/ediciones por terceros.

## Contacto / Créditos
Creado como una tarjeta personalizada para celebrar el Día de la Mujer.
