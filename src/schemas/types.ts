// Typy TypeScript dla Schema.org markup
// Oparte na oficjalnej specyfikacji Schema.org

export interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface Person {
  "@context"?: string;
  "@type": "Person";
  "@id"?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  honorificPrefix?: string;
  jobTitle?: string[];
  description?: string;
  url?: string;
  image?: string | string[];
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  alumniOf?: Organization[];
  memberOf?: Organization[];
  hasCredential?: EducationalOccupationalCredential[];
  knowsAbout?: string[];
  workLocation?: Place;
  worksFor?: Organization;
  sameAs?: string[];
}

export interface Organization {
  "@context"?: string;
  "@type": "Organization" | "MedicalOrganization";
  "@id"?: string;
  name: string;
  alternateName?: string;
  description?: string;
  url?: string;
  logo?: string;
  image?: string | string[];
  address?: PostalAddress;
  telephone?: string;
  email?: string;
  foundingDate?: string;
  founder?: Person;
  employee?: Person | Person[];
  sameAs?: string[];
}

export interface MedicalOrganization extends Organization {
  "@type": "MedicalOrganization" | string[];
  medicalSpecialty?: string[];
  hasCredential?: EducationalOccupationalCredential[];
}

export interface LocalBusiness {
  "@context": string;
  "@type": string | string[];
  name: string;
  alternateName?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  geo?: GeoCoordinates;
  openingHours?: string[];
  areaServed?: string[];
  availableLanguage?: string[];
  paymentAccepted?: string[];
  priceRange?: string;
  sameAs?: string[];
  logo?: string;
  image?: string | string[];
  founder?: Person;
  employee?: Person | Person[];
  hasOfferCatalog?: OfferCatalog;
}

export interface Service {
  "@context"?: string;
  "@type": "Service" | "MedicalProcedure";
  "@id"?: string;
  name?: string;
  description?: string;
  provider?: Organization | Person;
  category?: string;
  offers?: Offer[];
  duration?: string;
  procedureType?: string;
  bodyLocation?: string[];
  preparation?: string;
  followup?: string;
}

export interface Offer {
  "@type": "Offer";
  itemOffered: Service;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  validThrough?: string;
}

export interface OfferCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: Offer[];
}

export interface Place {
  "@type": "Place";
  name?: string;
  address?: PostalAddress;
  geo?: GeoCoordinates;
}

export interface EducationalOccupationalCredential {
  "@type": "EducationalOccupationalCredential";
  credentialCategory: string;
  recognizedBy?: Organization;
  validFrom?: string;
  validIn?: Place;
}

export interface Review {
  "@context"?: string;
  "@type": "Review";
  reviewRating: Rating;
  author: Person;
  datePublished?: string;
  reviewBody?: string;
  itemReviewed?: Organization | Person;
}

export interface Rating {
  "@type": "Rating";
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
}

export interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export interface FAQPage {
  "@context": string;
  "@type": "FAQPage";
  mainEntity: Question[];
}

export interface Question {
  "@type": "Question";
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  "@type": "Answer";
  text: string;
}