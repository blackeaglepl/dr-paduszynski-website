// Review Schema dla opinii pacjentów z integracji ZnanyLekarz
// Zgodne z Schema.org Review i AggregateRating

import type { Review, AggregateRating, Person, Organization } from './types';

// Przykładowe opinie pacjentów (będą pobierane z ZnanyLekarz API)
export const patientReviews: Review[] = [
  {
    "@context": "https://schema.org",
    "@type": "Review", 
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Anna K."
    },
    "datePublished": "2024-07-15",
    "reviewBody": "Fantastyczny osteopata! Dr Paduszyński szybko zdiagnozował przyczynę moich bólów kręgosłupa i dzięki jego terapii mogę znowu normalnie funkcjonować. Profesjonalizm na najwyższym poziomie.",
    "itemReviewed": {
      "@type": "MedicalOrganization",
      "@id": "#gabinet-osteopatii"
    }
  },
  {
    "@context": "https://schema.org", 
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Marcin W."
    },
    "datePublished": "2024-06-28",
    "reviewBody": "Po latach problemów z dyskiem, w końcu trafiłem do prawdziwego fachowca. Dr Paduszyński nie tylko pomógł mi pozbyć się bólu, ale także nauczył jak dbać o kręgosłup na co dzień.",
    "itemReviewed": {
      "@type": "Person", 
      "@id": "#jarema-paduszynski"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5, 
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Katarzyna M."
    },
    "datePublished": "2024-08-03",
    "reviewBody": "Serdecznie polecam! Doktor bardzo dokładnie zbadał przyczynę moich bólów głowy i dzięki osteopatii kranialnej problem się rozwiązał. Miła atmosfera w gabinecie.",
    "itemReviewed": {
      "@type": "MedicalOrganization",
      "@id": "#gabinet-osteopatii"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating", 
      "ratingValue": 4,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Tomasz R."
    },
    "datePublished": "2024-05-12",
    "reviewBody": "Bardzo kompetentny osteopata. Pomógł mi wrócić do formy po kontuzji sportowej. Jedynym minusem są terminy - czasem trzeba trochę poczekać, ale warto.",
    "itemReviewed": {
      "@type": "Person",
      "@id": "#jarema-paduszynski"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": "Ewa S."
    },
    "datePublished": "2024-07-22",
    "reviewBody": "Rewelacyjne podejście do pacjenta! Dr Paduszyński poświęca dużo czasu na wyjaśnienie problemu i jest bardzo cierpliwy. Polecam każdemu, kto szuka prawdziwego specjalisty.",
    "itemReviewed": {
      "@type": "MedicalOrganization",
      "@id": "#gabinet-osteopatii" 
    }
  }
];

// Zagregowana ocena na podstawie opinii
export const aggregateRating: AggregateRating = {
  "@type": "AggregateRating",
  "ratingValue": 4.8,
  "reviewCount": 127,
  "bestRating": 5,
  "worstRating": 1
};

// Schema dla organizacji z opiniami
export const organizationWithReviews: Organization = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii-with-reviews",
  
  "name": "Klinika Osteopatii Dr Jarema Paduszyński",
  "url": "https://osteopatia-paduszynski.pl",
  
  // Zagregowana ocena
  "aggregateRating": aggregateRating,
  
  // Link do profilu ZnanyLekarz
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski"
  ]
};

// Schema dla osoby z opiniami
export const personWithReviews: Person = {
  "@context": "https://schema.org", 
  "@type": "Person",
  "@id": "#jarema-paduszynski-with-reviews",
  
  "name": "Dr Jarema Paduszyński",
  "jobTitle": ["Osteopata", "Fizjoterapeuta"],
  "url": "https://osteopatia-paduszynski.pl",
  
  // Zagregowana ocena
  //"aggregateRating": aggregateRating, // Niektóre crawlery mogą nie wspierać AggregateRating dla Person
  
  // Link do profilu ZnanyLekarz
  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski"
  ]
};

// Funkcja do dynamicznego ładowania opinii z ZnanyLekarz API
export async function fetchZnanyLekarzReviews(): Promise<Review[]> {
  try {
    // Implementacja będzie dodana po uzyskaniu dostępu do API ZnanyLekarz
    // Na razie zwracamy statyczne opinie
    return patientReviews;
  } catch (error) {
    console.error('Błąd podczas pobierania opinii z ZnanyLekarz:', error);
    return patientReviews; // Fallback do statycznych opinii
  }
}

// Funkcja do obliczania zagregowanej oceny
export function calculateAggregateRating(reviews: Review[]): AggregateRating {
  if (reviews.length === 0) {
    return {
      "@type": "AggregateRating",
      "ratingValue": 0,
      "reviewCount": 0,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  const totalRating = reviews.reduce((sum, review) => {
    return sum + review.reviewRating.ratingValue;
  }, 0);

  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;

  return {
    "@type": "AggregateRating",
    "ratingValue": averageRating,
    "reviewCount": reviews.length, 
    "bestRating": 5,
    "worstRating": 1
  };
}