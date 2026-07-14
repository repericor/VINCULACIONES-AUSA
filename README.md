# Vinculación de Clientes — C-002 (PWA)

App para diligenciar la Solicitud de servicios de acueducto y alcantarillado (formato C-002 de EPM)
con firma táctil del cliente, dos fotos anexas y PDF final para compartir por WhatsApp o correo.
Funciona sin conexión una vez instalada.

## Publicar en GitHub Pages (una sola vez)

1. Entra a https://github.com con tu cuenta.
2. Crea un repositorio nuevo, público, llamado por ejemplo `vinculacion`.
3. Dentro del repositorio: "Add file" → "Upload files", arrastra TODOS los archivos de esta carpeta
   (index.html, sw.js, manifest.webmanifest, jspdf.umd.min.js, fondo1.png, fondo2.png, icon-192.png, icon-512.png)
   y pulsa "Commit changes".
4. Ve a Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, carpeta `/ (root)` → Save.
5. En 1–2 minutos la app queda en: `https://TU_USUARIO.github.io/vinculacion/`

## Instalar en cada celular

Comparte el link por WhatsApp. Cada persona lo abre y:
- Android (Chrome): menú ⋮ → "Instalar app" o "Agregar a pantalla principal".
- iPhone (Safari): botón Compartir → "Agregar a pantalla de inicio".

Desde ese momento abre como app propia y funciona sin señal.

## Actualizar la app después

1. Reemplaza en GitHub los archivos que cambien (normalmente index.html).
2. En `sw.js` cambia la línea `vinculacion-v1` a `vinculacion-v2` (y así sucesivamente).
3. Cada celular recibe la versión nueva al abrir la app con conexión, sin reinstalar.

## Notas de uso

- El PDF se nombra con la dirección del inmueble y la fecha.
- Los datos del cliente nunca salen del celular: la app no usa servidores.
- Los botones de WhatsApp y correo abren el chat/mensaje del cliente con el texto listo;
  el PDF se adjunta desde el botón "Compartir el PDF" o con el clip del chat.
