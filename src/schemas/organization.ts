// Organization Schema dla kliniki medycznej
// Zgodne z Schema.org Organization i MedicalOrganization

import type { MedicalOrganization, PostalAddress, EducationalOccupationalCredential } from './types';

export const organizationSchema: MedicalOrganization = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii",
  
  "name": "Klinika Osteopatii Dr Jarema Paduszyński", 
  "alternateName": "Osteopatia Kraków",
  "description": "Nowoczesny gabinet osteopatii w Krakowie oferujący profesjonalne leczenie dysfunkcji układu ruchu metodami osteopatycznymi. Wieloletnie doświadczenie i najwyższa jakość usług medycznych.",
  
  // Podstawowe informacje
  "url": "https://osteopatia-paduszynski.pl",
  "logo": "https://osteopatia-paduszynski.pl/logo-gabinet.png",
  "image": [
    "https://osteopatia-paduszynski.pl/gabinet-wnetrze.jpg",
    "https://osteopatia-paduszynski.pl/gabinet-recepcja.jpg", 
    "https://osteopatia-paduszynski.pl/gabinet-sala-zabiegow.jpg"
  ],
  
  // Dane kontaktowe
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jugowicka 35/5",
    "addressLocality": "Kraków",
    "addressRegion": "Małopolskie", 
    "postalCode": "30-432",
    "addressCountry": "PL"
  },
  
  "telephone": "+48 667 762 227",
  "email": "kontakt@osteopatia-paduszynski.pl",
  
  // Data założenia
  "foundingDate": "2022-03-15",
  
  // Założyciel i pracownicy
  "founder": {
    "@type": "Person",
    "@id": "#jarema-paduszynski",
    "name": "Dr Jarema Paduszyński"
  },
  
  "employee": {
    "@type": "Person", 
    "@id": "#jarema-paduszynski",
    "name": "Dr Jarema Paduszyński"
  },
  
  // Specjalizacje medyczne
  "medicalSpecialty": [
    "Osteopatia",
    "Fizjoterapia",
    "Terapia manualna",
    "Rehabilitacja medyczna",
    "Terapia bólu"
  ],
  
  // Certyfikaty organizacji
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Licencja na wykonywanie działalności leczniczej",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Wojewódzki Urząd w Krakowie"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certyfikat jakości ISO 9001",
      "recognizedBy": {
        "@type": "Organization", 
        "name": "Bureau Veritas"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Członkostwo w Polskim Towarzystwie Osteopatii",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Polskie Towarzystwo Osteopatii"
      }
    }
  ],
  
  // Media społecznościowe i profile
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow"
  ]
};