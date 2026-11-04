# iQDevTech

### Tecnología que crece contigo

Sitio institucional de **iQDevTech**, una empresa colombiana de desarrollo de software y asesoría tecnológica. Presenta nuestra forma de trabajar, servicios, contacto y productos propios en una experiencia web rápida y adaptable.

[Ver el repositorio en GitHub](https://github.com/JohanGar-Dev/iQ-DevTech)

![iQDevTech — desarrollo de software y asesoría tecnológica](./og-image.svg)

## Sobre el proyecto

Este sitio está construido como una aplicación web estática: utiliza HTML, CSS y JavaScript nativo, sin framework, backend ni proceso de compilación. Su estructura modular separa las vistas, los estilos y las interacciones compartidas.

### Incluye

- Página principal con presentación de iQDevTech, servicios y forma de trabajo.
- Navegación, pie de página y acceso flotante a WhatsApp compartidos entre páginas.
- Página de producto para **SERESTA**, presentado de forma transparente como prototipo en desarrollo, no disponible para producción.
- Páginas de aviso legal, privacidad, cookies y términos y condiciones.
- Diseño adaptable, enlaces para saltar al contenido y respeto por la preferencia de movimiento reducido.
- Metadatos para buscadores y redes sociales, datos estructurados, `robots.txt` y sitemap XML.
- Cabeceras HTTP configuradas para Cloudflare Pages en `_headers`.

El sitio no tiene inicio de sesión ni formularios propios. Tampoco instala cookies propias; al seguir enlaces a servicios externos, como WhatsApp, se aplican las políticas de esos servicios.

## Tecnologías

- HTML5
- CSS3
- JavaScript nativo con módulos ES
- Cloudflare Pages
- Wrangler para la vista previa local

## Estructura

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── components.js
│       └── main.js
├── legal/
│   ├── aviso-legal.html
│   ├── cookies.html
│   ├── privacidad.html
│   └── terminos.html
├── productos/
│   └── seresta.html
├── _headers
├── favicon.svg
├── index.html
├── og-image.svg
├── robots.txt
└── sitemap.xml
```

## Ejecutar localmente

Se requiere [Node.js](https://nodejs.org/) con npm. Desde la raíz del proyecto:

```bash
npx wrangler pages dev .
```

La primera ejecución puede pedir autorización para descargar Wrangler. Abre en el navegador la dirección local que indique la terminal (por defecto, `http://localhost:8788`) y detén el servidor con `Ctrl+C`.

## Publicar en GitHub

El repositorio remoto ya está configurado como `origin`. Para crear el primer commit y subir la rama `main`:

```bash
git status
git add .
git commit -m "Initial iQDevTech website"
git push -u origin main
```

En adelante, después de cada cambio:

```bash
git add .
git commit -m "Describe the change"
git push
```

## Desplegar en Cloudflare Pages

1. En Cloudflare, crea un proyecto de **Pages** y conéctalo al repositorio `JohanGar-Dev/iQ-DevTech`.
2. Selecciona `main` como rama de producción.
3. Configura el framework como **None** y deja vacío el comando de compilación.
4. Establece `.` como directorio de salida y deja el directorio raíz con su valor predeterminado.
5. Guarda la configuración. Cloudflare publicará el sitio y desplegará automáticamente los siguientes cambios enviados a la rama de producción.

No se necesita un paso de build: Cloudflare sirve directamente los archivos estáticos del proyecto.

### Antes de usar un dominio propio

Las URLs canónicas y de redes sociales usan actualmente `https://www.iqdevtech.com` como dominio previsto. Antes de publicar bajo otro dominio, actualiza las URLs de dominio en `index.html`, `productos/seresta.html`, `robots.txt` y `sitemap.xml`, incluidos los datos estructurados.
