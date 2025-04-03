import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  navigation: {
    home: 'Home',
    about: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  home: {
    greeting: 'Hi, I am',
    role: 'Mobile App Developer',
    bio: 'I create elegant and functional mobile applications with a focus on user experience and performance.',
    cta: 'View My Work',
  },
  about: {
    title: 'About Me',
    subtitle: 'Get to know me better',
    description: 'I am a passionate Mobile App Developer with experience in web development as well. I love creating intuitive and engaging user experiences through clean code and modern design principles.',
    skills: 'Skills & Technologies',
    mobile: 'Mobile Development',
    web: 'Web Development',
    database: 'Databases',
    other: 'Other Technologies',
  },
  portfolio: {
    title: 'My Portfolio',
    subtitle: 'Check out my recent projects',
    viewProject: 'View Project',
    womblab: {
      title: 'Womblab Landing Page',
      description: 'Dynamic landing page that fetches content from an API.',
      technologies: 'Technologies: Svelte, Html, Css, Js',
    },
    womblabRepo: {
      title: 'Womblab Repository',
      description: 'Small database to connect the FormPage and the LandingPage via REST API.',
      technologies: 'Technologies: Node.js, MongoDB',
    },
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Let\'s work together',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    success: 'Your message has been sent successfully!',
    error: 'There was an error sending your message. Please try again.',
  },
};

// Italian translations
const itTranslations = {
  navigation: {
    home: 'Home',
    about: 'Chi Sono',
    portfolio: 'Portfolio',
    contact: 'Contatti',
  },
  home: {
    greeting: 'Ciao, sono',
    role: 'Sviluppatore di App Mobile',
    bio: 'Creo applicazioni mobili eleganti e funzionali con un focus sull\'esperienza utente e sulle prestazioni.',
    cta: 'Vedi i Miei Lavori',
  },
  about: {
    title: 'Chi Sono',
    subtitle: 'Conoscimi meglio',
    description: 'Sono uno sviluppatore di app mobile appassionato con esperienza anche nello sviluppo web. Amo creare esperienze utente intuitive e coinvolgenti attraverso codice pulito e principi di design moderni.',
    skills: 'Competenze e Tecnologie',
    mobile: 'Sviluppo Mobile',
    web: 'Sviluppo Web',
    database: 'Database',
    other: 'Altre Tecnologie',
  },
  portfolio: {
    title: 'Il Mio Portfolio',
    subtitle: 'Dai un\'occhiata ai miei progetti recenti',
    viewProject: 'Vedi Progetto',
    womblab: {
      title: 'Womblab Landing Page',
      description: 'Landing page dinamica che riceve contenuti da un\'API.',
      technologies: 'Tecnologie: Svelte, Html, Css, Js',
    },
    womblabRepo: {
      title: 'Womblab Repository',
      description: 'Piccolo database per connettere FormPage e LandingPage tramite API REST.',
      technologies: 'Tecnologie: Node.js, MongoDB',
    },
  },
  contact: {
    title: 'Contattami',
    subtitle: 'Lavoriamo insieme',
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    send: 'Invia Messaggio',
    success: 'Il tuo messaggio è stato inviato con successo!',
    error: 'Si è verificato un errore durante l\'invio del messaggio. Per favore riprova.',
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      it: {
        translation: itTranslations,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;