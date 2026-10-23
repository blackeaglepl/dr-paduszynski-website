// Local Business Schema dla kliniki osteopatycznej Dr Jaremy Paduszyńskiego
// Zgodne z Schema.org MedicalBusiness i LocalBusiness

import type { LocalBusiness } from './types';
import { SITE_EMAIL } from '../consts';

export const localBusinessSchema: LocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "LocalBusiness"],
  "name": "Klinika Osteopatii Dr Jarema Paduszyński",
  "alternateName": "Osteopata Kraków - dr Jarema Paduszyński",
  "description": "Profesjonalna klinika osteopatii i fizjoterapii w Krakowie (ul. Jugowicka 35/5, Małopolska) prowadzona przez dr. Jaremę Paduszyńskiego (nr PWZ: 1206). Ponad 29 lat doświadczenia w holistycznym leczeniu bólów kręgosłupa, stawów, zaburzeń stawów skroniowo-żuchwowych (TMJ), dolegliwości wisceralnych oraz w osteopatii pediatrycznej.",

  // Informacje kontaktowe
  "url": "https://osteopatia-paduszynski.pl",
  "telephone": "+48 667 762 227",
  "email": SITE_EMAIL,

  // Adres kliniki
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Jugowicka 35/5",
    "addressLocality": "Kraków",
    "addressRegion": "Małopolskie",
    "postalCode": "30-443",
    "addressCountry": "PL"
  },

  // Współrzędne geograficzne
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.00768529121014,
    "longitude": 19.93402742451952
  },

  // Godziny otwarcia
  "openingHours": [
    "Mo 10:00-13:00,14:00-18:00",
    "Tu 14:00-18:00",
    "We 10:00-13:00,14:00-18:00",
    "Fr 09:00-13:00,14:00-17:00"
  ],

  // Obszary obsługi (Local SEO: Kraków + Małopolska)
  "areaServed": [
    "Kraków",
    "Małopolska",
    "Borek Fałęcki",
    "Podgórze",
    "Kliny",
    "Ruczaj",
    "Swoszowice",
    "Myślenice",
    "Skawina",
    "Wieliczka",
    "Libertów",
    "Mogilany"
  ],

  // Języki obsługi
  "availableLanguage": ["pl", "en"],

  // Akceptowane płatności
  "paymentAccepted": [
    "Gotówka",
    "Przelew"
  ],

  // Cennik
  "priceRange": "400 PLN",

  // Media społecznościowe i recenzje
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow",
    "https://g.page/r/CeL4hiVNs-NdEBM/review"
  ],

  // Logo i obrazy
  "logo": "https://osteopatia-paduszynski.pl/logo.png",
  "image": [
    "https://osteopatia-paduszynski.pl/gabinet-wnetrze.jpg",
    "https://osteopatia-paduszynski.pl/gabinet-sala-zabiegow.jpg",
    "https://osteopatia-paduszynski.pl/gabinet-stol-terapeutyczny.jpg"
  ],

  // Założyciel i specjalista prowadzący
  "founder": {
    "@type": "Person",
    "@id": "#jarema-paduszynski"
  },

  "employee": {
    "@type": "Person",
    "@id": "#jarema-paduszynski"
  },

  // Katalog wszystkich 11 usług osteopatycznych i fizjoterapeutycznych
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Usługi Osteopatyczne i Fizjoterapeutyczne w Krakowie",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#konsultacja-osteopatyczna",
          "name": "Konsultacja osteopatyczna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#fizjoterapia",
          "name": "Wizyta fizjoterapeutyczna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#fizjoterapia-uroginekologiczna",
          "name": "Fizjoterapia uroginekologiczna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#manipulacja-powiezi-stecco",
          "name": "Manipulacja powięzi wg Stecco"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#manipulacja-stawow",
          "name": "Manipulacja stawów"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#osteopatia-pediatryczna",
          "name": "Osteopatia pediatryczna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#stan-ostry-terapia-wisceralna",
          "name": "Stan ostry - Terapia wisceralna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#osteopatia-kranialna",
          "name": "Terapia czaszkowo-krzyżowa"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#terapia-manualna",
          "name": "Terapia manualna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#terapia-stawow-skroniowo-zuchwowych",
          "name": "Terapia stawów skroniowo-żuchwowych"
        },
        "price": "400",
        "priceCurrency": "PLN"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#osteopatia-wisceralna",
          "name": "Terapia wisceralna"
        },
        "price": "400",
        "priceCurrency": "PLN"
      }
    ]
  }
};
