# monkeyvibecr.com

Sitio oficial de MonkeyVibe ($MVIBE). Sitio estático sin paso de compilación: se sube tal cual a GitHub y Vercel lo publica.

## Arquitectura (modelo · vista · controlador)

```
index.html                 Página principal (solo la estructura; el contenido lo arma JavaScript)
cobrar.html                Página para que los comercios generen un QR de cobro
404.html                   Página de error
vercel.json                Seguridad (cabeceras), URLs limpias y caché
robots.txt · sitemap.xml   Buscadores
.well-known/security.txt   Contacto para reportar problemas de seguridad

assets/
  css/                     Estilos: tokens (colores), base, componentes y un archivo por sección
  fonts/                   Fuentes alojadas en el propio sitio
  img/                     Logos, íconos, imagen para compartir y QR

src/
  config.js                Datos fijos: contrato, enlaces, APIs. Cambiá aquí y se actualiza en todo el sitio
  main.js                  Punto de entrada
  content/es.js · en.js    TEXTOS de la página (español e inglés). Para editar un texto, se edita aquí
  core/                    Utilidades: HTML seguro (dom.js), idioma, estado, red y formato
  models/                  DATOS externos validados: precio (DexScreener) y tipo de cambio
  views/                   VISTAS: un archivo por sección (hero, comprar, precio, usos, ruta, como, tarjeta, comercios, nosotros, footer)
  controllers/             LÓGICA: app, menú/idioma/copiar (ui), precio en vivo (market), widget de compra (swap), rueda (wheel)
  pages/cobrar/            Modelo, vista y controlador de la página de cobro
  vendor/qrcode.js         Generador de QR (MIT), alojado localmente
```

## Cómo hacer cambios comunes

- **Cambiar un texto:** `src/content/es.js` y `src/content/en.js`.
- **Cambiar el contrato, el correo o un enlace:** `src/config.js`.
- **Cambiar colores:** `assets/css/tokens.css`.
- **Cambiar el diseño de una sección:** su vista en `src/views/` y su estilo en `assets/css/sections/`.
- **Agregar una sección:** crear `src/views/nueva.view.js`, agregarla a la lista `SECTIONS` en `src/controllers/app.controller.js`, crear su CSS y enlazarlo en `index.html`.

## Seguridad

- Todo texto se inserta escapado (`html```` en `src/core/dom.js`), lo que evita inyección de código.
- Los datos de APIs externas se validan antes de mostrarse y se insertan como texto, nunca como HTML.
- Los enlaces solo aceptan `https`, `mailto`, `solana` o rutas propias.
- Sin scripts ni estilos en línea en el HTML; fuentes y librería QR alojadas localmente.
- Cabeceras en `vercel.json`: CSP, HSTS, anti-clickjacking, nosniff, Referrer-Policy y Permissions-Policy.
- La página nunca maneja dinero ni claves: los pagos y compras van directo de la wallet del usuario.

Si un servicio externo deja de funcionar por la CSP (por ejemplo, el widget de Jupiter), revisá la consola del navegador y agregá el dominio que indique en la directiva correspondiente de `vercel.json`.

## Probar en tu computadora

```
npx serve .
```
y abrí http://localhost:3000 (los módulos de JavaScript no funcionan abriendo el archivo con doble clic).
