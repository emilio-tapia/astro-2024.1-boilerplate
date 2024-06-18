export const languages = {
  es: {
    es: "Español",
    en: "Spanish",
    fr: "Espagnol",
  },
  en: {
    es: "Inglés",
    en: "English",
    fr: "Anglais",
  },
  fr: {
    es: "Francés",
    en: "French",
    fr: "Français",
  },
};

export const defaultLang = "es";

export const ui = {
  es: {
    general: {
      address: "Dirección",
      email: "Email",
      phone: "Teléfono",
      notSupportedVideos:
        "Tu navegador no tiene soporte para reproducir videos",
      pages: {
        home: "Inicio",
        services: "Servicios",
        products: "Productos",
        contact: "Contacto",
      },
    },
    cta: {
      quotation: "Cotizaciones",
      contact: "Contacto",
      need_help: "¿Necesitas ayuda?",
    },
    header: {
      titlePages: "Explora",
      titleSettings: "Ajustes",
    },
    nav: {
      lang: "Idioma",
    },
    hero: {
      catchphrase: {
        "1": "Expertos en",
        "2": "Redes &",
        "3": "Fibra Óptica",
      },
      slogan: "35 años expandiendo las telecomunicaciones",
    },
    footer: {
      productsColumn: {
        title: "Productos",
        links: ["Over", "Soluciones", "Precios", "Clientes"],
      },
      companyColumn: {
        title: "Compañia",
        links: ["Sobre nosotros", "Relaciones públicas", "Trabajos", "Blog"],
      },
      supportColumn: {
        title: "Soporte",
        links: ["Contacto", "Documentación", "Chat", "FAQ"],
      },
      legalColumn: {
        title: "Productos",
        links: ["Términos de servicio", "Políticas de privacidad", "Cookies"],
      },
    },
    faq: [
      {
        q: "¿El servicio es manejado por profesionales?",
        r: "Sí, tenemos el mejor equipo calificado para resolver los problemas de nuestros clientes.",
      },
      {
        q: "¿Que son las redes GPON?",
        r: "Sí, tenemos el mejor equipo calificado para resolver los problemas de nuestros clientes.",
      },
      {
        q: "¿Cuanto dura un proyecto de despligue de redes?",
        r: "Sí, tenemos el mejor equipo calificado para resolver los problemas de nuestros clientes.",
      },
      {
        q: "¿Garantia de nuestros productos?",
        r: "Sí, tenemos el mejor equipo calificado para resolver los problemas de nuestros clientes.",
      },
      {
        q: "¿Tiene servicio de asesoria?",
        r: "Sí, tenemos el mejor equipo calificado para resolver los problemas de nuestros clientes.",
      },
    ],
    "nav.twitter": "Twitter",
  },
  en: {
    general: {
      address: "Address",
      email: "Email",
      phone: "Phone",
      pages: {
        home: "Home",
        services: "Services",
        products: "Products",
        contact: "Contact us",
      },
    },
    header: {
      titlePages: "Explore",
      titleSettings: "Settings",
    },
    nav: {
      lang: "Language",
    },

    hero: {
      catchphrase: {
        "1": "Experts in",
        "2": "Networks &",
        "3": "Fiber Optics",
      },
      slogan: "35 years expanding telecommunications",
      cta: {
        main: "Quotation Request",
        second: "Contact us",
      },
    },
    footer: {
      productsColumn: {
        title: "Products",
        links: ["Overview", "Solutions", "Prices", "Customers"],
      },
      companyColumn: {
        title: "Company",
        links: ["About", "Public Relations", "Jobs", "Blog"],
      },
      supportColumn: {
        title: "Support",
        links: ["Contact", "Documentation", "Chat", "FAQ"],
      },
      legalColumn: {
        title: "Legal",
        links: ["Terms of Service", "Privacy Policy", "Cookies"],
      },
    },
  },
  fr: {
    general: {
      address: "Address",
      email: "Email",
      phone: "Phone",
      pages: {
        home: "Home",
        services: "Services",
        products: "Produits",
        contact: "Contactez-nous",
      },
    },
    header: {
      titlePages: "Explorer",
      titleSettings: "Paramètres",
    },
    nav: {
      lang: "Langage",
    },

    hero: {
      catchphrase: {
        "1": "Experts en",
        "2": "Réseaux &",
        "3": "Fibre Optique",
      },
      slogan: "35 ans d'expansion des télécommunications",
      cta: {
        main: "Demande de devis",
        second: "Contact",
      },
    },
    footer: {
      productsColumn: {
        title: "Produits",
        links: ["Plus", "Solutions", "Tarifs", "Clients"],
      },
      companyColumn: {
        title: "Société",
        links: ["À propos de nous", "Relations publiques", "Emplois", "Blog"],
      },
      supportColumn: {
        title: "Support",
        links: ["Contact", "Documentation", "Chat", "FAQ"],
      },
      legalColumn: {
        title: "Juridique",
        links: [
          "Conditions d'utilisation",
          "Politique de confidentialité",
          "Paramètres des cookies",
        ],
      },
    },
  },
} as const;
