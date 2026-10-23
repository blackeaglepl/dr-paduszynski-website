// Person Schema dla Dr Jaremy Paduszyńskiego
// Zgodne z Schema.org Person i Medical professional markup

import type { Person } from './types';
import { SITE_EMAIL } from '../consts';

export const drPaduszynskiSchema: Person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "#jarema-paduszynski",

  // Dane osobowe
  "name": "dr Jarema Paduszyński",
  "givenName": "Jarema",
  "familyName": "Paduszyński",
  "honorificPrefix": "dr",

  // Specjalizacje zawodowe
  "jobTitle": [
    "Osteopata",
    "Fizjoterapeuta",
    "Doktor nauk w dziedzinie fizjoterapii",
    "Terapeuta manualny"
  ],

  "description": "Doświadczony osteopata i fizjoterapeuta w Krakowie z ponad 29-letnim stażem klinicznym oraz działalnością dydaktyczno-naukową (doktor nauk w dziedzinie fizjoterapii, nr PWZ: 1206). Specjalizuje się w leczeniu zaburzeń funkcjonalnych całego ciała w ujęciu osteopatycznym u dorosłych, dzieci i niemowląt.",

  // Kontakt
  "url": "https://osteopatia-paduszynski.pl",
  "telephone": "+48 667 762 227",
  "email": SITE_EMAIL,
  "image": "https://osteopatia-paduszynski.pl/dr-paduszynski-portret.jpg",

  // Lokalizacja pracy
  "workLocation": {
    "@type": "Place",
    "name": "Klinika Osteopatii Dr Jarema Paduszyński",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Jugowicka 35/5",
      "addressLocality": "Kraków",
      "addressRegion": "Małopolskie",
      "postalCode": "30-443",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.00768529121014,
      "longitude": 19.93402742451952
    }
  },

  // Miejsce pracy
  "worksFor": {
    "@type": "MedicalOrganization",
    "@id": "#gabinet-osteopatii",
    "name": "Klinika Osteopatii Dr Jarema Paduszyński",
    "url": "https://osteopatia-paduszynski.pl"
  },

  // Wykształcenie
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "Akademia Wychowania Fizycznego w Krakowie (AWF Kraków)",
      "description": "Studia magisterskie i doktoranckie – stopień naukowy doktora w dziedzinie fizjoterapii"
    },
    {
      "@type": "Organization",
      "name": "Akademia Osteopatii",
      "description": "Dyplomowany osteopata"
    }
  ],

  // Członkostwa w organizacjach
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Krajowa Izba Fizjoterapeutów",
      "description": "Fizjoterapeuta z prawem wykonywania zawodu (nr PWZ: 1206)"
    },
    {
      "@type": "Organization",
      "name": "Polskie Towarzystwo Osteopatii",
      "description": "Członek zwyczajny PTO"
    }
  ],

  // Certyfikaty i uprawnienia
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Prawo Wykonywania Zawodu Fizjoterapeuty (nr PWZ: 1206)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Krajowa Izba Fizjoterapeutów"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Stopień naukowy Doktora w dziedzinie fizjoterapii",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Akademia Wychowania Fizycznego w Krakowie (AWF Kraków)"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Dyplom osteopaty",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Akademia Osteopatii"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certyfikat manipulacji powięzi wg Luigi Stecco (Fascial Manipulation)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Fascial Manipulation Institute by Stecco"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certyfikat terapii czaszkowo-krzyżowej (kranio-sakralnej)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Upledger Institute"
      }
    }
  ],

  // Obszary wiedzy i specjalizacji
  "knowsAbout": [
    "Osteopatia strukturalna",
    "Osteopatia wisceralna",
    "Osteopatia czaszkowo-krzyżowa (kranialna)",
    "Osteopatia pediatryczna (niemowlęta i dzieci)",
    "Fizjoterapia stomatologiczna i twarzowo-szczękowa (TMJ / SSŻ)",
    "Fizjoterapia uroginekologiczna",
    "Manipulacja powięzi wg Luigi Stecco",
    "Terapia manualna kręgosłupa i stawów",
    "Rehabilitacja medyczna",
    "Terapia bólu ostrego i przewlekłego",
    "Anatomia funkcjonalna i biomechanika ruchu"
  ],

  // Media społecznościowe i profile zawodowe
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow",
    "https://g.page/r/CeL4hiVNs-NdEBM/review"
  ]
};
