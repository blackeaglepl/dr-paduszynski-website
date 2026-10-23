// Organization Schema dla kliniki medycznej
// Zgodne z Schema.org Organization i MedicalOrganization

import type { MedicalOrganization } from './types';
import { SITE_EMAIL } from '../consts';

export const organizationSchema: MedicalOrganization = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii",

  "name": "Klinika Osteopatii Dr Jarema Paduszyński",
  "alternateName": "Osteopata Kraków – dr Jarema Paduszyński",
  "description": "Nowoczesny gabinet osteopatii i fizjoterapii w Krakowie (ul. Jugowicka 35/5, Małopolska) oferujący profesjonalne leczenie dysfunkcji układu ruchu, narządów wewnętrznych oraz stawów skroniowo-żuchwowych metodami osteopatycznymi. Ponad 29 lat doświadczenia klinicznego i dydaktyczno-naukowego.",

  // Podstawowe informacje
  "url": "https://osteopatia-paduszynski.pl",
  "logo": "https://osteopatia-paduszynski.pl/logo.png",
  "image": [
    "https://osteopatia-paduszynski.pl/gabinet-wnetrze.jpg",
    "https://osteopatia-paduszynski.pl/gabinet-sala-zabiegow.jpg",
    "https://osteopatia-paduszynski.pl/gabinet-stol-terapeutyczny.jpg"
  ],

  // Dane kontaktowe
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Jugowicka 35/5",
    "addressLocality": "Kraków",
    "addressRegion": "Małopolskie",
    "postalCode": "30-443",
    "addressCountry": "PL"
  },

  "telephone": "+48 667 762 227",
  "email": SITE_EMAIL,

  // Data założenia
  "foundingDate": "2022-03-15",

  // Założyciel i pracownicy
  "founder": {
    "@type": "Person",
    "@id": "#jarema-paduszynski",
    "name": "dr Jarema Paduszyński"
  },

  "employee": {
    "@type": "Person",
    "@id": "#jarema-paduszynski",
    "name": "dr Jarema Paduszyński"
  },

  // Specjalizacje medyczne
  "medicalSpecialty": [
    "Osteopatia",
    "Fizjoterapia",
    "Osteopatia pediatryczna",
    "Fizjoterapia stomatologiczna",
    "Fizjoterapia twarzowo-szczękowa",
    "Fizjoterapia uroginekologiczna",
    "Terapia wisceralna",
    "Terapia czaszkowo-krzyżowa",
    "Terapia manualna"
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
      "credentialCategory": "Dyplom w Polskim Towarzystwie Osteopatii",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Polskie Towarzystwo Osteopatii"
      }
    }
  ],

  // Media społecznościowe i profile
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow",
    "https://g.page/r/CeL4hiVNs-NdEBM/review"
  ]
};
