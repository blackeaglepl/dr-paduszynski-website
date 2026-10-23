// Service Schema dla zabiegów osteopatycznych i fizjoterapeutycznych
// Zgodne z Schema.org Service i MedicalProcedure – zsynchronizowane z src/utils/services.ts (11 usług, 400 PLN)

import type { Service, Organization } from './types';

// Provider organizacji do referencji
const provider: Organization = {
  "@type": "MedicalOrganization",
  "@id": "#gabinet-osteopatii",
  "name": "Klinika Osteopatii Dr Jarema Paduszyński"
};

function createServiceOffer(id: string) {
  return [
    {
      "@type": "Offer" as const,
      "itemOffered": {
        "@type": "Service" as const,
        "@id": id
      },
      "price": "400",
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock"
    }
  ];
}

// 1. Konsultacja osteopatyczna
export const konsultacjaOsteopatycznaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#konsultacja-osteopatyczna",
  "name": "Konsultacja osteopatyczna",
  "description": "Pierwsza wizyta to kompleksowe badanie i wywiad medyczny. Opracowanie indywidualnego planu terapii dostosowanego do Twoich potrzeb. Dowiesz się co dokładnie się dzieje z Twoim ciałem.",
  "provider": provider,
  "category": "Osteopatia",
  "duration": "PT50M",
  "procedureType": "Diagnostic and therapeutic osteopathic consultation",
  "bodyLocation": ["Cały organizm", "Układ mięśniowo-szkieletowy", "Układ nerwowy"],
  "preparation": "Wygodny, luźny strój (np. legginsy, spodenki, t-shirt). Warto zabrać dokumentację medyczną i wyniki badań obrazowych.",
  "followup": "Indywidualny plan terapii, zalecenia dotyczące ergonomii, aktywności i profilaktyki.",
  "offers": createServiceOffer("#konsultacja-osteopatyczna")
};

// 2. Wizyta fizjoterapeutyczna
export const fizjoterapiaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#fizjoterapia",
  "name": "Wizyta fizjoterapeutyczna",
  "description": "Kompleksowa terapia fizjoterapeutyczna obejmująca diagnostykę funkcjonalną, ćwiczenia terapeutyczne i techniki manualne. Skuteczna rehabilitacja po urazach i w chorobach przewlekłych.",
  "provider": provider,
  "category": "Fizjoterapia",
  "duration": "PT50M",
  "procedureType": "Physical therapy treatment",
  "bodyLocation": ["Układ mięśniowo-szkieletowy", "Kręgosłup", "Stawy obwodowe"],
  "preparation": "Wygodny strój sportowy niekrępujący ruchów.",
  "followup": "Program ćwiczeń domowych oraz zalecenia funkcjonalne.",
  "offers": createServiceOffer("#fizjoterapia")
};

// 3. Fizjoterapia uroginekologiczna
export const fizjoterapiaUroginekologicznaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#fizjoterapia-uroginekologiczna",
  "name": "Fizjoterapia uroginekologiczna",
  "description": "Specjalistyczna terapia problemów dna miednicy, nietrzymania moczu i dysfunkcji seksualnych. Bezpieczne i skuteczne metody dla kobiet w każdym wieku.",
  "provider": provider,
  "category": "Fizjoterapia uroginekologiczna",
  "duration": "PT50M",
  "procedureType": "Urogynecological physical therapy",
  "bodyLocation": ["Miednica", "Dno miednicy", "Odcinek lędźwiowo-krzyżowy"],
  "preparation": "Wygodny, luźny strój.",
  "followup": "Zalecenia ćwiczeń mięśni dna miednicy i nawyków dnia codziennego.",
  "offers": createServiceOffer("#fizjoterapia-uroginekologiczna")
};

// 4. Manipulacja powięzi wg Stecco
export const manipulacjaPowieziSteccoService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#manipulacja-powiezi-stecco",
  "name": "Manipulacja powięzi wg Stecco",
  "description": "Innowacyjna metoda terapii powięziowej według Luigi Stecco. Precyzyjna praca z punktami densyfikacji powięzi, przywracająca prawidłową biomechanikę całego ciała.",
  "provider": provider,
  "category": "Terapia powięziowa",
  "duration": "PT50M",
  "procedureType": "Fascial Manipulation by Stecco",
  "bodyLocation": ["Układ powięziowy", "Mięśnie", "Stawy"],
  "preparation": "Wygodny strój z cienkiego materiału umożliwiający badanie palpacyjne powięzi.",
  "followup": "Zalecenia dotyczące nawodnienia i regeneracji tkanek po zabiegu.",
  "offers": createServiceOffer("#manipulacja-powiezi-stecco")
};

// 5. Manipulacja stawów
export const manipulacjaStawowService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#manipulacja-stawow",
  "name": "Manipulacja stawów",
  "description": "Precyzyjne techniki osteopatyczne przywracające pełną ruchomość stawów. Bezpieczne manipulacje wysokiej prędkości i niskiej amplitudy dla wszystkich stawów ciała.",
  "provider": provider,
  "category": "Osteopatia strukturalna",
  "duration": "PT50M",
  "procedureType": "High-velocity low-amplitude (HVLA) joint manipulation",
  "bodyLocation": ["Kręgosłup", "Stawy obwodowe"],
  "preparation": "Luźny strój niekrępujący ruchów.",
  "followup": "Zalecenia dotyczące bezpiecznej aktywności ruchowej.",
  "offers": createServiceOffer("#manipulacja-stawow")
};

// 6. Osteopatia pediatryczna
export const osteopatiaPediatrycznaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#osteopatia-pediatryczna",
  "name": "Osteopatia pediatryczna",
  "description": "Delikatna terapia osteopatyczna dla dzieci i niemowląt. Pomoc przy kolkach, problemach z karmieniem, asymetriach i opóźnieniach rozwojowych. Bezpieczne techniki dostosowane do wieku.",
  "provider": provider,
  "category": "Osteopatia pediatryczna",
  "duration": "PT30M",
  "procedureType": "Pediatric osteopathic treatment",
  "bodyLocation": ["Cały organizm dziecka", "Czaszka", "Układ pokarmowy", "Kręgosłup"],
  "preparation": "Książeczka zdrowia dziecka, ulubiona zabawka lub pieluszka tetrowa.",
  "followup": "Wskazówki dla rodziców dotyczące pielęgnacji, noszenia i wspierania rozwoju dziecka.",
  "offers": createServiceOffer("#osteopatia-pediatryczna")
};

// 7. Stan ostry - Terapia wisceralna
export const stanOstryTerapiaWisceralnaService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#stan-ostry-terapia-wisceralna",
  "name": "Stan ostry - Terapia wisceralna",
  "description": "Intensywna terapia narządów wewnętrznych w stanach ostrych. Szybka ulga w dolegliwościach trawiennych, oddechowych i krążeniowych. Pilna interwencja osteopatyczna.",
  "provider": provider,
  "category": "Osteopatia wisceralna",
  "duration": "PT50M",
  "procedureType": "Acute visceral osteopathic intervention",
  "bodyLocation": ["Narządy jamy brzusznej", "Przepona", "Klatka piersiowa"],
  "preparation": "Wygodny, nieuciskający brzucha strój.",
  "followup": "Zalecenia dietetyczne i oddechowe wspomagające wyciszenie stanu ostrego.",
  "offers": createServiceOffer("#stan-ostry-terapia-wisceralna")
};

// 8. Terapia czaszkowo-krzyżowa (eksportowana także jako osteopatiaKranialna dla kompatybilności)
export const osteopatiaKranialna: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#osteopatia-kranialna",
  "name": "Terapia czaszkowo-krzyżowa",
  "description": "Subtelna metoda pracy z płynem mózgowo-rdzeniowym i systemem czaszkowo-krzyżowym. Głęboka relaksacja, redukcja stresu i poprawa funkcji układu nerwowego.",
  "provider": provider,
  "category": "Osteopatia kranialna",
  "duration": "PT50M",
  "procedureType": "Craniosacral osteopathic treatment",
  "bodyLocation": ["Czaszka", "Kręgosłup szyjny", "Kość krzyżowa", "Układ nerwowy"],
  "preparation": "Wygodny strój, unikanie kofeiny bezpośrednio przed zabiegiem.",
  "followup": "Zalecenia dotyczące odpoczynku, nawodnienia i redukcji stresu.",
  "offers": createServiceOffer("#osteopatia-kranialna")
};

// 9. Terapia manualna
export const terapiaManualna: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#terapia-manualna",
  "name": "Terapia manualna",
  "description": "Klasyczne techniki terapii manualnej obejmujące mobilizacje, manipulacje i techniki tkanek miękkich. Kompleksowe podejście do problemów układu ruchu.",
  "provider": provider,
  "category": "Terapia manualna",
  "duration": "PT50M",
  "procedureType": "Manual therapy treatment",
  "bodyLocation": ["Kręgosłup", "Stawy obwodowe", "Mięśnie", "Powięzie", "Więzadła"],
  "preparation": "Wygodny strój umożliwiający dostęp do badanego obszaru.",
  "followup": "Zalecenia dotyczące aktywności fizycznej, ćwiczeń usprawniających i profilaktyki.",
  "offers": createServiceOffer("#terapia-manualna")
};

// 10. Terapia stawów skroniowo-żuchwowych
export const terapiaStawowSkroniowoZuchwowychService: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#terapia-stawow-skroniowo-zuchwowych",
  "name": "Terapia stawów skroniowo-żuchwowych",
  "description": "Specjalistyczne leczenie dysfunkcji stawu żuchwowego (TMJ). Pomoc przy bólach szczęki, trzaskaniu, ograniczeniu otwierania ust i bruksizmie.",
  "provider": provider,
  "category": "Fizjoterapia stomatologiczna",
  "duration": "PT50M",
  "procedureType": "Temporomandibular joint (TMJ) osteopathic and manual therapy",
  "bodyLocation": ["Stawy skroniowo-żuchwowe", "Mięśnie żucia", "Czaszka", "Odcinek szyjny kręgosłupa"],
  "preparation": "Higiena jamy ustnej przed wizytą (część technik wykonywana jest wewnątrz jamy ustnej w rękawiczkach jednorazowych).",
  "followup": "Autoterapia mięśni żucia, zalecenia relaksacyjne i współpraca ze stomatologiem/ortodontą.",
  "offers": createServiceOffer("#terapia-stawow-skroniowo-zuchwowych")
};

// 11. Terapia wisceralna (eksportowana także jako osteopatiaWisceralna)
export const osteopatiaWisceralna: Service = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "#osteopatia-wisceralna",
  "name": "Terapia wisceralna",
  "description": "Unikalna metoda pracy z narządami wewnętrznymi poprzez delikatny dotyk. Poprawia funkcjonowanie układu trawiennego, oddechowego i krążenia. Odblokuje napięcia głębokie.",
  "provider": provider,
  "category": "Osteopatia wisceralna",
  "duration": "PT50M",
  "procedureType": "Visceral osteopathic treatment",
  "bodyLocation": ["Narządy jamy brzusznej", "Narządy klatki piersiowej", "Przepona", "Miednica"],
  "preparation": "Lekki posiłek najpóźniej na 2 godziny przed zabiegiem, luźny strój.",
  "followup": "Zalecenia dietetyczne, oddechowe oraz ćwiczenia wspierające ruchomość narządów wewnętrznych.",
  "offers": createServiceOffer("#osteopatia-wisceralna")
};

// Eksport wszystkich 11 usług
export const allServices: Service[] = [
  konsultacjaOsteopatycznaService,
  fizjoterapiaService,
  fizjoterapiaUroginekologicznaService,
  manipulacjaPowieziSteccoService,
  manipulacjaStawowService,
  osteopatiaPediatrycznaService,
  stanOstryTerapiaWisceralnaService,
  osteopatiaKranialna,
  terapiaManualna,
  terapiaStawowSkroniowoZuchwowychService,
  osteopatiaWisceralna,
];
