// Główny plik exportujący wszystkie schema markup
// Centralne zarządzanie JSON-LD dla SEO

export { localBusinessSchema } from './localBusiness';
export { drPaduszynskiSchema } from './person';
export { organizationSchema } from './organization';
export { 
  konsultacjaOsteopatycznaService,
  terapiaManualna,
  fizjoterapiaService,
  osteopatiaKranialna,
  osteopatiaWisceralna,
  allServices 
} from './services';

// Eksport schematów opinii oraz FAQ
export { 
  faqSchema,
  faqItems,
  getFaqSchema
} from './faq';

export { 
  patientReviews,
  aggregateRating,
  organizationWithReviews,
  personWithReviews,
  fetchZnanyLekarzReviews,
  calculateAggregateRating
} from './reviews';

export type * from './types';

// Importy potrzebne dla funkcji generujących
import { localBusinessSchema } from './localBusiness';
import { drPaduszynskiSchema } from './person';
import { organizationSchema } from './organization';
import { organizationWithReviews, patientReviews } from './reviews';
import { allServices } from './services';
import { getFaqSchema } from './faq';

// Funkcja do generowania pełnego JSON-LD dla strony głównej
export function generateHomePageSchema(locale: 'pl' | 'en' = 'pl') {
  return {
    localBusiness: localBusinessSchema,
    person: drPaduszynskiSchema,
    organization: organizationWithReviews,
    services: allServices,
    faq: getFaqSchema(locale),
    reviews: patientReviews
  };
}

// Funkcja do generowania JSON-LD dla strony cennika
export function generatePricingPageSchema() {
  return {
    organization: organizationSchema,
    services: allServices
  };
}

// Funkcja do generowania JSON-LD dla strony kontakt
export function generateContactPageSchema() {
  return {
    localBusiness: localBusinessSchema,
    organization: organizationSchema
  };
}