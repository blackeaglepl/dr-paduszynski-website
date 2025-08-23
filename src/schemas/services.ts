// Service Schema dla zabiegów osteopatycznych
// Zgodne z Schema.org Service i MedicalProcedure

import type { Service, Organization, Person } from './types';

// Provider organizacji i lekarza do referencji
const provider: Organization = {
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii",
  "name": "Klinika Osteopatii Dr Jarema Paduszyński"
};

const providerPerson: Person = {
  "@type": "Person",
  "@id": "#jarema-paduszynski", 
  "name": "Dr Jarema Paduszyński"
};

// Konsultacja osteopatyczna
export const konsultacjaOsteopatycznaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#konsultacja-osteopatyczna",
  
  "name": "Konsultacja osteopatyczna", 
  "description": "Kompleksowa konsultacja osteopatyczna obejmująca szczegółowy wywiad medyczny, badanie palpacyjne, testy funkcjonalne oraz plan leczenia dostosowany do indywidualnych potrzeb pacjenta.",
  
  "provider": provider,
  "category": "Osteopatia",
  "duration": "PT60M", // 60 minut w formacie ISO 8601
  
  "procedureType": "Diagnostic and therapeutic consultation",
  "bodyLocation": ["Cały organizm", "Układ mięśniowo-szkieletowy"],
  
  "preparation": "Wygodny strój umożliwiający swobodne ruchy. Wypełnienie kwestionariusza zdrowia przed wizytą.",
  "followup": "Rekomendacje dotyczące dalszego leczenia, ćwiczeń domowych i profilaktyki.",
  
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": "#konsultacja-osteopatyczna"
      },
      "price": "250",
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock"
    }
  ]
};

// Terapia manualna
export const terapiaManualna: Service = {
  "@context": "https://schema.org", 
  "@type": "MedicalProcedure",
  "@id": "#terapia-manualna",
  
  "name": "Terapia manualna",
  "description": "Specjalistyczne techniki manualne obejmujące mobilizacje stawów, techniki miękkotkanowe oraz manipulacje osteopatyczne ukierunkowane na przywrócenie prawidłowej funkcji układu ruchu.",
  
  "provider": provider,
  "category": "Terapia manualna",
  "duration": "PT45M", // 45 minut
  
  "procedureType": "Manual therapy treatment",
  "bodyLocation": [
    "Kręgosłup", 
    "Stawy obwodowe",
    "Mięśnie",
    "Powięzie",
    "Więzadła"
  ],
  
  "preparation": "Wygodny strój. Unikanie intensywnego wysiłku fizycznego przed zabiegiem.",
  "followup": "Zalecenia dotyczące aktywności fizycznej, ćwiczeń usprawniających i profilaktyki.",
  
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": "#terapia-manualna"
      },
      "price": "200", 
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock"
    }
  ]
};

// Fizjoterapia
export const fizjoterapiaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure", 
  "@id": "#fizjoterapia",
  
  "name": "Fizjoterapia",
  "description": "Kompleksowa rehabilitacja funkcjonalna obejmująca ćwiczenia lecznicze, techniki manuale oraz edukację pacjenta w zakresie ergonomii i profilaktyki schorzeń układu ruchu.",
  
  "provider": provider,
  "category": "Fizjoterapia",
  "duration": "PT50M", // 50 minut
  
  "procedureType": "Physical therapy treatment",
  "bodyLocation": [
    "Układ mięśniowo-szkieletowy",
    "Kręgosłup",
    "Stawy",
    "System nerwowy obwodowy"
  ],
  
  "preparation": "Strój sportowy. Ręcznik. Zwolnienie lekarskie lub skierowanie (jeśli wymagane).",
  "followup": "Program ćwiczeń domowych, zalecenia dotyczące stylu życia i dalszej aktywności fizycznej.",
  
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": "#fizjoterapia"
      },
      "price": "180",
      "priceCurrency": "PLN", 
      "availability": "https://schema.org/InStock"
    }
  ]
};

// Osteopatia kranialna
export const osteopatiaKranialna: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#osteopatia-kranialna",
  
  "name": "Osteopatia kranialna",
  "description": "Delikatne techniki osteopatyczne skierowane na kości czaszki, opony mózgowo-rdzeniowe oraz płyn mózgowo-rdzeniowy. Wskazane w przypadku bólów głowy, problemów z koncentracją oraz zaburzeń snu.",
  
  "provider": provider,
  "category": "Osteopatia specjalistyczna",
  "duration": "PT60M", // 60 minut
  
  "procedureType": "Cranial osteopathic treatment", 
  "bodyLocation": [
    "Czaszka",
    "Kręgosłup szyjny",
    "System nerwowy",
    "Opony mózgowo-rdzeniowe"
  ],
  
  "preparation": "Wygodny strój. Unikanie kofeiny przed zabiegiem. Relaksacyjna atmosfera.",
  "followup": "Zalecenia dotyczące wypoczynku, nawodnienia organizmu i ograniczenia stresu.",
  
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": "#osteopatia-kranialna"
      },
      "price": "280",
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock"
    }
  ]
};

// Osteopatia wisceralna
export const osteopatiaWisceralna: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#osteopatia-wisceralna",
  
  "name": "Osteopatia wisceralna",
  "description": "Specjalistyczne techniki osteopatyczne skierowane na narządy wewnętrzne i ich mobilność. Wskazane w przypadku problemów trawiennych, oddechowych oraz zaburzeń funkcji narządów wewnętrznych.",
  
  "provider": provider,
  "category": "Osteopatia specjalistyczna", 
  "duration": "PT50M", // 50 minut
  
  "procedureType": "Visceral osteopathic treatment",
  "bodyLocation": [
    "Narządy jamy brzusznej",
    "Narządy klatki piersiowej", 
    "Przepona",
    "Miednicy mniejszej"
  ],
  
  "preparation": "Lekki posiłek na 2 godziny przed zabiegiem. Wygodny, luźny strój.",
  "followup": "Zalecenia dietetyczne, techniki oddechowe oraz ćwiczenia usprawniające funkcję narządów.",
  
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service", 
        "@id": "#osteopatia-wisceralna"
      },
      "price": "260",
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock"
    }
  ]
};

// Pakiet zabiegów
export const pakietZabiegow: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "#pakiet-5-zabiegow",
  
  "name": "Pakiet 5 zabiegów osteopatycznych",
  "description": "Kompleksowy pakiet 5 zabiegów osteopatycznych z preferencyjną ceną. Idealny dla pacjentów wymagających długofalowej terapii i rehabilitacji.",
  
  "provider": provider,
  "category": "Pakiet terapeutyczny",
  "duration": "PT300M", // 5 x 60 minut = 300 minut łącznie
  
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": "#pakiet-5-zabiegow"
      },
      "price": "1000",
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31"
    }
  ]
};

// Eksport wszystkich usług
export const allServices = [
  konsultacjaOsteopatycznaService,
  terapiaManualna, 
  fizjoterapiaService,
  osteopatiaKranialna,
  osteopatiaWisceralna,
  pakietZabiegow
];