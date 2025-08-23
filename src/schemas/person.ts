// Person Schema dla Dr Jaremy Paduszyńskiego
// Zgodne z Schema.org Person i Medical professional markup

import type { Person, Organization, EducationalOccupationalCredential } from './types';

export const drPaduszynskiSchema: Person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "#jarema-paduszynski",
  
  // Dane osobowe
  "name": "Dr Jarema Paduszyński",
  "givenName": "Jarema", 
  "familyName": "Paduszyński",
  "honorificPrefix": "Dr",
  
  // Specjalizacje zawodowe
  "jobTitle": [
    "Osteopata",
    "Fizjoterapeuta", 
    "Lekarz medycyny",
    "Terapeuta manualny"
  ],
  
  "description": "Doświadczony osteopata i fizjoterapeuta z 15-letnim stażem w leczeniu dysfunkcji układu ruchu. Specjalizuje się w terapii bólów kręgosłupa, stawów i mięśni metodami osteopatycznymi.",
  
  // Kontakt
  "url": "https://osteopatia-paduszynski.pl",
  "telephone": "+48 667 762 227",
  "email": "dr.paduszynski@osteopatia-paduszynski.pl",
  "image": "https://osteopatia-paduszynski.pl/dr-paduszynski-portret.jpg",
  
  // Lokalizacja pracy
  "workLocation": {
    "@type": "Place",
    "name": "Klinika Osteopatii Dr Paduszyński",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Jugowicka 35/5",
      "addressLocality": "Kraków", 
      "addressRegion": "Małopolskie",
      "postalCode": "30-432",
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
    "name": "Klinika Osteopatii Dr Paduszyński",
    "url": "https://osteopatia-paduszynski.pl"
  },
  
  // Wykształcenie
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "Uniwersytet Medyczny w Krakowie",
      "description": "Wydział Lekarski"
    },
    {
      "@type": "Organization", 
      "name": "AWF Kraków",
      "description": "Studia kwalifikacyjne"
    },
    {
      "@type": "Organization",
      "name": "Studia doktoranckie",
      "description": "Uzyskanie stopnia naukowego Doktora"
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
      "name": "Polskie Towarzystwo Osteopatii",
      "description": "Członek zwyczajny PTO"
    },
    {
      "@type": "Organization",
      "name": "Krajowa Izba Fizjoterapeutów", 
      "description": "Fizjoterapeuta z prawem wykonywania zawodu"
    },
    {
      "@type": "Organization",
      "name": "Okręgowa Izba Lekarska w Krakowie",
      "description": "Lekarz z prawem wykonywania zawodu"
    }
  ],
  
  // Certyfikaty i uprawnienia
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Dyplom lekarza",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Uniwersytet Medyczny w Krakowie"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Studia kwalifikacyjne",
      "recognizedBy": {
        "@type": "Organization", 
        "name": "AWF Kraków"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Stopień naukowy Doktora",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Studia doktoranckie"
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
      "credentialCategory": "Certyfikat terapii kranio-sakralnej",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Upledger Institute"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certyfikat terapii manualnej",
      "recognizedBy": {
        "@type": "Organization",
        "name": "IAOM - International Academy of Orthopedic Medicine"
      }
    }
  ],
  
  // Obszary wiedzy i specjalizacji
  "knowsAbout": [
    "Osteopatia strukturalna",
    "Osteopatia kranialna", 
    "Osteopatia wisceralna",
    "Fizjoterapia",
    "Terapia manualna",
    "Rehabilitacja kręgosłupa",
    "Terapia bólu",
    "Dysfunkcje układu ruchu",
    "Terapia kranio-sakralna",
    "Mobilizacje stawów",
    "Techniki miękkotkanowe",
    "Anatomia funkcjonalna",
    "Biomechanika ruchu"
  ],
  
  // Media społecznościowe i profile zawodowe
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski",
  ]
};