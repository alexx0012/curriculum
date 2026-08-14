(function () {
    'use strict';

    // ===== CONFIG =====
    const CONFIG = {
        particles: { count: 30, minSize: 2, maxSize: 6, minDuration: 10, maxDuration: 20 },
        typing: {
            texts: ['Desarrollador Web', 'Creador de Animaciones', 'Frontend Junior'],
            typingSpeed: 100,
            deletingSpeed: 50,
            pauseDuration: 2000,
            pauseBeforeType: 500
        },
        scroll: { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        counter: { duration: 2000 }
    };

    // ===== TRANSLATIONS =====
    const TRANSLATIONS = {
        es: {
            skip_link: 'Saltar al contenido principal',
            nav_aria: 'Navegación principal',
            logo_aria: 'Alexx0012 - Inicio',
            menu_btn_aria: 'Abrir menú de navegación',
            menu_sr: 'Menú',
            nav_inicio: 'Inicio',
            nav_sobre_mi: 'Sobre Mí',
            nav_experiencia: 'Experiencia',
            nav_proyectos: 'Proyectos',
            nav_logros: 'Logros',
            nav_contacto: 'Contacto',
            meta_desc: 'Portfolio de Alejandro Mato Gómez - Desarrollador Web Junior especializado en animaciones modernas con HTML, CSS y JavaScript.',
            meta_keywords: 'desarrollador web, frontend, HTML, CSS, JavaScript, animaciones, portfolio',
            og_title: 'Alejandro Mato Gómez | Desarrollador Web',
            og_desc: 'Desarrollador web junior especializado en animaciones modernas con HTML, CSS y JavaScript.',
            twitter_desc: 'Desarrollador web junior especializado en animaciones modernas.',
            page_title: 'Alejandro Mato | Desarrollador Web Junior',
            hero_badge: 'Disponible para proyectos',
            hero_title: 'Hola, soy',
            hero_description: 'Desarrollador web junior entusiasta, especializado en crear experiencias digitales modernas con animaciones fluidas y diseño vanguardista. Motivado por aprender y crecer en el sector tecnológico.',
            hero_btn_proyectos: 'Ver Proyectos',
            hero_btn_contacto: 'Contactar',
            hero_typing_aria: 'Profesiones: ',
            typing_texts: ['Desarrollador Web', 'Creador de Animaciones', 'Frontend Junior'],
            about_tag: 'Sobre Mí',
            about_title: 'Conóceme mejor',
            about_subtitle: 'De la industria tradicional al mundo digital, una transición impulsada por la pasión por la tecnología.',
            video_caption: 'Video de perfil de Alejandro Mato Gómez, desarrollador web junior',
            stat_about_aria: 'Estadísticas profesionales',
            stat_years_aria: '28 años',
            stat_techs_aria: '3 tecnologías',
            stat_langs_aria: '2 idiomas',
            stat_commitment_aria: '100 por ciento',
            stat_years_label: 'Años de experiencia',
            stat_techs_label: 'Tecnologías web',
            stat_langs_label: 'Idiomas nativos',
            stat_commitment_label: '% Compromiso',
            about_heading: 'Transformando mi pasión en código',
            about_p1: 'Durante 28 años trabajé en el sector industrial en <strong>TROMOSA</strong>, desarrollando habilidades transferibles como la resolución de problemas, organización, disciplina y trabajo en equipo. Ahora aplico esa misma dedicación al desarrollo web.',
            about_p2: 'Me especializo en crear <strong>páginas web modernas con muchas animaciones</strong>, utilizando <strong>HTML, CSS y JavaScript</strong> y herramientas modernas de diseño web. Cada proyecto es una oportunidad para crear experiencias visuales impactantes y funcionales.',
            about_skills_heading: 'Habilidades técnicas',
            skills_aria: 'Lista de habilidades',
            skill_html: 'HTML5',
            skill_css: 'CSS3',
            skill_js: 'JavaScript',
            skill_anim: 'Animaciones CSS',
            skill_resp: 'Responsive Design',
            skill_ui: 'UI/UX',
            skill_git: 'Git',
            skill_team: 'Trabajo en equipo',
            skill_problems: 'Resolución de problemas',
            skill_detail: 'Atención al detalle',
            exp_tag: 'Experiencia',
            exp_title: 'Mi trayectoria',
            exp_subtitle: 'Una carrera marcada por la constancia y el aprendizaje continuo.',
            timeline_aria: 'Línea de tiempo de experiencia profesional',
            exp_1_date: '2026 - Actualidad',
            exp_1_title: 'Desarrollador Web Junior',
            exp_1_company: 'Formación y proyectos personales',
            exp_1_item_1: 'Desarrollo de páginas web con HTML, CSS y JS',
            exp_1_item_2: 'Animaciones modernas y diseño responsive',
            exp_1_item_3: 'Proyectos personales en crecimiento',
            exp_2_date: 'Oct 1996 - 2025',
            exp_2_title: 'Montaje y Ajuste',
            exp_2_company: 'TROMOSA - Fábrica de Moldes, España',
            exp_2_item_1: 'Ensamblaje y ajuste de moldes con precisión',
            exp_2_item_2: 'Revisión de medidas y control de calidad',
            exp_2_item_3: 'Mantenimiento de procesos y colaboración',
            exp_2_item_4: 'Resolución de problemas y organización',
            projects_tag: 'Proyectos',
            projects_title: 'Mis proyectos',
            projects_subtitle: 'Espacio para mostrar mi trabajo.',
            projects_aria: 'Lista de proyectos',
            project_1_img_alt: 'Imagen de GitHub',
            project_1_media_aria: 'Captura de pantalla del portfolio personal',
            project_1_tags_aria: 'Tecnologías utilizadas',
            project_1_title: 'Mi GitHub',
            project_1_desc: 'Mi GitHub personal con animaciones modernas, diseños responsive y efectos visuales avanzados usando solo HTML, CSS y JS.',
            project_demo_aria: 'Ver demo',
            project_github_aria: 'Ver código fuente en GitHub',
            project_2_media_aria: 'Placeholder para próximo proyecto',
            project_2_tags_aria: 'Tecnologías previstas',
            project_2_placeholder: 'Mi website',
            project_2_title: 'Mi website',
            project_2_desc: 'Este sitio es mi portfolio personal: imita una tienda de flores para mostrar mis trabajos, pero no funciona como e-commerce (no hay ventas ni compras). Está hecho en WordPress y alojado en InfinityFree',
            project_3_media_aria: 'Placeholder para próximo proyecto',
            project_3_tags_aria: 'Tecnologías previstas',
            project_3_placeholder: 'Futuros proyectos',
            project_3_title: 'Futuros Proyectos',
            project_3_desc: 'Futuros projectos.',
            achievements_tag: 'Logros & Aptitudes',
            achievements_title: 'Lo que me define',
            achievements_subtitle: 'Habilidades y logros que me convierten en un profesional comprometido.',
            achievements_aria: 'Logros y aptitudes',
            achievement_1_title: '28 Años de Experiencia',
            achievement_1_desc: 'Más de dos décadas en el sector industrial desarrollando disciplina, organización y trabajo en equipo.',
            achievement_2_title: 'Transición al Desarrollo Web',
            achievement_2_desc: 'Formación reciente en desarrollo web, iniciando una nueva etapa profesional con mucha motivación.',
            achievement_3_title: 'Animaciones Modernas',
            achievement_3_desc: 'Especialización en crear páginas web con animaciones fluidas y efectos visuales impactantes.',
            achievement_4_title: 'Atención al Detalle',
            achievement_4_desc: 'Precisión y cuidado en cada línea de código, heredado de mi experiencia en control de calidad.',
            achievement_5_title: 'Bilingüe Nativo',
            achievement_5_desc: 'Español y Gallego nativos, facilitando la comunicación en entornos multiculturales.',
            achievement_6_title: 'Aprendizaje Rápido',
            achievement_6_desc: 'Capacidad demostrada para adaptarme y dominar nuevas tecnologías en poco tiempo.',
            contact_tag: 'Contacto',
            contact_title: '¿Trabajamos juntos?',
            contact_subtitle: 'Estoy abierto a nuevas oportunidades y proyectos interesantes. ¡Hablemos!',
            footer_text: 'Hecho por Alejandro Mato',
            footer_nocookies: 'Esta web no usa cookies ni recoge datos personales.',
            lang_aria: 'Cambiar idioma'
        },
        en: {
            skip_link: 'Skip to main content',
            nav_aria: 'Main navigation',
            logo_aria: 'Alexx0012 - Home',
            menu_btn_aria: 'Open navigation menu',
            menu_sr: 'Menu',
            nav_inicio: 'Home',
            nav_sobre_mi: 'About Me',
            nav_experiencia: 'Experience',
            nav_proyectos: 'Projects',
            nav_logros: 'Achievements',
            nav_contacto: 'Contact',
            meta_desc: 'Portfolio of Alejandro Mato Gómez - Junior Web Developer specialized in modern animations with HTML, CSS and JavaScript.',
            meta_keywords: 'web developer, frontend, HTML, CSS, JavaScript, animations, portfolio',
            og_title: 'Alejandro Mato Gómez | Web Developer',
            og_desc: 'Junior web developer specialized in modern animations with HTML, CSS and JavaScript.',
            twitter_desc: 'Junior web developer specialized in modern animations.',
            page_title: 'Alejandro Mato | Junior Web Developer',
            hero_badge: 'Available for projects',
            hero_title: 'Hi, I\'m',
            hero_description: 'Enthusiastic junior web developer, specialized in creating modern digital experiences with fluid animations and cutting-edge design. Motivated to learn and grow in the tech sector.',
            hero_btn_proyectos: 'View Projects',
            hero_btn_contacto: 'Contact Me',
            hero_typing_aria: 'Professions: ',
            typing_texts: ['Web Developer', 'Animation Creator', 'Frontend Junior'],
            about_tag: 'About Me',
            about_title: 'Get to know me',
            about_subtitle: 'From traditional industry to the digital world, a transition driven by passion for technology.',
            video_caption: 'Profile video of Alejandro Mato Gómez, junior web developer',
            stat_about_aria: 'Professional statistics',
            stat_years_aria: '28 years',
            stat_techs_aria: '3 technologies',
            stat_langs_aria: '2 languages',
            stat_commitment_aria: '100 percent',
            stat_years_label: 'Years of experience',
            stat_techs_label: 'Web technologies',
            stat_langs_label: 'Native languages',
            stat_commitment_label: '% Commitment',
            about_heading: 'Turning my passion into code',
            about_p1: 'For 28 years I worked in the industrial sector at <strong>TROMOSA</strong>, developing transferable skills like problem-solving, organization, discipline and teamwork. Now I apply that same dedication to web development.',
            about_p2: 'I specialize in creating <strong>modern websites with lots of animations</strong>, using <strong>HTML, CSS and JavaScript</strong> and modern web design tools. Every project is an opportunity to create impactful and functional visual experiences.',
            about_skills_heading: 'Technical Skills',
            skills_aria: 'Skills list',
            skill_html: 'HTML5',
            skill_css: 'CSS3',
            skill_js: 'JavaScript',
            skill_anim: 'CSS Animations',
            skill_resp: 'Responsive Design',
            skill_ui: 'UI/UX',
            skill_git: 'Git',
            skill_team: 'Teamwork',
            skill_problems: 'Problem Solving',
            skill_detail: 'Attention to Detail',
            exp_tag: 'Experience',
            exp_title: 'My journey',
            exp_subtitle: 'A career marked by persistence and continuous learning.',
            timeline_aria: 'Professional experience timeline',
            exp_1_date: '2026 - Present',
            exp_1_title: 'Junior Web Developer',
            exp_1_company: 'Training and personal projects',
            exp_1_item_1: 'Website development with HTML, CSS and JS',
            exp_1_item_2: 'Modern animations and responsive design',
            exp_1_item_3: 'Growing personal projects',
            exp_2_date: 'Oct 1996 - 2025',
            exp_2_title: 'Assembly and Fitting',
            exp_2_company: 'TROMOSA - Mold Factory, Spain',
            exp_2_item_1: 'Precision mold assembly and fitting',
            exp_2_item_2: 'Measurement review and quality control',
            exp_2_item_3: 'Process maintenance and collaboration',
            exp_2_item_4: 'Problem solving and organization',
            projects_tag: 'Projects',
            projects_title: 'My projects',
            projects_subtitle: 'A space to showcase my work.',
            projects_aria: 'Projects list',
            project_1_img_alt: 'GitHub image',
            project_1_media_aria: 'Personal portfolio screenshot',
            project_1_tags_aria: 'Technologies used',
            project_1_title: 'My GitHub',
            project_1_desc: 'My personal GitHub with modern animations, responsive design and advanced visual effects using only HTML, CSS and JS.',
            project_demo_aria: 'View demo',
            project_github_aria: 'View source code on GitHub',
            project_2_media_aria: 'Placeholder for next project',
            project_2_tags_aria: 'Technologies planned',
            project_2_placeholder: 'My website',
            project_2_title: 'My website',
            project_2_desc: 'This website is my personal portfolio: it mimics a flower shop to showcase my work, but it doesn’t work as an e-commerce store (no sales or checkout). It’s built with WordPress and hosted on InfinityFree.',
            project_3_media_aria: 'Placeholder for next project',
            project_3_tags_aria: 'Technologies planned',
            project_3_placeholder: 'Future projects',
            project_3_title: 'Future Projects',
            project_3_desc: 'Future projects.',
            achievements_tag: 'Achievements & Skills',
            achievements_title: 'What defines me',
            achievements_subtitle: 'Skills and achievements that make me a committed professional.',
            achievements_aria: 'Achievements and skills',
            achievement_1_title: '28 Years of Experience',
            achievement_1_desc: 'More than two decades in the industrial sector developing discipline, organization and teamwork.',
            achievement_2_title: 'Transition to Web Development',
            achievement_2_desc: 'Recent training in web development, starting a new professional stage with great motivation.',
            achievement_3_title: 'Modern Animations',
            achievement_3_desc: 'Specialization in creating websites with fluid animations and stunning visual effects.',
            achievement_4_title: 'Attention to Detail',
            achievement_4_desc: 'Precision and care in every line of code, inherited from my experience in quality control.',
            achievement_5_title: 'Native Bilingual',
            achievement_5_desc: 'Native Spanish and Galician, facilitating communication in multicultural environments.',
            achievement_6_title: 'Fast Learner',
            achievement_6_desc: 'Proven ability to adapt and master new technologies in a short time.',
            contact_tag: 'Contact',
            contact_title: 'Shall we work together?',
            contact_subtitle: 'I\'m open to new opportunities and interesting projects. Let\'s talk!',
            footer_text: 'Made by Alejandro Mato',
            footer_nocookies: 'This website does not use cookies or collect personal data.',
            lang_aria: 'Change language'
        }
    };

    // ===== LANGUAGE =====
    let currentLang = 'es';
    let typingTimer = null;
    let typingTypeFn = null;

    // i18n cache (populated once in init)
    let i18nTexts = [];
    let i18nHtmls = [];
    let i18nAttrs = [];
    let langTextEl = null;
    let langOptions = [];
    let metaCache = {};

    function getCurrentLang() {
        return localStorage.getItem('lang') || 'es';
    }

    function cacheI18nElements() {
        i18nTexts = Array.from(document.querySelectorAll('[data-i18n]'), el => ({ el, key: el.dataset.i18n }));
        i18nHtmls = Array.from(document.querySelectorAll('[data-i18n-html]'), el => ({ el, key: el.dataset.i18nHtml }));
        i18nAttrs = Array.from(document.querySelectorAll('[data-i18n-attr]'), el => ({
            el,
            attrs: el.dataset.i18nAttr.split(';').map(pair => {
                const [attr, key] = pair.split(':').map(s => s.trim());
                return { attr, key };
            })
        }));
        langTextEl = document.querySelector('.lang-switcher .lang-text');
        langOptions = Array.from(document.querySelectorAll('.lang-option'));
        metaCache = {
            metaDesc: document.querySelector('meta[name="description"]'),
            metaKeywords: document.querySelector('meta[name="keywords"]'),
            ogTitle: document.querySelector('meta[property="og:title"]'),
            ogDesc: document.querySelector('meta[property="og:description"]'),
            ogLocale: document.querySelector('meta[property="og:locale"]'),
            twitterTitle: document.querySelector('meta[name="twitter:title"]'),
            twitterDesc: document.querySelector('meta[name="twitter:description"]')
        };
    }

    function updateLanguageSelector(lang) {
        for (const option of langOptions) {
            const isActive = option.dataset.lang === lang;
            option.classList.toggle('is-active', isActive);
            option.setAttribute('aria-pressed', String(isActive));
        }

        if (langTextEl) {
            langTextEl.textContent = lang === 'es' ? 'EN' : 'ES';
        }
    }

    function translateTo(lang, restartType) {
        const t = TRANSLATIONS[lang];
        if (!t) return;

        for (const { el, key } of i18nTexts) {
            if (t[key] !== undefined) el.textContent = t[key];
        }
        for (const { el, key } of i18nHtmls) {
            if (t[key] !== undefined) el.innerHTML = t[key];
        }
        for (const { el, attrs } of i18nAttrs) {
            for (const { attr, key } of attrs) {
                if (t[key] !== undefined) el.setAttribute(attr, t[key]);
            }
        }

        const m = metaCache;
        if (m.metaDesc) m.metaDesc.content = t.meta_desc;
        if (m.metaKeywords) m.metaKeywords.content = t.meta_keywords;
        if (m.ogTitle) m.ogTitle.content = t.og_title;
        if (m.ogDesc) m.ogDesc.content = t.og_desc;
        if (m.ogLocale) m.ogLocale.content = lang === 'es' ? 'es_ES' : 'en_US';
        if (m.twitterTitle) m.twitterTitle.content = t.og_title;
        if (m.twitterDesc) m.twitterDesc.content = t.twitter_desc;

        document.title = t.page_title;
        document.documentElement.lang = lang;
        CONFIG.typing.texts = t.typing_texts;

        updateLanguageSelector(lang);

        currentLang = lang;
        localStorage.setItem('lang', lang);

        if (restartType) restartTyping();
    }

    function initLanguageSwitcher() {
        const btn = document.querySelector('.lang-switcher');
        if (!btn) return;
        btn.addEventListener('click', () => {
            translateTo(currentLang === 'es' ? 'en' : 'es', true);
        });
    }

    // ===== HELPERS =====
    const $ = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
    const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

    const DOM = {
        particles: $('#particles'),
        typing: $('#typing'),
        navbar: $('#navbar'),
        navMenu: $('#nav-menu'),
        menuToggle: $('#menu-toggle')
    };

    // ===== PARTICLES =====
    function initParticles() {
        if (!DOM.particles || prefersReducedMotion()) return;

        const frag = document.createDocumentFragment();

        for (let i = 0; i < CONFIG.particles.count; i++) {
            const p = document.createElement('div');
            const size = Math.random() * (CONFIG.particles.maxSize - CONFIG.particles.minSize) + CONFIG.particles.minSize;
            const duration = Math.random() * (CONFIG.particles.maxDuration - CONFIG.particles.minDuration) + CONFIG.particles.minDuration;

            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.animationDuration = duration + 's';
            p.style.animationDelay = Math.random() * duration + 's';

            frag.appendChild(p);
        }

        DOM.particles.appendChild(frag);
    }

    // ===== TYPING =====
    function initTypingEffect() {
        if (!DOM.typing) return;

        if (prefersReducedMotion()) {
            DOM.typing.textContent = CONFIG.typing.texts[0];
            return;
        }

        let i = 0, j = 0, deleting = false;

        const type = () => {
            const text = CONFIG.typing.texts[i];

            DOM.typing.textContent = text.slice(0, j);

            if (!deleting) j++;
            else j--;

            let speed = deleting
                ? CONFIG.typing.deletingSpeed
                : CONFIG.typing.typingSpeed;

            if (!deleting && j > text.length) {
                deleting = true;
                speed = CONFIG.typing.pauseDuration;
            }

            if (deleting && j === 0) {
                deleting = false;
                i = (i + 1) % CONFIG.typing.texts.length;
                speed = CONFIG.typing.pauseBeforeType;
            }

            typingTimer = setTimeout(type, speed);
        };

        typingTypeFn = type;
        typingTimer = setTimeout(type, 500);
    }

    function restartTyping() {
        if (DOM.typing && !prefersReducedMotion()) {
            clearTimeout(typingTimer);
            typingTimer = null;
            typingTypeFn = null;
            setTimeout(initTypingEffect, 100);
        }
    }

    // ===== SCROLL ANIMATIONS (1 OBSERVER SOLO) =====
    function initScrollAnimations() {
        const els = $$('.fade-in');
        if (!els.length) return;

        const obs = new IntersectionObserver(entries => {
            for (const e of entries) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            }
        }, CONFIG.scroll);

        els.forEach(el => obs.observe(el));
    }

    // ===== NAVBAR SCROLL (OPTIMIZADO) =====
    function initNavbarScroll() {
        if (!DOM.navbar) return;

        let last = false;

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 50;

            if (scrolled !== last) {
                DOM.navbar.classList.toggle('scrolled', scrolled);
                last = scrolled;
            }
        }, { passive: true });
    }

    // ===== COUNTERS (SIMPLIFICADO) =====
    function initCounterAnimation() {
        const containers = $$('.about-stats');
        if (!containers.length) return;

        const obs = new IntersectionObserver(entries => {
            for (const e of entries) {
                if (!e.isIntersecting) continue;

                e.target.querySelectorAll('.stat-number').forEach(counter => {
                    const target = +counter.dataset.count;
                    const start = performance.now();

                    const step = (now) => {
                        const p = Math.min((now - start) / CONFIG.counter.duration, 1);
                        counter.textContent = Math.floor(p * target);
                        if (p < 1) requestAnimationFrame(step);
                    };

                    requestAnimationFrame(step);
                });

                obs.unobserve(e.target);
            }
        }, { threshold: 0.5 });

        containers.forEach(c => obs.observe(c));
    }

    // ===== SMOOTH SCROLL =====
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(link => {
            link.addEventListener('click', e => {
                const id = link.getAttribute('href');
                if (!id || id === '#') return;

                const target = $(id);
                if (!target) return;

                e.preventDefault();

                const offset = (DOM.navbar?.offsetHeight || 0) + 20;

                window.scrollTo({
                    top: target.getBoundingClientRect().top + scrollY - offset,
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
                });

                history.replaceState(null, '', id);
            });
        });
    }

    // ===== MOBILE MENU =====
    function initMobileMenu() {
        if (!DOM.menuToggle || !DOM.navMenu) return;

        const close = () => {
            DOM.menuToggle.setAttribute('aria-expanded', 'false');
            DOM.navMenu.classList.remove('active');
            document.body.style.overflow = '';
        };

        DOM.menuToggle.addEventListener('click', () => {
            const open = DOM.navMenu.classList.toggle('active');
            DOM.menuToggle.setAttribute('aria-expanded', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });

        document.addEventListener('click', e => {
            if (!DOM.navMenu.contains(e.target) && !DOM.menuToggle.contains(e.target)) close();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') close();
        });

        // Cerrar menú al hacer click en un enlace
        const navLinks = $$('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', close);
        });
    }

    // ===== ACTIVE SECTION =====
    function initActiveSection() {
        const sections = $$('section[id]');
        const links = $$('.nav-links a');

        if (!sections.length) return;

        const obs = new IntersectionObserver(entries => {
            for (const e of entries) {
                if (!e.isIntersecting) continue;

                const id = e.target.id;

                links.forEach(l =>
                    l.toggleAttribute('aria-current', l.getAttribute('href') === `#${id}`)
                );
            }
        }, { rootMargin: '-50% 0px -50% 0px' });

        sections.forEach(s => obs.observe(s));
    }

    // ===== CURSOR TRAIL OPTIMIZADO =====
    function initCursorTrail() {
        if (prefersReducedMotion() || 'ontouchstart' in window) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        Object.assign(canvas.style, {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999
        });

        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);

        let dpr = window.devicePixelRatio || 1;
        const resize = () => {
            canvas.width = innerWidth * dpr;
            canvas.height = innerHeight * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        };

        resize();
        addEventListener('resize', resize);

        const points = Array.from({ length: 8 }, () => ({ x: 0, y: 0 }));
        let target = { x: 0, y: 0 };
        let lastMove = 0;
        let rafId = null;

        function startLoop() {
            if (rafId) return;
            rafId = requestAnimationFrame(animate);
        }

        function stopLoop() {
            if (!rafId) return;
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        addEventListener('mousemove', e => {
            target.x = e.clientX;
            target.y = e.clientY;
            lastMove = Date.now();
            startLoop();
        });

        function animate() {
            rafId = null;

            if (Date.now() - lastMove > 2000) return;

            ctx.clearRect(0, 0, innerWidth, innerHeight);

            points[0].x += (target.x - points[0].x) * 0.4;
            points[0].y += (target.y - points[0].y) * 0.4;

            for (let i = 1; i < points.length; i++) {
                points[i].x += (points[i - 1].x - points[i].x) * 0.3;
                points[i].y += (points[i - 1].y - points[i].y) * 0.3;
            }

            ctx.strokeStyle = 'rgba(212,212,216,.4)';
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let p of points) ctx.lineTo(p.x, p.y);
            ctx.stroke();

            rafId = requestAnimationFrame(animate);
        }

        startLoop();
    }

    // ===== INIT =====
    function init() {
        cacheI18nElements();
        currentLang = getCurrentLang();
        translateTo(currentLang);

        initParticles();
        initTypingEffect();
        initScrollAnimations();
        initNavbarScroll();
        initCounterAnimation();
        initSmoothScroll();
        initMobileMenu();
        initActiveSection();
        initCursorTrail();
        initLanguageSwitcher();

        document.addEventListener('visibilitychange', () => {
            clearTimeout(typingTimer);
            if (!document.hidden && typingTypeFn) {
                typingTimer = setTimeout(typingTypeFn, 300);
            }
        });

        console.log('Optimized portfolio loaded');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // YEAR
    const y = document.getElementById('year');
    if (y) {
        const year = new Date().getFullYear();
        y.textContent = year;
        y.setAttribute('datetime', year);
    }

})();
