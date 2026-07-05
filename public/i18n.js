/* ── Gotham Portfolio — i18n Engine ── */
(function () {
  var T = {
    es: {
      /* ── Header ── */
      'nav.home':    'Inicio',
      'nav.about':   'Acerca de mí',
      'nav.projects':'Proyectos',
      'nav.contact': 'Contacto',

      /* ── Index hero ── */
      'index.badge':       '⬡ Disponible para proyectos remotos ⬡',
      'index.hero.desc':   'Especializado en el desarrollo de <span style="color:#FFD700;font-weight:700;text-shadow:0 0 8px rgba(255,215,0,0.5);">aplicaciones web modernas</span> y <span style="color:#00d4ff;font-weight:700;text-shadow:0 0 8px rgba(0,212,255,0.5);">soluciones de ciberseguridad</span>. Combino experiencia técnica con un enfoque meticuloso para crear software escalable, eficiente y seguro.',
      'index.techs.label': 'Tecnologías principales',
      'index.cta.portfolio':'Explorar Portafolio',
      'index.cta.contact': 'Contactar Ahora',
      'index.scroll':      'Descubre más',

      /* ── Index tech section ── */
      'index.tech.label':  '─── Stack Tecnológico ───',
      'index.tech.h1':     'DOMINIO',
      'index.tech.h2':     'COMPLETO',
      'index.tech.desc':   'Especialización en las tecnologías más demandadas para el desarrollo de soluciones modernas y escalables.',
      'index.frontend.sub':'Interfaces modernas',
      'index.backend.sub': 'Lógica del servidor',
      'index.db.title':    'Bases de Datos',
      'index.db.sub':      'Gestión de datos',
      'index.devops.sub':  'Infraestructura',

      /* ── Index featured projects ── */
      'index.fp.label':    '─── Proyectos Recientes ───',
      'index.fp.h1':       'TRABAJO ',
      'index.fp.h2':       'DESTACADO',
      'index.fp.card1.title': 'Sistema de Auditoría',
      'index.fp.card1.desc':  'Plataforma de seguridad con Python y Bash',
      'index.fp.card2.title': 'App Full Stack',
      'index.fp.card3.title': 'BOT de Tendencias',
      'index.fp.card3.desc':  'Python + Flask + Twilio para crear un bot de tendencias',
      'index.fp.viewall':  'Ver todos los proyectos',

      /* ── Index values ── */
      'index.val.label':   '─── Metodología de Trabajo ───',
      'index.val.h1':      'ENFOQUE ',
      'index.val.h2':      'ESTRATÉGICO',
      'index.val.desc':    'Un proceso meticuloso que garantiza calidad, seguridad y resultados excepcionales en cada proyecto.',
      'index.val.v1.title':'Seguridad Primero',
      'index.val.v1.desc': 'Implemento principios de ciberseguridad desde el diseño inicial, asegurando que cada línea de código cumpla con los más altos estándares de protección.',
      'index.val.v2.title':'Código Eficiente',
      'index.val.v2.desc': 'Desarrollo software optimizado para performance y escalabilidad, utilizando las mejores prácticas y patrones de diseño para garantizar mantenibilidad a largo plazo.',
      'index.val.v3.title':'Entrega Rápida',
      'index.val.v3.desc': 'Aplico metodologías ágiles para mantener ciclos de desarrollo rápidos y eficientes, entregando valor tangible en cada iteración sin comprometer la calidad.',

      /* ── Index CTA ── */
      'index.cta.label':   '─── ¿Listo para comenzar? ───',
      'index.cta.h1':      'TRANSFORMEMOS TU',
      'index.cta.h2':      'IDEA EN REALIDAD',
      'index.cta.desc':    'Desde una simple consulta hasta un proyecto complejo, estoy aquí para ayudarte a construir la solución perfecta utilizando las mejores tecnologías y prácticas de desarrollo.',
      'index.cta.btn':     'Iniciar Conversación',

      /* ── About hero ── */
      'about.badge':       '⬡ Gotham Developer ⬡',
      'about.h1':          'ACERCA',
      'about.h2':          'DE MÍ',
      'about.bio':         'Soy <span style="color:#FFD700;font-weight:700;text-shadow:0 0 8px rgba(255,215,0,0.5);">Santiago</span>, desarrollador de software enfocado en el diseño y construcción de soluciones web modernas, seguras y escalables. Me especializo en arquitecturas sólidas, atención al detalle y experiencia de usuario de alto nivel.',
      'about.spec.cyber':  'Ciberseguridad',
      'about.spec.hacking':'Hacking Ético',
      'about.spec.fs':     'Full-Stack Dev',
      'about.cta.projects':'Ver Proyectos',
      'about.cta.contact': 'Contáctame',
      'about.scroll':      'DESCUBRE MÁS',

      /* ── About security ── */
      'about.sec.label':   '─── Especialización ───',
      'about.sec.h1':      'CIBERSEGURIDAD &',
      'about.sec.h2':      'HACKING ÉTICO',
      'about.sec.pent.title': 'Pentesting',
      'about.sec.pent.desc':  'Pruebas de penetración y auditorías de seguridad en aplicaciones web y redes.',
      'about.sec.vuln.title': 'Análisis de Vulnerabilidades',
      'about.sec.vuln.desc':  'Identificación y remediación de vulnerabilidades en código e infraestructura.',
      'about.sec.web.title':  'Seguridad Web',
      'about.sec.web.desc':   'Protección contra ataques comunes como XSS, SQLi, CSRF y más.',
      'about.sec.for.title':  'Forense Digital',
      'about.sec.for.desc':   'Investigación de incidentes de seguridad y análisis de evidencias digitales.',
      'about.sec.hard.title': 'Hardening',
      'about.sec.hard.desc':  'Fortalecimiento de sistemas y aplicaciones contra posibles ataques.',
      'about.sec.aw.title':   'Concienciación',
      'about.sec.aw.desc':    'Capacitación en seguridad para equipos de desarrollo y usuarios finales.',

      /* ── About skills ── */
      'about.skills.label':'─── Stack & Dominio ───',
      'about.skills.h1':   'MIS ',
      'about.skills.h2':   'HABILIDADES',
      'about.skills.fe.desc':  'React, Vue, Astro, Tailwind',
      'about.skills.be.desc':  'Node.js, Express, MongoDB',
      'about.skills.sec.desc': 'Pentesting, Forense, Hardening',
      'about.skills.do.title': 'DevOps & Cloud',
      'about.skills.do.desc':  'Docker, AWS, CI/CD',

      /* ── About timeline ── */
      'about.tl.label':    '─── Experiencia ───',
      'about.tl.h1':       'MI ',
      'about.tl.h2':       'TRAYECTORIA',
      'about.tl.now':      'Presente',
      'about.tl.i1.title': 'Desarrollador Fullstack, Mobile & Security Researcher',
      'about.tl.i1.desc':  'Desarrollador de software full stack especializado en soluciones de seguridad, desarrollo de aplicaciones móviles y web responsive para cualquier dispositivo.',
      'about.tl.i2.title': 'Analista de Datos',
      'about.tl.i2.desc':  'Analista computacional de datos para Ingeniería Aplicada ITD SAS, con modelos predictivos y análisis estadístico avanzado.',
      'about.tl.i3.title': 'Semillerista de Ciberseguridad — CUAN',
      'about.tl.i3.desc':  'Semillerista de Ciberseguridad en la Corporación Universitaria Autónoma de Nariño, especializado en seguridad de aplicaciones web y sistemas operativos.',
      'about.tl.i4.title': 'Pentester & Security Analyst',
      'about.tl.i4.desc':  'Realización de pruebas de penetración para verificar integridad y autenticidad de aplicaciones web y móviles.',
      'about.tl.i5.title': 'Desarrollador Frontend',
      'about.tl.i5.desc':  'Especializado en interfaces de usuario seguras y aplicaciones web modernas con foco en accesibilidad y rendimiento.',
      'about.tl.i6.title': 'Estudiante de Ciberseguridad',
      'about.tl.i6.desc':  'Formación en ethical hacking, análisis de malware y técnicas de seguridad ofensiva y defensiva.',

      /* ── About philosophy ── */
      'about.phi.label':   '─── Principios ───',
      'about.phi.h1':      'FILOSOFÍA DE ',
      'about.phi.h2':      'SEGURIDAD',
      'about.phi.p1.title':'Mentalidad Ofensiva',
      'about.phi.p1.desc': 'Pienso como un atacante para anticipar vectores de ataque y fortalecer las defensas antes de que sean explotadas.',
      'about.phi.p2.title':'Defensa en Profundidad',
      'about.phi.p2.desc': 'Implemento múltiples capas de seguridad para que la falla de una no comprometa todo el sistema.',
      'about.phi.p3.title':'Transparencia Ética',
      'about.phi.p3.desc': 'Creo en la divulgación responsable de vulnerabilidades y en el hacking ético como herramienta de mejora.',
      'about.phi.p4.title':'Mejora Continua',
      'about.phi.p4.desc': 'La seguridad no es un destino sino un proceso continuo de evaluación, mejora y adaptación.',

      /* ── About CTA ── */
      'about.cta.title':   '¿PROTECCIÓN CONTRA AMENAZAS DIGITALES?',
      'about.cta.desc':    'Desarrollo soluciones seguras y realizo auditorías para fortalecer tus defensas digitales.',
      'about.cta.btn1':    'Auditoría de Seguridad',
      'about.cta.btn2':    'Ver Proyectos',

      /* ── Projects ── */
      'proj.badge':        '⬡ Portafolio ⬡',
      'proj.h1':           'MIS',
      'proj.h2':           'PROYECTOS',
      'proj.hero.desc':    'Creaciones con temática oscura e inspiradas en Gotham City — donde el código se convierte en arte.',
      'proj.filter.all':   'Todos',
      'proj.view':         'Ver proyecto',
      'proj.writeup':      'Ver writeup',
      'proj.done':         'Terminado',
      'proj.empty':        'Sin proyectos en esta categoría',

      /* ── Contact ── */
      'contact.badge':     '⬡ Respuesta en menos de 24h ⬡',
      'contact.h1':        'CONTÁCTAME',
      'contact.hero.desc': 'Si buscas <span style="color:#FFD700;font-weight:700;text-shadow:0 0 6px rgba(255,215,0,0.5);">colaborar en proyectos</span> o <span style="color:#00d4ff;font-weight:700;text-shadow:0 0 6px rgba(0,212,255,0.5);">trabajar juntos</span>, envíame un mensaje.',
      'contact.info.title':'Información de Contacto',
      'contact.email.lbl': 'Correo Electrónico',
      'contact.phone.lbl': 'Teléfono',
      'contact.loc.lbl':   'Ubicación',
      'contact.loc.val':   'Disponible para trabajo remoto',
      'contact.resp.lbl':  'Tiempo de Respuesta',
      'contact.resp.val':  'Menos de 24 horas',
      'contact.hours.title':'Horario de Contacto',
      'contact.hours.wk':  'Lun - Vie: 9:00 - 18:00 (GMT-5)',
      'contact.hours.em':  'Emergencias tecnológicas: Siempre disponible',
      'contact.form.title':'ENVÍO DE MENSAJE',
      'contact.name.lbl':  'NOMBRE',
      'contact.name.ph':   'Ingresa tu nombre',
      'contact.email2.lbl':'CORREO ELECTRÓNICO',
      'contact.msg.lbl':   'MENSAJE',
      'contact.msg.ph':    'Describe tu proyecto o consulta...',
      'contact.submit':    'ENVIAR MENSAJE',
      'contact.faq.label': '─── Dudas Frecuentes ───',
      'contact.faq.h1':    'PREGUNTAS ',
      'contact.faq.h2':    'FRECUENTES',
      'contact.faq.q1.t':  '¿Cuánto tardas en responder?',
      'contact.faq.q1.s':  'Tiempo estimado de respuesta',
      'contact.faq.q1.a':  'Normalmente respondo en menos de <span style="color:#FFD700;font-weight:700;">24 horas hábiles</span>. Para consultas urgentes, respondo en menos de 6 horas.',
      'contact.faq.q2.t':  '¿Trabajas con empresas internacionales?',
      'contact.faq.q2.s':  'Alcance global',
      'contact.faq.q2.a':  'Sí, trabajo con clientes de distintos países. Manejo <span style="color:#00d4ff;font-weight:700;">múltiples husos horarios</span> y hablo español e inglés fluidamente.',
      'contact.faq.q3.t':  '¿Ofreces mantenimiento post-desarrollo?',
      'contact.faq.q3.s':  'Soporte continuo',
      'contact.faq.q3.a':  'Sí, ofrezco <span style="color:#8b5cf6;font-weight:700;">soporte post-desarrollo</span> con planes de mantenimiento que incluyen actualizaciones, corrección de bugs y optimizaciones.',
      'contact.faq.q4.t':  '¿Cómo manejas la confidencialidad?',
      'contact.faq.q4.s':  'Seguridad y privacidad',
      'contact.faq.q4.a':  'Trabajo con <span style="color:#FFD700;font-weight:700;">estrictos protocolos de confidencialidad</span>. Ofrezco firmar NDAs y utilizo encriptación para todas las comunicaciones y datos sensibles.',

      /* ── Footer ── */
      'footer.h1':         'CONÉCTATE',
      'footer.h2':         'CONMIGO',
      'footer.desc':       '¿Tienes un proyecto en mente? No dudes en contactarme. Siempre estoy buscando nuevos desafíos en el mundo del desarrollo.',
      'footer.loc':        'Ubicación',
      'footer.avail':      'Disponibilidad',
      'footer.nav.home':   'Inicio',
      'footer.nav.proj':   'Proyectos',
      'footer.nav.about':  'Sobre Mí',
      'footer.nav.contact':'Contacto',
      'footer.copy':       '© 2025 Santiago López — Hecho en las sombras de Gotham',
      'footer.role':       'DESARROLLADOR FRONTEND & BACKEND',
    },

    en: {
      /* ── Header ── */
      'nav.home':    'Home',
      'nav.about':   'About Me',
      'nav.projects':'Projects',
      'nav.contact': 'Contact',

      /* ── Index hero ── */
      'index.badge':       '⬡ Available for remote projects ⬡',
      'index.hero.desc':   'Specialized in the development of <span style="color:#FFD700;font-weight:700;text-shadow:0 0 8px rgba(255,215,0,0.5);">modern web applications</span> and <span style="color:#00d4ff;font-weight:700;text-shadow:0 0 8px rgba(0,212,255,0.5);">cybersecurity solutions</span>. I combine technical expertise with a meticulous approach to build scalable, efficient, and secure software.',
      'index.techs.label': 'Main Technologies',
      'index.cta.portfolio':'Explore Portfolio',
      'index.cta.contact': 'Contact Now',
      'index.scroll':      'Discover more',

      /* ── Index tech section ── */
      'index.tech.label':  '─── Tech Stack ───',
      'index.tech.h1':     'FULL',
      'index.tech.h2':     'MASTERY',
      'index.tech.desc':   'Expertise in the most in-demand technologies for building modern and scalable solutions.',
      'index.frontend.sub':'Modern interfaces',
      'index.backend.sub': 'Server logic',
      'index.db.title':    'Databases',
      'index.db.sub':      'Data management',
      'index.devops.sub':  'Infrastructure',

      /* ── Index featured projects ── */
      'index.fp.label':    '─── Recent Projects ───',
      'index.fp.h1':       'FEATURED ',
      'index.fp.h2':       'WORK',
      'index.fp.card1.title': 'Audit System',
      'index.fp.card1.desc':  'Security platform with Python and Bash',
      'index.fp.card2.title': 'Full Stack App',
      'index.fp.card3.title': 'Trends BOT',
      'index.fp.card3.desc':  'Python + Flask + Twilio to build a trends bot',
      'index.fp.viewall':  'View all projects',

      /* ── Index values ── */
      'index.val.label':   '─── Work Methodology ───',
      'index.val.h1':      'STRATEGIC ',
      'index.val.h2':      'APPROACH',
      'index.val.desc':    'A meticulous process that ensures quality, security, and exceptional results on every project.',
      'index.val.v1.title':'Security First',
      'index.val.v1.desc': 'I implement cybersecurity principles from the initial design, ensuring every line of code meets the highest protection standards.',
      'index.val.v2.title':'Efficient Code',
      'index.val.v2.desc': 'I develop software optimized for performance and scalability, using best practices and design patterns to guarantee long-term maintainability.',
      'index.val.v3.title':'Fast Delivery',
      'index.val.v3.desc': 'I apply agile methodologies to maintain fast and efficient development cycles, delivering tangible value in each iteration without compromising quality.',

      /* ── Index CTA ── */
      'index.cta.label':   '─── Ready to start? ───',
      'index.cta.h1':      "LET'S TURN YOUR",
      'index.cta.h2':      'IDEA INTO REALITY',
      'index.cta.desc':    "From a simple inquiry to a complex project, I'm here to help you build the perfect solution using the best technologies and development practices.",
      'index.cta.btn':     'Start Conversation',

      /* ── About hero ── */
      'about.badge':       '⬡ Gotham Developer ⬡',
      'about.h1':          'ABOUT',
      'about.h2':          'ME',
      'about.bio':         'I am <span style="color:#FFD700;font-weight:700;text-shadow:0 0 8px rgba(255,215,0,0.5);">Santiago</span>, a software developer focused on designing and building modern, secure, and scalable web solutions. I specialize in solid architectures, attention to detail, and high-level user experience.',
      'about.spec.cyber':  'Cybersecurity',
      'about.spec.hacking':'Ethical Hacking',
      'about.spec.fs':     'Full-Stack Dev',
      'about.cta.projects':'View Projects',
      'about.cta.contact': 'Contact Me',
      'about.scroll':      'DISCOVER MORE',

      /* ── About security ── */
      'about.sec.label':   '─── Specialization ───',
      'about.sec.h1':      'CYBERSECURITY &',
      'about.sec.h2':      'ETHICAL HACKING',
      'about.sec.pent.title': 'Pentesting',
      'about.sec.pent.desc':  'Penetration testing and security audits on web applications and networks.',
      'about.sec.vuln.title': 'Vulnerability Analysis',
      'about.sec.vuln.desc':  'Identification and remediation of vulnerabilities in code and infrastructure.',
      'about.sec.web.title':  'Web Security',
      'about.sec.web.desc':   'Protection against common attacks such as XSS, SQLi, CSRF and more.',
      'about.sec.for.title':  'Digital Forensics',
      'about.sec.for.desc':   'Security incident investigation and digital evidence analysis.',
      'about.sec.hard.title': 'Hardening',
      'about.sec.hard.desc':  'Strengthening systems and applications against potential attacks.',
      'about.sec.aw.title':   'Awareness',
      'about.sec.aw.desc':    'Security training for development teams and end users.',

      /* ── About skills ── */
      'about.skills.label':'─── Stack & Mastery ───',
      'about.skills.h1':   'MY ',
      'about.skills.h2':   'SKILLS',
      'about.skills.fe.desc':  'React, Vue, Astro, Tailwind',
      'about.skills.be.desc':  'Node.js, Express, MongoDB',
      'about.skills.sec.desc': 'Pentesting, Forensics, Hardening',
      'about.skills.do.title': 'DevOps & Cloud',
      'about.skills.do.desc':  'Docker, AWS, CI/CD',

      /* ── About timeline ── */
      'about.tl.label':    '─── Experience ───',
      'about.tl.h1':       'MY ',
      'about.tl.h2':       'JOURNEY',
      'about.tl.now':      'Present',
      'about.tl.i1.title': 'Fullstack, Mobile Developer & Security Researcher',
      'about.tl.i1.desc':  'Full stack software developer specialized in security solutions, mobile application development and responsive web for any device.',
      'about.tl.i2.title': 'Data Analyst',
      'about.tl.i2.desc':  'Computational data analyst for Ingeniería Aplicada ITD SAS, with predictive models and advanced statistical analysis.',
      'about.tl.i3.title': 'Cybersecurity Researcher — CUAN',
      'about.tl.i3.desc':  'Cybersecurity researcher at Corporación Universitaria Autónoma de Nariño, specializing in web application and OS security.',
      'about.tl.i4.title': 'Pentester & Security Analyst',
      'about.tl.i4.desc':  'Conducting penetration tests to verify the integrity and authenticity of web and mobile applications.',
      'about.tl.i5.title': 'Frontend Developer',
      'about.tl.i5.desc':  'Specialized in secure user interfaces and modern web applications focused on accessibility and performance.',
      'about.tl.i6.title': 'Cybersecurity Student',
      'about.tl.i6.desc':  'Training in ethical hacking, malware analysis, and offensive and defensive security techniques.',

      /* ── About philosophy ── */
      'about.phi.label':   '─── Principles ───',
      'about.phi.h1':      'SECURITY ',
      'about.phi.h2':      'PHILOSOPHY',
      'about.phi.p1.title':'Offensive Mindset',
      'about.phi.p1.desc': 'I think like an attacker to anticipate attack vectors and strengthen defenses before they are exploited.',
      'about.phi.p2.title':'Defense in Depth',
      'about.phi.p2.desc': 'I implement multiple security layers so the failure of one does not compromise the entire system.',
      'about.phi.p3.title':'Ethical Transparency',
      'about.phi.p3.desc': 'I believe in responsible disclosure of vulnerabilities and ethical hacking as a tool for improvement.',
      'about.phi.p4.title':'Continuous Improvement',
      'about.phi.p4.desc': 'Security is not a destination but a continuous process of evaluation, improvement, and adaptation.',

      /* ── About CTA ── */
      'about.cta.title':   'NEED PROTECTION AGAINST DIGITAL THREATS?',
      'about.cta.desc':    'I develop secure solutions and conduct audits to strengthen your digital defenses.',
      'about.cta.btn1':    'Security Audit',
      'about.cta.btn2':    'View Projects',

      /* ── Projects ── */
      'proj.badge':        '⬡ Portfolio ⬡',
      'proj.h1':           'MY',
      'proj.h2':           'PROJECTS',
      'proj.hero.desc':    'Dark-themed creations inspired by Gotham City — where code becomes art.',
      'proj.filter.all':   'All',
      'proj.view':         'View project',
      'proj.writeup':      'View writeup',
      'proj.done':         'Finished',
      'proj.empty':        'No projects in this category',

      /* ── Contact ── */
      'contact.badge':     '⬡ Response within 24h ⬡',
      'contact.h1':        'CONTACT ME',
      'contact.hero.desc': 'If you want to <span style="color:#FFD700;font-weight:700;text-shadow:0 0 6px rgba(255,215,0,0.5);">collaborate on projects</span> or <span style="color:#00d4ff;font-weight:700;text-shadow:0 0 6px rgba(0,212,255,0.5);">work together</span>, send me a message.',
      'contact.info.title':'Contact Information',
      'contact.email.lbl': 'Email',
      'contact.phone.lbl': 'Phone',
      'contact.loc.lbl':   'Location',
      'contact.loc.val':   'Available for remote work',
      'contact.resp.lbl':  'Response Time',
      'contact.resp.val':  'Less than 24 hours',
      'contact.hours.title':'Contact Hours',
      'contact.hours.wk':  'Mon - Fri: 9:00 - 18:00 (GMT-5)',
      'contact.hours.em':  'Tech emergencies: Always available',
      'contact.form.title':'SEND MESSAGE',
      'contact.name.lbl':  'NAME',
      'contact.name.ph':   'Enter your name',
      'contact.email2.lbl':'EMAIL',
      'contact.msg.lbl':   'MESSAGE',
      'contact.msg.ph':    'Describe your project or inquiry...',
      'contact.submit':    'SEND MESSAGE',
      'contact.faq.label': '─── Frequently Asked ───',
      'contact.faq.h1':    'FREQUENTLY ',
      'contact.faq.h2':    'ASKED QUESTIONS',
      'contact.faq.q1.t':  'How long does it take to respond?',
      'contact.faq.q1.s':  'Estimated response time',
      'contact.faq.q1.a':  'I usually respond in less than <span style="color:#FFD700;font-weight:700;">24 business hours</span>. For urgent inquiries, I respond in less than 6 hours.',
      'contact.faq.q2.t':  'Do you work with international companies?',
      'contact.faq.q2.s':  'Global reach',
      'contact.faq.q2.a':  'Yes, I work with clients from different countries. I handle <span style="color:#00d4ff;font-weight:700;">multiple time zones</span> and speak Spanish and English fluently.',
      'contact.faq.q3.t':  'Do you offer post-development maintenance?',
      'contact.faq.q3.s':  'Ongoing support',
      'contact.faq.q3.a':  'Yes, I offer <span style="color:#8b5cf6;font-weight:700;">post-development support</span> with maintenance plans including updates, bug fixes, and optimizations.',
      'contact.faq.q4.t':  'How do you handle confidentiality?',
      'contact.faq.q4.s':  'Security and privacy',
      'contact.faq.q4.a':  'I work with <span style="color:#FFD700;font-weight:700;">strict confidentiality protocols</span>. I offer to sign NDAs and use encryption for all communications and sensitive data.',

      /* ── Footer ── */
      'footer.h1':         'CONNECT',
      'footer.h2':         'WITH ME',
      'footer.desc':       'Have a project in mind? Do not hesitate to contact me. I am always looking for new challenges in the world of development.',
      'footer.loc':        'Location',
      'footer.avail':      'Availability',
      'footer.nav.home':   'Home',
      'footer.nav.proj':   'Projects',
      'footer.nav.about':  'About',
      'footer.nav.contact':'Contact',
      'footer.copy':       '© 2025 Santiago López — Made in the shadows of Gotham',
      'footer.role':       'FRONTEND & BACKEND DEVELOPER',
    }
  };

  /* ── Engine ── */
  function getLang() {
    return localStorage.getItem('gp_lang') || 'es';
  }

  function t(key) {
    var lang = getLang();
    return (T[lang] && T[lang][key] !== undefined) ? T[lang][key]
         : (T['es'] && T['es'][key] !== undefined) ? T['es'][key]
         : key;
  }

  function apply() {
    var lang = getLang();
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    /* Update toggle buttons (desktop + mobile) */
    var label = lang === 'es' ? 'EN' : 'ES';
    var title = lang === 'es' ? 'Switch to English' : 'Cambiar a Español';
    var btn = document.getElementById('lang-toggle');
    if (btn) { btn.textContent = label; btn.title = title; }
    var btnM = document.getElementById('lang-toggle-mobile');
    if (btnM) btnM.textContent = label;
  }

  window.toggleLang = function () {
    localStorage.setItem('gp_lang', getLang() === 'es' ? 'en' : 'es');
    apply();
  };

  /* Apply on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }

  window.i18n = { t: t, getLang: getLang, apply: apply };
})();
