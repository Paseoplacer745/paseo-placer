# Paseo Placer — sitio web

Sitio oficial de Paseo Placer (Placer 745, esquina Santa Rosa, Santiago).
Construido con **Next.js 16**, **React 19** y **Tailwind CSS 4**. Listo para publicar en **Vercel**.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Portada con video, directorio interactivo por piso, vida nocturna, próximas fiestas, Terraza Placer, bodas con Tomás Cox, cómo llegar, arriendos e Instagram |
| `/eventos` | Fiestas con afiches, videos de Club Placer, salones (3°, 4° y 5° piso), promoción de bodas, galería y formulario de cotización |
| `/arriendos` | Locales, módulos, pantalla LED de 13 m y formulario de arriendo |
| `/estacionamiento` | Tarifa, niveles, cómo llegar, mapa y preguntas frecuentes |
| `/tiendas/[tienda]` | Ficha de cada tienda |
| `/privacidad` | Política de privacidad y cookies (texto base para revisión legal) |

Incluye: SEO (metadatos, `sitemap.xml`, `robots.txt`, datos estructurados de centro comercial, eventos y preguntas frecuentes), banner de cookies, Google Analytics opcional (solo con consentimiento), imágenes optimizadas (AVIF/WebP) y diseño adaptado a celular.

## Cómo editar el contenido

Todo el contenido que cambia seguido está en **`content/site.ts`**:

- `stores`: tiendas (nombre, piso, logo, sitio web o Instagram).
- `parties`: fiestas (título, fecha, afiche).
- `venues`: salones y capacidades.
- `weddingPromo`: promoción de bodas.
- `site`: horarios, correos, Instagram y estacionamiento.

Las imágenes van en `public/` (`afiches/`, `img/`, `logos/`, `video/`).

> Próxima etapa: conectar el gestor de contenidos **Sanity**, para editar todo esto desde un panel web sin tocar código.

## Trabajar en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción
```

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de **GitHub** (por ejemplo, `paseo-placer`).
2. En **vercel.com**, elige *Add New → Project*, importa el repositorio y presiona *Deploy*. Vercel detecta Next.js solo.
3. En *Settings → Environment Variables*, carga las variables de `.env.example` (ver abajo) y vuelve a publicar.

### Variables de entorno

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.paseoplacer.com` |
| `RESEND_API_KEY` | Clave de **resend.com** para que los formularios lleguen por correo |
| `MAIL_FROM` | Remitente, por ejemplo `Paseo Placer <web@paseoplacer.com>` |
| `MAIL_TO_RESERVAS` | `reservas@paseoplacer.com` (cotizaciones de eventos) |
| `MAIL_TO_ARRIENDO` | `arriendo@paseoplacer.com` (solicitudes de arriendo) |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics 4 (opcional) |

Sin `RESEND_API_KEY`, los formularios funcionan, pero las solicitudes solo quedan registradas en los logs de Vercel y no llegan por correo.

## Conectar el dominio paseoplacer.com (NIC.com)

1. En Vercel: *Project → Settings → Domains*. Agrega `paseoplacer.com` y `www.paseoplacer.com`.
2. En el panel DNS de NIC.com, **cambia solo estos registros**:

   | Tipo | Nombre | Valor |
   |---|---|---|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

   Usa los valores exactos que muestre Vercel si son distintos.

3. **No toques los registros MX, TXT (SPF) ni los CNAME de `autodiscover`**: son los del correo de Microsoft 365 (Outlook). Si se cambian, dejan de llegar los correos de reservas@ y contacto@.
4. Para Resend: en resend.com, agrega el dominio `paseoplacer.com` y crea en NIC.com los registros TXT y MX que Resend indique para el subdominio de envío. No reemplazan a los de Microsoft 365.

## Pendientes antes del lanzamiento

- Reemplazar los videos provisorios (`public/video/`) por grabaciones reales de las fiestas.
- Foto de fachada en alta resolución.
- Autorización escrita de Tomás Cox para usar su nombre e imagen.
- Validar capacidades de los salones con el permiso municipal.
- Revisión legal de `/privacidad`.
