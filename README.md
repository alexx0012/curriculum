# Alejandro Mato - Curriculum Web

<div align="center">

![Portfolio Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

> *Curriculum moderno y responsivo con animaciones fluidas y diseño vanguardista*


</div>

---

## Sobre este Proyecto

Un **curriculum web profesional** creado con HTML, CSS y JavaScript vanilla que destaca por:

- ✨ **Animaciones modernas** y efectos visuales impactantes
- 📱 **Diseño completamente responsivo** (optimizado hasta 400px)
- 🌐 **Multiidioma** (Español e Inglés)
- ♿ **Accesibilidad** (WCAG 2.1 AA)
- 🎨 **Diseño contemporáneo** con tema oscuro profesional
- ⚡ **Rendimiento optimizado** sin dependencias externas

---

## Características Principales

### Animaciones Dinámicas
- Animaciones CSS fluidas y transiciones suaves
- Efecto de partículas interactivas en background
- Typing effect automático en el hero
- Scroll animations con Intersection Observer

### Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados (768px, 400px)
- Menú hamburguesa adaptativo
- Logo encogible en pantallas pequeñas

### Multiidioma
- Sistema i18n completo (Español/Inglés)
- Cambio de idioma sin recargar
- Traducciones en tiempo real

### Accesibilidad
- Navegación por teclado
- ARIA labels descriptivos
- Skip links
- Soporte para modo de alto contraste
- Respetar preferencias de movimiento reducido

### Secciones
- **Hero** con badge de disponibilidad
- **Sobre Mí** con estadísticas y video
- **Experiencia** con timeline
- **Proyectos** con galería responsive
- **Contacto** con información

---

## Stack Tecnológico

```
Frontend
├── HTML5 (Semántico)
├── CSS3 (Custom Properties, Grid, Flexbox, Animations)
└── JavaScript (Vanilla - Sin dependencias)

Herramientas
├── Google Fonts (Inter, Space Grotesk)
├── Git (Control de versiones)
└── Responsive Design Patterns
```

---

## Estructura del Proyecto

```
curriculum/
│
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Estilos (500+ líneas)
├── ⚙️ script.js           # Lógica JavaScript
├── 📖 README.md           # Este archivo
│
├── 📁 assets/
    ├── 🖼️ img/            # Imágenes del portfolio
    └── 🎬 video/          # Videos de perfil

```

### Tamaño y Rendimiento
- **HTML:** Semántico y bien estructurado
- **CSS:** ~1,700 líneas optimizadas (custom properties, variables)
- **JS:** ~500 líneas (sin librerías externas)
- **Total:** <100KB sin assets

---

## Características Técnicas Destacadas

### Variables CSS Personalizadas
```css
:root {
  --bg-primary: #09090b;
  --accent: #d4d4d8;
  --nav-height: 72px;
  --transition-base: 250ms ease;
  /* ... más de 40 variables */
}
```

### Animaciones Personalizadas
- **Partículas flotantes** en background
- **Efecto scroll** con parallax
- **Typing effect** dinámico
- **Hover states** fluidos
- **Fade-in animations** al scroll

### JavaScript Modular
- Separación de responsabilidades
- Gestión de eventos eficiente
- LocalStorage para idioma
- Intersection Observer API
- Event delegation

---

## Responsividad

Breakpoints optimizados:

| Pantalla | Ancho | Características |
|----------|-------|-----------------|
| **Móvil Extra** | ≤ 400px | Logo encogido, menú hamburguesa |
| **Móvil** | ≤ 767px | Menú drawer, stack vertical |
| **Tablet** | 768px - 1023px | Transición fluida |
| **Desktop** | ≥ 1440px | Layout completo optimizado |

---

## Cómo Acceder

### Opción 1: Directamente en el navegador
1. Descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Disfruta!

### Opción 2: Con servidor local
```bash
# Si tienes Python 3
python -m http.server 8000

# O con Node.js
npx http-server

# Luego abre: http://localhost:8000
```

### Opción 3: Deploy
- **Netlify:** Conecta el repositorio
- **GitHub Pages:** Activa en settings
- **Vercel:** Deploy en 1 clic

---


## Funcionalidades Interactivas

### Menú Responsivo
```javascript
// Automático en < 768px
// Hamburguesa visible
// Cierre al hacer click
```

### Cambio de Idioma
- Click en botón "EN/ES"
- Cambio instantáneo
- Persiste en localStorage

### Scroll Suave
- Navegación interno anclas
- Efecto scroll smooth
- Contador animado

### Lazy Loading
- Imágenes optimizadas
- Video autoplay (viewport)

---

## Optimizaciones

### Performance
- ✅ CSS minificado y organizado
- ✅ Sin JavaScript bloqueante
- ✅ Lazy loading de imágenes
- ✅ Webfonts con preconnect
- ✅ Critical CSS inlined

### SEO
- ✅ Meta tags completos
- ✅ Open Graph integrado
- ✅ Twitter Cards
- ✅ Sitemap-ready
- ✅ Schema markup basic

### Accesibilidad
- ✅ WCAG 2.1 AA compliant
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Focus indicators visibles
- ✅ Keyboard navigation

---

## Desarrollo

### Modificar estilos
Edita `styles.css` usando las variables CSS:

```css
/* Solo cambiar las variables */
:root {
  --accent: #tu-color;
  --bg-primary: #tu-fondo;
}
```

### Agregar idiomas
En `script.js`, añade en `TRANSLATIONS`:

```javascript
const TRANSLATIONS = {
  en: { /* ... */ },
  fr: { /* tus traducciones */ }
}
```

### Personalizar animaciones
```css
.tu-elemento {
  animation: fadeIn var(--transition-base);
}
```

---

## Estadísticas

- **Años de Experiencia:** 28+ (industria + tecnología)
- **Tecnologías Dominadas:** 3 (HTML, CSS, JavaScript)
- **Idiomas:** 2 (Español, Inglés)
- **Compromiso:** 100%

---

## Contribuciones

Este es un portfolio personal, pero siéntete libre de:
- 🐛 Reportar bugs en issues
- 💡 Sugerir mejoras
- 🔄 Fork y crear tu propia versión

**Si usas este código como base, incluye una mención al original.** ⭐

---

## Contacto

- **GitHub:** [@alexx0012](https://github.com/alexx0012)

---

## Licencia

Este proyecto es de **código abierto** bajo licencia MIT.

```
MIT License - Sé libre de usarlo, modificarlo y distribuirlo
siempre que mantengas la atribución original.
```

---

## Agradecimientos

- Google Fonts por las tipografías
- Comunidad web por la inspiración
- A ti por visitar este portfolio 💜

---

<div align="center">

**Hecho con Visual Studio Code y muchas animaciones CSS**

⭐ Si te gusta, considera darle una estrella en GitHub

[Volver arriba ⬆️](#-alejandro-mato---portfolio-web)

</div>
