/* ═══════════════════════════════════════════════
   NEXARO — Main Script
   · Stars canvas · i18n · Navbar · FAQ · Form · AOS
═══════════════════════════════════════════════ */

/* ══════════════ TRANSLATIONS ══════════════ */
const i18n = {
  es: {
    "nav.services": "Servicios",
    "nav.portfolio": "Portfolio",
    "nav.why": "Por qué Nexaro",
    "nav.faq": "FAQ",
    "nav.contact": "Contactar",
    "hero.badge": "Agencia de Inteligencia Artificial",
    "hero.title1": "Automatiza tu negocio.",
    "hero.title2": "Escala con IA.",
    "hero.sub": "Transformamos pequeñas empresas y autónomos con automatizaciones inteligentes, páginas web de alto impacto y apps a medida.",
    "hero.cta1": "Solicitar propuesta",
    "hero.cta2": "Ver proyectos",
    "hero.stat1": "ahorradas/semana",
    "hero.stat2": "proyectos activos",
    "hero.stat3": "propuesta lista",
    "services.tag": "Lo que hacemos",
    "services.title": "Soluciones que impulsan tu negocio",
    "services.sub": "Combinamos IA de última generación con diseño profesional para darte ventaja competitiva real.",
    "s1.title": "Automatizaciones IA",
    "s1.desc": "Agentes de voz, chatbots, gestión de citas y flujos automáticos que trabajan 24/7 por ti. Elimina tareas repetitivas y céntrate en crecer.",
    "s1.f1": "Agentes de voz con IA",
    "s1.f2": "Gestión de citas por WhatsApp",
    "s1.f3": "Integración con CRM y calendarios",
    "s1.f4": "Flujos n8n / Make / Zapier",
    "s1.cta": "Quiero automatizar →",
    "s2.badge": "Más solicitado",
    "s2.title": "Páginas Web",
    "s2.desc": "Webs profesionales, rápidas y optimizadas para convertir visitantes en clientes. Diseño moderno con SEO y analítica incluidos.",
    "s2.f1": "Diseño a medida",
    "s2.f2": "SEO técnico incluido",
    "s2.f3": "Multiidioma",
    "s2.f4": "Gestión de contenido simple",
    "s2.cta": "Quiero mi web →",
    "s3.title": "Apps a Medida",
    "s3.desc": "Aplicaciones móviles y web personalizadas para tu sector. Desde copilots médicos hasta gestión de operaciones logísticas.",
    "s3.f1": "Apps iOS & Android",
    "s3.f2": "Panel de control personalizado",
    "s3.f3": "IA integrada",
    "s3.f4": "Soporte y mantenimiento",
    "s3.cta": "Quiero mi app →",
    "p5.cat": "Web + IA · Chatbot",
    "p5.title": "Web con Chatbot Inteligente",
    "p5.desc": "Páginas web profesionales con un chatbot IA entrenado con toda la información de tu negocio: productos, precios, horarios, FAQs y más. Atiende a tus clientes al instante, 24/7, sin coste de personal. El bot aprende de tus documentos y responde como un experto de tu empresa.",
    "portfolio.tag": "Proyectos reales",
    "portfolio.title": "Lo que ya hemos construido",
    "portfolio.sub": "Cada proyecto resuelve un problema real. Aquí están los cinco en los que estamos trabajando.",
    "p1.cat": "App · IA Médica",
    "p1.title": "Copilot Médico",
    "p1.desc": "Asistente IA para profesionales de la salud. Sugiere diagnósticos diferenciales, resume historiales y genera informes automáticos en tiempo real.",
    "p2.cat": "App · Logística",
    "p2.title": "Gestión de Repartos",
    "p2.desc": "App móvil para empresas de reparto. Optimiza rutas, asigna pedidos automáticamente y ofrece tracking en tiempo real para clientes.",
    "p3.cat": "Automatización · WhatsApp",
    "p3.title": "Gestor de Citas IA",
    "p3.desc": "Bot inteligente que gestiona reservas 24/7 por WhatsApp. Confirma, recuerda y reagenda citas sin intervención humana. Integrado con Google Calendar.",
    "p4.cat": "Automatización · Voz IA",
    "p4.title": "Agente de Atención por Voz",
    "p4.desc": "Agente telefónico con IA que atiende llamadas, responde preguntas frecuentes, toma datos y escala al humano solo cuando es necesario. Disponible 24/7 sin coste de personal.",
    "why.tag": "Nuestra diferencia",
    "why.title": "¿Por qué elegir NEXARO?",
    "w1.title": "IA real, no promesas",
    "w1.desc": "Implementamos modelos de lenguaje y automatizaciones que ya funcionan en producción, no demos de laboratorio.",
    "w2.title": "Tamaño justo",
    "w2.desc": "Trabajamos con pymes y autónomos. Entendemos tus limitaciones de presupuesto y tiempo, y lo reflejamos en soluciones simples y efectivas.",
    "w3.title": "Entrega rápida",
    "w3.desc": "De la primera llamada a la primera versión en producción en menos de 4 semanas. Sin burocracia, sin sorpresas.",
    "w4.title": "Soporte continuo",
    "w4.desc": "No desaparecemos tras la entrega. Monitorizamos, mejoramos y ampliamos tus herramientas conforme crece tu negocio.",
    "test.tag": "Clientes",
    "test.title": "Lo que dicen quienes ya automatizaron",
    "t1.text": '"El agente de citas por WhatsApp nos ahorró contratar a una recepcionista. Gestiona todo solo y nunca falla. En dos semanas ya amortizamos la inversión."',
    "t1.name": "Carlos M.",
    "t1.role": "Clínica Dental · Madrid",
    "t2.text": '"Nexaro nos entregó la app de repartos antes de lo prometido. El panel de control es exactamente lo que necesitábamos. Muy profesionales."',
    "t2.name": "Laura R.",
    "t2.role": "Empresa de Logística · Barcelona",
    "t3.text": '"El agente de voz atiende el 80% de mis llamadas solo. Mis clientes no notan la diferencia y yo puedo enfocarme en lo que realmente importa."',
    "t3.name": "Alejandro P.",
    "t3.role": "Asesoría Fiscal · Valencia",
    "faq.tag": "Preguntas frecuentes",
    "faq.title": "Todo lo que necesitas saber",
    "faq.q1": "¿Cuánto cuesta un proyecto típico?",
    "faq.a1": "Depende del alcance. Una automatización básica parte de 500€. Una web profesional desde 800€. Las apps a medida desde 2.500€. Siempre hacemos una propuesta personalizada sin compromiso.",
    "faq.q2": "¿Cuánto tiempo tarda en estar listo?",
    "faq.a2": "Las automatizaciones: 1-2 semanas. Webs: 2-3 semanas. Apps: 4-8 semanas según complejidad. Trabajamos con entregas incrementales para que veas resultados rápido.",
    "faq.q3": "¿Necesito conocimientos técnicos para usar lo que construís?",
    "faq.a3": "No. Diseñamos todo para que lo puedas usar sin formación técnica. Además, incluimos sesión de onboarding y documentación en vídeo.",
    "faq.q4": "¿Ofrecéis mantenimiento después de la entrega?",
    "faq.a4": "Sí. Tenemos planes de mantenimiento mensual desde 99€/mes que incluyen actualizaciones, monitorización y soporte prioritario.",
    "faq.q5": "¿Trabajáis con empresas fuera de España?",
    "faq.a5": "Por supuesto. Trabajamos 100% en remoto y tenemos clientes en España, Alemania y Latinoamérica. Nuestra web y servicios están disponibles en español, inglés y alemán.",
    "contact.tag": "Hablemos",
    "contact.title": "¿Listo para automatizar tu negocio?",
    "contact.sub": "Cuéntanos tu proyecto. En menos de 24h tendrás una propuesta personalizada sin compromiso.",
    "contact.f1": "Consulta inicial gratuita",
    "contact.f2": "Propuesta en 24h",
    "contact.f3": "Sin permanencia",
    "form.name": "Nombre",
    "form.namePH": "Tu nombre",
    "form.email": "Email",
    "form.service": "Servicio de interés",
    "form.select": "Selecciona un servicio",
    "form.opt1": "Automatización IA",
    "form.opt2": "Página Web",
    "form.opt3": "App a Medida",
    "form.opt4": "Varios servicios",
    "form.msg": "Cuéntanos tu proyecto",
    "form.msgPH": "Describe brevemente qué necesitas...",
    "form.send": "Enviar mensaje",
    "form.legal": "Al enviar aceptas nuestra política de privacidad. No spam, nunca.",
    "form.success": "¡Mensaje enviado! Te contactamos en menos de 24h.",
    "footer.tagline": "Automatizamos el presente para que construyas el futuro.",
    "footer.services": "Servicios",
    "footer.s1": "Automatizaciones IA",
    "footer.s2": "Páginas Web",
    "footer.s3": "Apps a Medida",
    "footer.company": "Empresa",
    "footer.portfolio": "Portfolio",
    "footer.faq": "FAQ",
    "footer.contact": "Contacto",
    "footer.contactTitle": "Contacto",
    "footer.copy": "© 2025 NEXARO. Todos los derechos reservados.",
  },

  en: {
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.why": "Why Nexaro",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "hero.badge": "Artificial Intelligence Agency",
    "hero.title1": "Automate your business.",
    "hero.title2": "Scale with AI.",
    "hero.sub": "We transform small businesses and freelancers with intelligent automations, high-impact websites and custom apps.",
    "hero.cta1": "Request a proposal",
    "hero.cta2": "View projects",
    "hero.stat1": "hours saved/week",
    "hero.stat2": "active projects",
    "hero.stat3": "proposal ready",
    "services.tag": "What we do",
    "services.title": "Solutions that drive your business",
    "services.sub": "We combine cutting-edge AI with professional design to give you a real competitive edge.",
    "s1.title": "AI Automations",
    "s1.desc": "Voice agents, chatbots, appointment management and automated flows working 24/7 for you. Eliminate repetitive tasks and focus on growing.",
    "s1.f1": "AI voice agents",
    "s1.f2": "WhatsApp appointment management",
    "s1.f3": "CRM & calendar integration",
    "s1.f4": "n8n / Make / Zapier flows",
    "s1.cta": "I want to automate →",
    "s2.badge": "Most requested",
    "s2.title": "Websites",
    "s2.desc": "Professional, fast websites optimised to convert visitors into clients. Modern design with SEO and analytics included.",
    "s2.f1": "Custom design",
    "s2.f2": "Technical SEO included",
    "s2.f3": "Multilingual",
    "s2.f4": "Simple content management",
    "s2.cta": "I want my website →",
    "s3.title": "Custom Apps",
    "s3.desc": "Personalised mobile and web applications for your sector. From medical copilots to logistics operations management.",
    "s3.f1": "iOS & Android apps",
    "s3.f2": "Custom dashboard",
    "s3.f3": "Integrated AI",
    "s3.f4": "Support & maintenance",
    "s3.cta": "I want my app →",
    "p5.cat": "Web + AI · Chatbot",
    "p5.title": "Website with Intelligent Chatbot",
    "p5.desc": "Professional websites with an AI chatbot trained on all your business information: products, prices, schedules, FAQs and more. Answers your customers instantly, 24/7, with no staffing cost. The bot learns from your documents and responds like an expert from your company.",
    "portfolio.tag": "Real projects",
    "portfolio.title": "What we have already built",
    "portfolio.sub": "Each project solves a real problem. Here are the five we are currently working on.",
    "p1.cat": "App · Medical AI",
    "p1.title": "Medical Copilot",
    "p1.desc": "AI assistant for healthcare professionals. Suggests differential diagnoses, summarises patient histories and auto-generates reports in real time.",
    "p2.cat": "App · Logistics",
    "p2.title": "Delivery Management",
    "p2.desc": "Mobile app for delivery companies. Optimises routes, automatically assigns orders and provides real-time tracking for customers.",
    "p3.cat": "Automation · WhatsApp",
    "p3.title": "AI Appointment Manager",
    "p3.desc": "Intelligent bot that manages bookings 24/7 via WhatsApp. Confirms, reminds and reschedules appointments with no human intervention. Google Calendar integrated.",
    "p4.cat": "Automation · Voice AI",
    "p4.title": "Voice Customer Service Agent",
    "p4.desc": "AI phone agent that handles calls, answers FAQs, collects data and escalates to a human only when necessary. Available 24/7 with no staffing cost.",
    "why.tag": "Our difference",
    "why.title": "Why choose NEXARO?",
    "w1.title": "Real AI, not promises",
    "w1.desc": "We implement language models and automations that are already running in production — not lab demos.",
    "w2.title": "Right-sized",
    "w2.desc": "We work with SMEs and freelancers. We understand your budget and time constraints, reflected in simple and effective solutions.",
    "w3.title": "Fast delivery",
    "w3.desc": "From the first call to the first production version in under 4 weeks. No bureaucracy, no surprises.",
    "w4.title": "Ongoing support",
    "w4.desc": "We don't disappear after delivery. We monitor, improve and expand your tools as your business grows.",
    "test.tag": "Clients",
    "test.title": "What those who already automated say",
    "t1.text": '"The WhatsApp appointment agent saved us from hiring a receptionist. It handles everything on its own and never fails. In two weeks we recovered the investment."',
    "t1.name": "Carlos M.",
    "t1.role": "Dental Clinic · Madrid",
    "t2.text": '"Nexaro delivered the delivery app ahead of schedule. The dashboard is exactly what we needed. Very professional."',
    "t2.name": "Laura R.",
    "t2.role": "Logistics Company · Barcelona",
    "t3.text": '"The voice agent handles 80% of my calls on its own. My clients can\'t tell the difference and I can focus on what really matters."',
    "t3.name": "Alejandro P.",
    "t3.role": "Tax Consultancy · Valencia",
    "faq.tag": "Frequently asked questions",
    "faq.title": "Everything you need to know",
    "faq.q1": "How much does a typical project cost?",
    "faq.a1": "It depends on scope. A basic automation starts at €500. A professional website from €800. Custom apps from €2,500. We always provide a personalised proposal with no obligation.",
    "faq.q2": "How long does it take?",
    "faq.a2": "Automations: 1-2 weeks. Websites: 2-3 weeks. Apps: 4-8 weeks depending on complexity. We work with incremental deliveries so you see results quickly.",
    "faq.q3": "Do I need technical knowledge to use what you build?",
    "faq.a3": "No. We design everything so you can use it without technical training. We also include an onboarding session and video documentation.",
    "faq.q4": "Do you offer maintenance after delivery?",
    "faq.a4": "Yes. We have monthly maintenance plans from €99/month including updates, monitoring and priority support.",
    "faq.q5": "Do you work with companies outside Spain?",
    "faq.a5": "Of course. We work 100% remotely and have clients in Spain, Germany and Latin America. Our website and services are available in Spanish, English and German.",
    "contact.tag": "Let's talk",
    "contact.title": "Ready to automate your business?",
    "contact.sub": "Tell us about your project. You'll have a personalised proposal in less than 24 hours, with no obligation.",
    "contact.f1": "Free initial consultation",
    "contact.f2": "Proposal in 24h",
    "contact.f3": "No lock-in",
    "form.name": "Name",
    "form.namePH": "Your name",
    "form.email": "Email",
    "form.service": "Service of interest",
    "form.select": "Select a service",
    "form.opt1": "AI Automation",
    "form.opt2": "Website",
    "form.opt3": "Custom App",
    "form.opt4": "Multiple services",
    "form.msg": "Tell us about your project",
    "form.msgPH": "Briefly describe what you need...",
    "form.send": "Send message",
    "form.legal": "By submitting you accept our privacy policy. No spam, ever.",
    "form.success": "Message sent! We'll contact you within 24h.",
    "footer.tagline": "We automate the present so you can build the future.",
    "footer.services": "Services",
    "footer.s1": "AI Automations",
    "footer.s2": "Websites",
    "footer.s3": "Custom Apps",
    "footer.company": "Company",
    "footer.portfolio": "Portfolio",
    "footer.faq": "FAQ",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.copy": "© 2025 NEXARO. All rights reserved.",
  },

  de: {
    "nav.services": "Leistungen",
    "nav.portfolio": "Portfolio",
    "nav.why": "Warum Nexaro",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "hero.badge": "KI-Agentur",
    "hero.title1": "Automatisiere dein Geschäft.",
    "hero.title2": "Wachse mit KI.",
    "hero.sub": "Wir transformieren kleine Unternehmen und Selbstständige mit intelligenten Automatisierungen, wirkungsvollen Webseiten und maßgeschneiderten Apps.",
    "hero.cta1": "Angebot anfragen",
    "hero.cta2": "Projekte ansehen",
    "hero.stat1": "Stunden/Woche gespart",
    "hero.stat2": "aktive Projekte",
    "hero.stat3": "Angebot bereit",
    "services.tag": "Was wir tun",
    "services.title": "Lösungen, die dein Unternehmen voranbringen",
    "services.sub": "Wir kombinieren modernste KI mit professionellem Design, um dir einen echten Wettbewerbsvorteil zu verschaffen.",
    "s1.title": "KI-Automatisierungen",
    "s1.desc": "Sprachagenten, Chatbots, Terminverwaltung und automatisierte Abläufe, die rund um die Uhr für dich arbeiten. Wiederkehrende Aufgaben eliminieren, Wachstum fokussieren.",
    "s1.f1": "KI-Sprachagenten",
    "s1.f2": "WhatsApp-Terminverwaltung",
    "s1.f3": "CRM- & Kalenderintegration",
    "s1.f4": "n8n / Make / Zapier Flows",
    "s1.cta": "Ich will automatisieren →",
    "s2.badge": "Am beliebtesten",
    "s2.title": "Webseiten",
    "s2.desc": "Professionelle, schnelle Webseiten, optimiert für die Umwandlung von Besuchern in Kunden. Modernes Design mit SEO und Analyse inklusive.",
    "s2.f1": "Maßgeschneidertes Design",
    "s2.f2": "Technisches SEO inklusive",
    "s2.f3": "Mehrsprachig",
    "s2.f4": "Einfache Inhaltsverwaltung",
    "s2.cta": "Ich will meine Webseite →",
    "s3.title": "Maßgeschneiderte Apps",
    "s3.desc": "Personalisierte mobile und Web-Anwendungen für deine Branche. Von medizinischen Copiloten bis zum Logistikmanagement.",
    "s3.f1": "iOS & Android Apps",
    "s3.f2": "Individuelles Dashboard",
    "s3.f3": "Integrierte KI",
    "s3.f4": "Support & Wartung",
    "s3.cta": "Ich will meine App →",
    "p5.cat": "Web + KI · Chatbot",
    "p5.title": "Website mit intelligentem Chatbot",
    "p5.desc": "Professionelle Webseiten mit einem KI-Chatbot, der mit allen Informationen deines Unternehmens trainiert wurde: Produkte, Preise, Öffnungszeiten, FAQs und mehr. Beantwortet Kundenanfragen sofort, 24/7, ohne Personalkosten. Der Bot lernt aus deinen Dokumenten und antwortet wie ein Experte deines Unternehmens.",
    "portfolio.tag": "Echte Projekte",
    "portfolio.title": "Was wir bereits gebaut haben",
    "portfolio.sub": "Jedes Projekt löst ein echtes Problem. Hier sind die fünf, an denen wir gerade arbeiten.",
    "p1.cat": "App · Medizinische KI",
    "p1.title": "Medizinischer Copilot",
    "p1.desc": "KI-Assistent für Mediziner. Schlägt Differenzialdiagnosen vor, fasst Patientenakten zusammen und erstellt automatisch Berichte in Echtzeit.",
    "p2.cat": "App · Logistik",
    "p2.title": "Lieferverwaltung",
    "p2.desc": "Mobile App für Lieferunternehmen. Optimiert Routen, weist Bestellungen automatisch zu und bietet Echtzeit-Tracking für Kunden.",
    "p3.cat": "Automatisierung · WhatsApp",
    "p3.title": "KI-Terminmanager",
    "p3.desc": "Intelligenter Bot, der rund um die Uhr Buchungen per WhatsApp verwaltet. Bestätigt, erinnert und verschiebt Termine ohne menschliches Eingreifen.",
    "p4.cat": "Automatisierung · Sprach-KI",
    "p4.title": "Sprach-Kundenserviceagent",
    "p4.desc": "KI-Telefonagent, der Anrufe entgegennimmt, häufige Fragen beantwortet, Daten erfasst und nur bei Bedarf an einen Menschen weitergibt. 24/7 verfügbar, ohne Personalkosten.",
    "why.tag": "Unser Unterschied",
    "why.title": "Warum NEXARO wählen?",
    "w1.title": "Echte KI, keine Versprechen",
    "w1.desc": "Wir implementieren Sprachmodelle und Automatisierungen, die bereits im Produktivbetrieb laufen – keine Labordemos.",
    "w2.title": "Passende Größe",
    "w2.desc": "Wir arbeiten mit KMU und Selbstständigen. Wir verstehen deine Budget- und Zeitbeschränkungen und spiegeln dies in einfachen, effektiven Lösungen wider.",
    "w3.title": "Schnelle Lieferung",
    "w3.desc": "Vom ersten Gespräch bis zur ersten Produktionsversion in unter 4 Wochen. Keine Bürokratie, keine Überraschungen.",
    "w4.title": "Kontinuierlicher Support",
    "w4.desc": "Wir verschwinden nicht nach der Lieferung. Wir überwachen, verbessern und erweitern deine Tools, während dein Unternehmen wächst.",
    "test.tag": "Kunden",
    "test.title": "Was diejenigen sagen, die bereits automatisiert haben",
    "t1.text": '"Der WhatsApp-Terminagent hat uns die Einstellung einer Rezeptionistin erspart. Er verwaltet alles selbst und versagt nie. Nach zwei Wochen hatten wir die Investition wieder drin."',
    "t1.name": "Carlos M.",
    "t1.role": "Zahnklinik · Madrid",
    "t2.text": '"Nexaro hat die Liefer-App vor dem geplanten Termin geliefert. Das Dashboard ist genau das, was wir brauchten. Sehr professionell."',
    "t2.name": "Laura R.",
    "t2.role": "Logistikunternehmen · Barcelona",
    "t3.text": '"Der Sprachagent nimmt 80 % meiner Anrufe selbstständig entgegen. Meine Kunden merken keinen Unterschied und ich kann mich auf das Wesentliche konzentrieren."',
    "t3.name": "Alejandro P.",
    "t3.role": "Steuerberatung · Valencia",
    "faq.tag": "Häufige Fragen",
    "faq.title": "Alles, was du wissen musst",
    "faq.q1": "Was kostet ein typisches Projekt?",
    "faq.a1": "Das hängt vom Umfang ab. Eine grundlegende Automatisierung beginnt bei 500 €. Eine professionelle Webseite ab 800 €. Maßgeschneiderte Apps ab 2.500 €. Wir erstellen immer ein individuelles Angebot ohne Verpflichtung.",
    "faq.q2": "Wie lange dauert die Umsetzung?",
    "faq.a2": "Automatisierungen: 1-2 Wochen. Webseiten: 2-3 Wochen. Apps: 4-8 Wochen je nach Komplexität. Wir arbeiten mit inkrementellen Lieferungen, damit du schnell Ergebnisse siehst.",
    "faq.q3": "Benötige ich technische Kenntnisse?",
    "faq.a3": "Nein. Wir gestalten alles so, dass du es ohne technische Ausbildung nutzen kannst. Außerdem bieten wir eine Onboarding-Sitzung und Video-Dokumentation.",
    "faq.q4": "Bietet ihr Wartung nach der Lieferung an?",
    "faq.a4": "Ja. Wir haben monatliche Wartungspläne ab 99 €/Monat, die Updates, Monitoring und prioritären Support umfassen.",
    "faq.q5": "Arbeitet ihr auch mit Unternehmen außerhalb Spaniens?",
    "faq.a5": "Natürlich. Wir arbeiten 100 % remote und haben Kunden in Spanien, Deutschland und Lateinamerika. Unsere Website und Dienstleistungen sind auf Spanisch, Englisch und Deutsch verfügbar.",
    "contact.tag": "Sprechen wir",
    "contact.title": "Bereit, dein Unternehmen zu automatisieren?",
    "contact.sub": "Erzähl uns von deinem Projekt. In weniger als 24 Stunden erhältst du ein individuelles Angebot — unverbindlich.",
    "contact.f1": "Kostenlose Erstberatung",
    "contact.f2": "Angebot in 24h",
    "contact.f3": "Keine Bindung",
    "form.name": "Name",
    "form.namePH": "Dein Name",
    "form.email": "E-Mail",
    "form.service": "Gewünschter Service",
    "form.select": "Service auswählen",
    "form.opt1": "KI-Automatisierung",
    "form.opt2": "Webseite",
    "form.opt3": "Maßgeschneiderte App",
    "form.opt4": "Mehrere Services",
    "form.msg": "Erzähl uns von deinem Projekt",
    "form.msgPH": "Beschreibe kurz, was du brauchst...",
    "form.send": "Nachricht senden",
    "form.legal": "Mit dem Absenden akzeptierst du unsere Datenschutzrichtlinie. Kein Spam, niemals.",
    "form.success": "Nachricht gesendet! Wir melden uns innerhalb von 24h.",
    "footer.tagline": "Wir automatisieren die Gegenwart, damit du die Zukunft aufbauen kannst.",
    "footer.services": "Leistungen",
    "footer.s1": "KI-Automatisierungen",
    "footer.s2": "Webseiten",
    "footer.s3": "Maßgeschneiderte Apps",
    "footer.company": "Unternehmen",
    "footer.portfolio": "Portfolio",
    "footer.faq": "FAQ",
    "footer.contact": "Kontakt",
    "footer.contactTitle": "Kontakt",
    "footer.copy": "© 2025 NEXARO. Alle Rechte vorbehalten.",
  }
};

/* ══════════════ LANGUAGE SWITCHER ══════════════ */
let currentLang = 'es';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ══════════════ NAVBAR ══════════════ */
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ══════════════ STARS CANVAS ══════════════ */
(function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let raf;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildStars();
  }

  function buildStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 6000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gradient background
    const grad = ctx.createRadialGradient(
      canvas.width * 0.5, canvas.height * 0.3, 0,
      canvas.width * 0.5, canvas.height * 0.3, canvas.width * 0.7
    );
    grad.addColorStop(0, '#0a1a40');
    grad.addColorStop(0.5, '#05101e');
    grad.addColorStop(1, '#050d1a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stars
    stars.forEach(s => {
      const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 1000 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,210,255,${alpha * s.a})`;
      ctx.fill();
    });

    // Subtle glow in center-top
    const glow = ctx.createRadialGradient(
      canvas.width * 0.5, canvas.height * 0.15, 0,
      canvas.width * 0.5, canvas.height * 0.15, canvas.width * 0.35
    );
    glow.addColorStop(0, 'rgba(0,100,200,0.12)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  raf = requestAnimationFrame(draw);
})();

/* ══════════════ FAQ ACCORDION ══════════════ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
    });

    if (!isOpen) item.classList.add('open');
  });
});

/* ══════════════ CONTACT FORM ══════════════ */
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type=submit]');
  const originalText = btn.textContent;
  btn.textContent = '...';
  btn.disabled = true;

  const data = {
    nombre:   this.nombre.value,
    email:    this.email.value,
    servicio: this.servicio.value,
    mensaje:  this.mensaje.value,
    lang:     currentLang,
  };

  try {
    await fetch('https://formspree.io/f/mwvzgkdo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    document.getElementById('formSuccess').classList.add('show');
    this.reset();
  } catch {
    alert('Error al enviar. Por favor escríbenos a hola@nexaro.ai');
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
});

/* ══════════════ SCROLL ANIMATIONS (AOS-lite) ══════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animated');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

/* ══════════════ SMOOTH SCROLL ══════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ══════════════ ACTIVE NAV HIGHLIGHT ══════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
}, { passive: true });
