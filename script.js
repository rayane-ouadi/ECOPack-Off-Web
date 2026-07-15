// Simple script to handle smooth scrolling or animations if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('ECOPACK Presentation initialized.');
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.main-nav a, .footer-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
                }
            }
        });
    });

    // Scroll Animations using Intersection Observer
    const animElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-up');
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    animElements.forEach(el => appearOnScroll.observe(el));

    // ─── Translation Dictionary ───────────────────────────────────────────────
    const translations = {
        en: {
            // Nav & Global
            nav_home: "Home",
            nav_about: "About",
            nav_versions: "Versions",
            nav_contact: "Contact",
            btn_try_beta: "Try BETA",
            btn_explore: "Explore",
            btn_launch: "Launch ECOPACK",

            // Index page
            hero_title: "Simply.. Manage",
            about_title: "<i>What is</i><br><i>ECOPACK?</i>",
            about_p1: "The \"Eco Pack\" app isn't just a business management tool; it's the primary driving force behind your project's growth and its journey toward professionalism. We have developed a simple, intuitive user interface that allows you to smartly manage your product inventory and track your customers' orders in real-time, completely clutter-free.",
            about_p2: "Most importantly, the app provides you with deep insights into your business developments and profit indicators, keeping you constantly aware of where your business is heading.",
            about_p3: "\"Eco Pack\" is your gateway to reducing effort, saving time, and taking your small business to new heights of success!",
            feature_1: "Great For Businesses",
            feature_2: "Simple and Helpful<br>For Startup",

            // About page
            page_about_h1: "<i>About</i><br><i>ECOPack</i>",
            page_about_desc: "ECOPack is a streamlined Business Management App (BMA) designed to take the complexity out of running your company. With a beautifully clean, distraction-free interface, ECOPack lets you track every vital metric of your business on a single, intuitive dashboard.<br>No clutter, no steep learning curves—just the clear, high-level insights you need as a founder to foster sustainable, organized growth.",
            page_about_data_h: "<i>Your Data</i>",
            page_about_data_desc: "<strong>Your Data. Your Control. Zero Clouds to trust.</strong><br>ECOPack uses a beautifully simple, server-free system designed to keep your data entirely in your hands. No accounts to create, no servers to trust.<br>Everything is stored locally on your device—or any external storage you choose, like a USB drive or SSD. Saved in JSON, a universally readable format, your data remains fully accessible to you anytime, anywhere.",
            page_about_biz_h: "<i>for </i><span class=\"large-letter\">L</span><i>Businesses</i>",
            page_about_biz_desc: "For larger organizations, ECOPack offers fully customizable enterprise versions. We work closely with your team to tailor the system to your specific workflow—allowing you to add the exact features you need and streamline the ones you don't.<br>To discuss how ECOPack can fit your organization, get in touch with us today via phone or email.",
            btn_contact_ecopack: "Contact ECOPACK",

            // Versions page
            page_versions_h: "<i>Versions</i>",
            version_09b_name: "<i>0.9b</i>",
            version_09b_desc: "The first Version, A Demo you can use for basic tasks",

            // Contact page
            page_contact_credit: "ECOPack is proudly developed by @rayaneouadi<br>In the name of DZFlow — Toward a Digital Algeria.",
            contact_email_h: "<i>Email</i>",
            contact_phone_h: "<i>Phone Num</i>",
            contact_social_h: "<i>Social Media</i>",
            contact_social_sub: "For the vibe and the News Follow us on",
            contact_copyright: "© 2026 @rayaneouadi / DZFlow. All rights reserved.",
            contact_thanks: "Alhamdulilah (Thanks to GOD)"
        },

        fr: {
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_versions: "Versions",
            nav_contact: "Contact",
            btn_try_beta: "Essayer BETA",
            btn_explore: "Explorer",
            btn_launch: "Lancer ECOPACK",

            hero_title: "Simplement.. Gérez",
            about_title: "<i>Qu'est-ce que</i><br><i>ECOPACK?</i>",
            about_p1: "L'application \"Eco Pack\" n'est pas seulement un outil de gestion d'entreprise ; c'est la force motrice de la croissance de votre projet. Nous avons développé une interface simple et intuitive pour gérer votre inventaire et suivre les commandes en temps réel, sans encombrement.",
            about_p2: "Plus important encore, l'application vous fournit des informations approfondies sur le développement de votre entreprise et les indicateurs de profit, vous gardant constamment conscient de la direction de votre entreprise.",
            about_p3: "\"Eco Pack\" est votre passerelle pour réduire les efforts, gagner du temps et porter votre petite entreprise vers de nouveaux sommets de succès !",
            feature_1: "Idéal pour les entreprises",
            feature_2: "Simple et utile<br>pour les startups",

            page_about_h1: "<i>À propos</i><br><i>d'ECOPack</i>",
            page_about_desc: "ECOPack est une application de gestion d'entreprise (BMA) conçue pour simplifier la gestion de votre société. Avec une interface propre et sans distraction, ECOPack vous permet de suivre chaque indicateur vital de votre entreprise sur un tableau de bord unique et intuitif.<br>Pas de confusion, pas de courbe d'apprentissage—juste les informations claires dont vous avez besoin en tant que fondateur.",
            page_about_data_h: "<i>Vos Données</i>",
            page_about_data_desc: "<strong>Vos données. Votre contrôle. Zéro cloud à faire confiance.</strong><br>ECOPack utilise un système simple et sans serveur conçu pour garder vos données entièrement entre vos mains. Pas de comptes à créer, pas de serveurs à faire confiance.<br>Tout est stocké localement sur votre appareil ou tout stockage externe de votre choix. Sauvegardé en JSON, vos données restent accessibles à tout moment.",
            page_about_biz_h: "<i>pour les </i><span class=\"large-letter\">G</span><i>randes Entreprises</i>",
            page_about_biz_desc: "Pour les grandes organisations, ECOPack propose des versions entièrement personnalisables. Nous travaillons en étroite collaboration avec votre équipe pour adapter le système à votre flux de travail spécifique.<br>Pour discuter de la manière dont ECOPack peut s'intégrer à votre organisation, contactez-nous dès aujourd'hui.",
            btn_contact_ecopack: "Contacter ECOPACK",

            page_versions_h: "<i>Versions</i>",
            version_09b_name: "<i>0.9b</i>",
            version_09b_desc: "La première version, une démo que vous pouvez utiliser pour les tâches de base",

            page_contact_credit: "ECOPack est développé par @rayaneouadi<br>Au nom de DZFlow — Vers une Algérie Numérique.",
            contact_email_h: "<i>Email</i>",
            contact_phone_h: "<i>Numéro de Téléphone</i>",
            contact_social_h: "<i>Réseaux Sociaux</i>",
            contact_social_sub: "Pour l'ambiance et les actualités, suivez-nous sur",
            contact_copyright: "© 2026 @rayaneouadi / DZFlow. Tous droits réservés.",
            contact_thanks: "Alhamdulilah (Merci à DIEU)"
        },

        es: {
            nav_home: "Inicio",
            nav_about: "Acerca de",
            nav_versions: "Versiones",
            nav_contact: "Contacto",
            btn_try_beta: "Probar BETA",
            btn_explore: "Explorar",
            btn_launch: "Iniciar ECOPACK",

            hero_title: "Simplemente.. Gestiona",
            about_title: "<i>¿Qué es</i><br><i>ECOPACK?</i>",
            about_p1: "La aplicación \"Eco Pack\" no es solo una herramienta de gestión empresarial; es la principal fuerza impulsora del crecimiento de su proyecto. Hemos desarrollado una interfaz simple e intuitiva para gestionar su inventario y rastrear pedidos en tiempo real, sin desorden.",
            about_p2: "Lo más importante, la aplicación le proporciona información profunda sobre el desarrollo de su negocio e indicadores de ganancias, manteniéndolo constantemente al tanto de hacia dónde se dirige su negocio.",
            about_p3: "\"Eco Pack\" es su puerta de entrada para reducir el esfuerzo, ahorrar tiempo y llevar su pequeña empresa a nuevas alturas de éxito.",
            feature_1: "Genial para empresas",
            feature_2: "Simple y útil<br>para startups",

            page_about_h1: "<i>Acerca de</i><br><i>ECOPack</i>",
            page_about_desc: "ECOPack es una aplicación de gestión empresarial (BMA) diseñada para simplificar la administración de su empresa. Con una interfaz limpia y sin distracciones, ECOPack le permite rastrear cada métrica vital de su negocio en un solo tablero intuitivo.<br>Sin desorden, sin curvas de aprendizaje—solo los datos claros que necesita como fundador.",
            page_about_data_h: "<i>Sus Datos</i>",
            page_about_data_desc: "<strong>Sus datos. Su control. Cero nubes de confianza.</strong><br>ECOPack utiliza un sistema simple y sin servidor diseñado para mantener sus datos completamente en sus manos. Sin cuentas que crear, sin servidores de confianza.<br>Todo se almacena localmente en su dispositivo o en cualquier almacenamiento externo. Guardado en JSON, sus datos permanecen accesibles en todo momento.",
            page_about_biz_h: "<i>para </i><span class=\"large-letter\">G</span><i>randes Empresas</i>",
            page_about_biz_desc: "Para organizaciones más grandes, ECOPack ofrece versiones completamente personalizables. Trabajamos estrechamente con su equipo para adaptar el sistema a su flujo de trabajo específico.<br>Para hablar sobre cómo ECOPack puede adaptarse a su organización, contáctenos hoy.",
            btn_contact_ecopack: "Contactar ECOPACK",

            page_versions_h: "<i>Versiones</i>",
            version_09b_name: "<i>0.9b</i>",
            version_09b_desc: "La primera versión, una demo que puede usar para tareas básicas",

            page_contact_credit: "ECOPack fue desarrollado por @rayaneouadi<br>En nombre de DZFlow — Hacia una Argelia Digital.",
            contact_email_h: "<i>Correo Electrónico</i>",
            contact_phone_h: "<i>Número de Teléfono</i>",
            contact_social_h: "<i>Redes Sociales</i>",
            contact_social_sub: "Para el ambiente y las noticias, síguenos en",
            contact_copyright: "© 2026 @rayaneouadi / DZFlow. Todos los derechos reservados.",
            contact_thanks: "Alhamdulilah (Gracias a DIOS)"
        },

        ar: {
            nav_home: "الرئيسية",
            nav_about: "حول",
            nav_versions: "الإصدارات",
            nav_contact: "اتصل بنا",
            btn_try_beta: "النسخة التجريبية",
            btn_explore: "استكشف",
            btn_launch: "أطلق إيكوباك",

            hero_title: "ببساطة..تحكم في مشروعك",
            about_title: "<i>ما هو</i><br><i>إيكوباك؟</i>",
            about_p1: "تطبيق \"إيكو باك\" ليس مجرد أداة لإدارة الأعمال؛ بل هو القوة الدافعة الأساسية وراء نمو مشروعك. لقد قمنا بتطوير واجهة مستخدم بسيطة وبديهية تتيح لك إدارة مخزون منتجاتك بذكاء وتتبع طلبات عملائك في الوقت الفعلي، بدون أي فوضى.",
            about_p2: "والأهم من ذلك، يزودك التطبيق برؤى عميقة حول تطورات أعمالك ومؤشرات الأرباح، مما يجعلك على دراية دائمة بالاتجاه الذي يتجه إليه عملك.",
            about_p3: "\"إيكو باك\" هو بوابتك لتقليل الجهد وتوفير الوقت وأخذ عملك الصغير إلى آفاق جديدة من النجاح!",
            feature_1: "مناسب للشركات",
            feature_2: "بسيط ومفيد<br>للشركات الناشئة",

            page_about_h1: "<i>حول</i><br><i>إيكوباك</i>",
            page_about_desc: "إيكوباك هو تطبيق إدارة أعمال (BMA) مصمم لتبسيط إدارة شركتك. بواجهة نظيفة وخالية من التشتيت، يتيح لك إيكوباك تتبع كل مقياس حيوي لعملك على لوحة تحكم واحدة وبديهية.<br>لا فوضى، لا منحنيات تعلم—فقط المعلومات الواضحة التي تحتاجها كمؤسس.",
            page_about_data_h: "<i>بياناتك</i>",
            page_about_data_desc: "<strong>بياناتك. تحكمك. صفر سحابة للثقة.</strong><br>يستخدم إيكوباك نظامًا بسيطًا وخاليًا من الخوادم مصممًا للحفاظ على بياناتك بالكامل في يديك. لا حسابات للإنشاء، لا خوادم للثقة.<br>كل شيء يُخزَّن محليًا على جهازك أو أي وحدة تخزين خارجية تختارها. يُحفظ بتنسيق JSON، وتظل بياناتك متاحة لك في أي وقت وأي مكان.",
            page_about_biz_h: "<i>للشركات </i><span class=\"large-letter\">الك</span><i>برى</i>",
            page_about_biz_desc: "للمنظمات الأكبر، يقدم إيكوباك إصدارات مؤسسية قابلة للتخصيص بالكامل. نعمل عن كثب مع فريقك لتخصيص النظام وفق سير عملك المحدد.<br>للحديث عن كيفية ملاءمة إيكوباك لمنظمتك، تواصل معنا اليوم عبر الهاتف أو البريد الإلكتروني.",
            btn_contact_ecopack: "تواصل مع إيكوباك",

            page_versions_h: "<i>الإصدارات</i>",
            version_09b_name: "<i>0.9b</i>",
            version_09b_desc: "الإصدار الأول، نسخة تجريبية يمكنك استخدامها للمهام الأساسية",

            page_contact_credit: "تم تطوير إيكوباك بفخر بواسطة @rayaneouadi<br>باسم DZFlow — نحو الجزائر الرقمية.",
            contact_email_h: "<i>البريد الإلكتروني</i>",
            contact_phone_h: "<i>رقم الهاتف</i>",
            contact_social_h: "<i>وسائل التواصل الاجتماعي</i>",
            contact_social_sub: "للمتابعة والأخبار تابعونا على",
            contact_copyright: "© 2026 @rayaneouadi / DZFlow. جميع الحقوق محفوظة.",
            contact_thanks: "الحمد لله"
        }
    };

    // ─── Language Switching Logic ─────────────────────────────────────────────
    const langSelect = document.getElementById('lang-select');

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    function setLanguage(lang) {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('preferredLang', lang);
    }

    // Restore saved language preference on page load
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        if (langSelect) langSelect.value = savedLang;
        setLanguage(savedLang);
    }
});
