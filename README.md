# 🦇 Gotham Portfolio — Santiago López

Portfolio personal desarrollado con temática de **Gotham City / Batman**, inspirado visualmente en el sitio de LEGO Batman. Combina animaciones cinematográficas, efectos de lluvia, niebla y un diseño oscuro con paleta de oro, cian neón y púrpura.

---

## 👤 Sobre el Desarrollador

**Santiago López** — Desarrollador Full Stack & Especialista en Ciberseguridad  
Ingeniero Informático enfocado en soluciones web modernas, seguras y escalables.

- 🌐 Stack: HTML · CSS · JavaScript · TypeScript · Python · Java · SQL · Bash
- 📱 Mobile: React Native · Expo · Firebase
- 🛡️ Seguridad: Pentesting · OWASP · Burp Suite · Metasploit · Forense Digital
- ☁️ DevOps: Docker · Git · CI/CD

---

## 🚀 Páginas

| Ruta | Descripción |
| :--- | :--- |
| `/` | Hero con imagen de personaje + texto animado, stack tecnológico, proyectos y CTA |
| `/about` | Trayectoria, habilidades, ciberseguridad y filosofía de trabajo |
| `/projects` | Portafolio de proyectos con filtros por categoría |
| `/contact` | Formulario que abre Gmail pre-rellenado + FAQ |

---

## ✨ Características

- **BackgroundAnimation** — Canvas con 241 frames de Gotham City que se reproducen según el scroll
- **Lluvia Gotham** — Sistema de partículas en canvas 2D con 3 capas de profundidad, glow cian y splashes
- **Smoke** — Efecto de niebla Three.js sobre toda la aplicación
- **Panel de lluvia** — Control interactivo de intensidad (Off / Poco / Medio / Fuerte), siempre en capa superior
- **Loading screen** — Bat signal animado con barra de progreso gold→cyan
- **Diseño LEGO Batman** — Paleta: negro puro · oro `#FFD700` · cian `#00d4ff` · púrpura `#8b5cf6`
- **Hero 2 columnas** — Contenido a la izquierda, personaje + Fuente.png a la derecha con scroll-fade
- **Clip-path angular** — Marco del personaje con cortes diagonales estilo Gotham y borde neón pulsante
- **Formulario → Gmail** — El formulario de contacto pre-rellena un correo en Gmail en lugar de WhatsApp
- **Totalmente responsivo** — Adaptado a móvil, tablet y desktop

---

## 🗂️ Estructura del Proyecto

```
/
├── public/
│   ├── frames/              ← 241 frames de la animación de fondo
│   ├── images/              ← Background.png, Fuente.png, fotos de proyectos
│   ├── smoke.webp           ← Textura de humo para Three.js
│   ├── Bat-Ico.png          ← Ícono del header
│   └── CV.pdf               ← CV descargable
├── src/
│   ├── components/
│   │   ├── BackgroundAnimation.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Smoke.astro
│   │   └── WaterDrops.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   └── contact.astro
│   └── styles/
│       ├── global.css
│       └── water-drops.css
└── package.json
```

---

## 🧞 Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio de producción en `./dist/` |
| `npm run preview` | Vista previa del build antes de desplegar |

---

## 🛠️ Tecnologías del Proyecto

- **[Astro](https://astro.build/)** — Framework principal
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilos utilitarios
- **[Three.js](https://threejs.org/)** — Efecto de niebla 3D
- **Canvas 2D API** — Sistema de lluvia personalizado
- **Font Awesome 6** — Íconos
- **Cinzel / Cinzel Decorative** — Tipografía temática

---

*Hecho en las sombras de Gotham — Santiago López © 2025*
