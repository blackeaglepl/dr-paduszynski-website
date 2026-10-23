// Review Schema dla opinii pacjentów z integracji ZnanyLekarz i Google
// Zgodne z Schema.org Review i AggregateRating – zsynchronizowane z TestimonialsSection.astro

import type { Review, AggregateRating, Person, Organization } from './types';

const reviewedClinic: Organization = {
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii",
  "name": "Klinika Osteopatii Dr Jarema Paduszyński"
};

// Autentyczne opinie pacjentów wyświetlane w sekcji TestimonialsSection.astro
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
      "name": "Rodzice niemowlęcia"
    },
    "datePublished": "2025-02-25",
    "reviewBody": "Pan doktor Jarema pomógł naszemu synkowi (niemowlakowi). Na każdej wizycie otrzymywaliśmy szczegółowe wyjaśnienia dotyczące problemów oraz zakresu działań. Wizyty przebiegały w przyjaznej atmosferze dla naszego maleństwa. Efekty pracy Pana Doktora są widoczne gołym okiem. Szczerze polecam.",
    "itemReviewed": reviewedClinic
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
      "name": "Pacjentka"
    },
    "datePublished": "2025-02-22",
    "reviewBody": "Miałam przyjemność skorzystać z usług Pana Jaremy i jestem pod ogromnym wrażeniem jego profesjonalizmu oraz wiedzy. Już po pierwszej wizycie zauważyłam znaczną poprawę – szumy w uchu oraz bóle głowy ustąpiły. Odbyłam także terapię wisceralną. Podejście niezwykle empatyczne – czułam się w pełni zaopiekowana. Gorąco polecam.",
    "itemReviewed": reviewedClinic
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
      "name": "Gabriela"
    },
    "datePublished": "2024-12-28",
    "reviewBody": "Jestem bardzo wdzięczna za wizytę u Doktora Jaremy. Doktor bardzo profesjonalnie podszedł do wizyt, poświęcił należytą ilość czasu, żeby przeanalizować mój problem, dociec jego przyczyny i go wyleczyć. Terapia stawów skroniowo-żuchwowych została wykonana bardzo dokładnie przy holistycznym podejściu, doktor posiada obszerną wiedzę i praktyczne umiejętności leczenia. Po 2 wizytach wychodzę z wielką ulgą po bólu i dawką wiedzy jak o to jakże cenne zdrowie na codzień dbać i takim bólom zapobiegać.",
    "itemReviewed": reviewedClinic
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
      "name": "Agnieszka"
    },
    "datePublished": "2025-02-18",
    "reviewBody": "Serdecznie polecam Pana Doktora. Z dużym zaangażowaniem podchodzi do pacjenta, wszystko szczegółowo wyjaśnia. Po wizycie ból minął.",
    "itemReviewed": reviewedClinic
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
      "name": "Anna"
    },
    "datePublished": "2024-11-19",
    "reviewBody": "Pan Jarema to bardzo empatyczny człowiek z ogromnym doświadczeniem i świetnym podejściem do dzieci. Wszystko nam objaśnił i odpowiadał na każde pytanie. Córeczka była zachwycona. Bardzo polecam.",
    "itemReviewed": reviewedClinic
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
      "name": "Małgorzata"
    },
    "datePublished": "2024-10-23",
    "reviewBody": "Gorąco polecam – trzy wizyty wystarczyły, aby bóle, z którymi borykałam się od lat i po wielu konsultacjach, ustąpiły.",
    "itemReviewed": reviewedClinic
  }
];

// Zagregowana ocena (150+ pozytywnych opinii pacjentów na ZnanyLekarz i Google)
export const aggregateRating: AggregateRating = {
  "@type": "AggregateRating",
  "ratingValue": 5.0,
  "reviewCount": 150,
  "bestRating": 5,
  "worstRating": 1
};

// Schema dla organizacji z opiniami
export const organizationWithReviews: Organization = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii",

  "name": "Klinika Osteopatii Dr Jarema Paduszyński",
  "url": "https://osteopatia-paduszynski.pl",
  "aggregateRating": aggregateRating,

  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow",
    "https://g.page/r/CeL4hiVNs-NdEBM/review"
  ]
};

// Schema dla osoby z opiniami
export const personWithReviews: Person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "#jarema-paduszynski",

  "name": "dr Jarema Paduszyński",
  "jobTitle": ["Osteopata", "Fizjoterapeuta"],
  "url": "https://osteopatia-paduszynski.pl",

  "sameAs": [
    "https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow",
    "https://g.page/r/CeL4hiVNs-NdEBM/review"
  ]
};

export async function fetchZnanyLekarzReviews(): Promise<Review[]> {
  return patientReviews;
}

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

  const totalRating = reviews.reduce((sum, review) => sum + review.reviewRating.ratingValue, 0);
  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;

  return {
    "@type": "AggregateRating",
    "ratingValue": averageRating,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  };
}
