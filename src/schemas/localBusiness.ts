// Local Business Schema dla kliniki osteopatycznej Dr Jaremy Paduszyńskiego
// Zgodne z Schema.org MedicalBusiness i LocalBusiness

import type { LocalBusiness, MedicalOrganization } from './types';

export const localBusinessSchema: LocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "LocalBusiness"],
  "name": "Klinika Osteopatii Dr Jarema Paduszyński",
  "alternateName": "Osteopatia Kraków - Dr Paduszyński",
  "description": "Profesjonalna klinika osteopatii w Krakowie prowadzona przez Dr Jaremę Paduszyńskiego. Specjalizujemy się w leczeniu bólów kręgosłupa, stawów i mięśni metodami osteopatycznymi.",
  
  // Informacje kontaktowe
  "url": "https://osteopatia-paduszynski.pl",
  "telephone": "+48 667 762 227",
  "email": "kontakt@osteopatia-paduszynski.pl",
  
  // Adres kliniki
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jugowicka 35/5",
    "addressLocality": "Kraków",
    "addressRegion": "Małopolskie",
    "postalCode": " 30-432",
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
  
  // Obszary obsługi
  "areaServed": [
    "Kraków",
    "Małopolska",
    "Południe Polski"
  ],
  
  // Języki obsługi
  "availableLanguage": ["pl", "en"],
  
  // Akceptowane płatności
  "paymentAccepted": [
    "Gotówka",
    "Przelew"
  ],
  
  // Cennik
  "priceRange": "300-350 PLN",
  
  // Media społecznościowe i recenzje
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski"
  ],
  
  // Logo i obrazy
  "logo": "https://osteopatia-paduszynski.pl/logo.png",
  "image": [
    "https://osteopatia-paduszynski.pl/gabinet1.jpg",
    "https://osteopatia-paduszynski.pl/gabinet2.jpg"
  ],
  
  // Właściciel/lekarz prowadzący
  "founder": {
    "@type": "Person",
    "@id": "#jarema-paduszynski"
  },
  
  "employee": {
    "@type": "Person", 
    "@id": "#jarema-paduszynski"
  },
  
  // Dodatkowe informacje medyczne
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Usługi Osteopatyczne",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "#konsultacja-osteopatyczna"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "@id": "#terapia-manualna"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "@id": "#fizjoterapia"
        }
      }
    ]
  }
};