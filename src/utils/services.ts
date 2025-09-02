import { type Locale } from './i18n';

export interface ServiceItem {
  name: string;
  price: string;
  description: string;
}

// Tłumaczenia usług
const servicesTranslations = {
  pl: [
    {
      name: 'Konsultacja osteopatyczna',
      price: '350 zł',
      description: 'Pierwsza wizyta to kompleksowe badanie i wywiad medyczny. Opracowanie indywidualnego planu terapii dostosowanego do Twoich potrzeb. Dowiesz się co dokładnie się dzieje z Twoim ciałem.',
    },
    {
      name: 'Wizyta fizjoterapeutyczna',
      price: '350 zł',
      description: 'Kompleksowa terapia fizjoterapeutyczna obejmująca diagnostykę funkcjonalną, ćwiczenia terapeutyczne i techniki manualne. Skuteczna rehabilitacja po urazach i w chorobach przewlekłych.',
    },
    {
      name: 'Fizjoterapia uroginekologiczna',
      price: '350 zł',
      description: 'Specjalistyczna terapia problemów dna miednicy, nietrzymania moczu i dysfunkcji seksualnych. Bezpieczne i skuteczne metody dla kobiet w każdym wieku.',
    },
    {
      name: 'Manipulacja powięzi wg Stecco',
      price: '350 zł',
      description: 'Innowacyjna metoda terapii powięziowej według Luigi Stecco. Precyzyjna praca z punktami densyfikacji powięzi, przywracająca prawidłową biomechanikę całego ciała.',
    },
    {
      name: 'Manipulacja stawów',
      price: '350 zł',
      description: 'Precyzyjne techniki osteopatyczne przywracające pełną ruchomość stawów. Bezpieczne manipulacje wysokiej prędkości i niskiej amplitudy dla wszystkich stawów ciała.',
    },
    {
      name: 'Osteopatia pediatryczna',
      price: '350 zł',
      description: 'Delikatna terapia osteopatyczna dla dzieci i niemowląt. Pomoc przy kolkach, problemach z karmieniem, asymetriach i opóźnieniach rozwojowych. Bezpieczne techniki dostosowane do wieku.',
    },
    {
      name: 'Stan ostry - Terapia wisceralna',
      price: '350 zł',
      description: 'Intensywna terapia narządów wewnętrznych w stanach ostrych. Szybka ulga w dolegliwościach trawiennych, oddechowych i krążeniowych. Pilna interwencja osteopatyczna.',
    },
    {
      name: 'Terapia czaszkowo-krzyżowa',
      price: '350 zł',
      description: 'Subtelna metoda pracy z płynem mózgowo-rdzeniowym i systemem czaszkowo-krzyżowym. Głęboka relaksacja, redukcja stresu i poprawa funkcji układu nerwowego.',
    },
    {
      name: 'Terapia manualna',
      price: '350 zł',
      description: 'Klasyczne techniki terapii manualnej obejmujące mobilizacje, manipulacje i techniki tkanek miękkich. Kompleksowe podejście do problemów układu ruchu.',
    },
    {
      name: 'Terapia stawów skroniowo-żuchwowych',
      price: '350 zł',
      description: 'Specjalistyczne leczenie dysfunkcji stawu żuchwowego (TMJ). Pomoc przy bólach szczęki, trzaskaniu, ograniczeniu otwierania ust i bruksizmie.',
    },
    {
      name: 'Terapia wisceralna',
      price: '350 zł',
      description: 'Unikalna metoda pracy z narządami wewnętrznymi poprzez delikatny dotyk. Poprawia funkcjonowanie układu trawiennego, oddechowego i krążenia. Odblokuje napięcia głębokie.',
    },
  ],
  en: [
    {
      name: 'Osteopathic consultation',
      price: '350 PLN',
      description: 'The first visit includes a comprehensive examination and medical interview. Development of an individual therapy plan tailored to your needs. You will learn exactly what is happening with your body.',
    },
    {
      name: 'Physiotherapy visit',
      price: '350 PLN',
      description: 'Comprehensive physiotherapy including functional diagnostics, therapeutic exercises and manual techniques. Effective rehabilitation after injuries and in chronic diseases.',
    },
    {
      name: 'Urogynecological physiotherapy',
      price: '350 PLN',
      description: 'Specialized therapy for pelvic floor problems, urinary incontinence and sexual dysfunction. Safe and effective methods for women of all ages.',
    },
    {
      name: 'Fascial manipulation according to Stecco',
      price: '350 PLN',
      description: 'Innovative fascial therapy method according to Luigi Stecco. Precise work with fascial densification points, restoring proper biomechanics of the entire body.',
    },
    {
      name: 'Joint manipulation',
      price: '350 PLN',
      description: 'Precise osteopathic techniques restoring full joint mobility. Safe high-velocity, low-amplitude manipulations for all joints of the body.',
    },
    {
      name: 'Pediatric osteopathy',
      price: '350 PLN',
      description: 'Gentle osteopathic therapy for children and infants. Help with colic, feeding problems, asymmetries and developmental delays. Safe techniques adapted to age.',
    },
    {
      name: 'Acute condition - Visceral therapy',
      price: '350 PLN',
      description: 'Intensive therapy of internal organs in acute conditions. Quick relief of digestive, respiratory and circulatory ailments. Emergency osteopathic intervention.',
    },
    {
      name: 'Craniosacral therapy',
      price: '350 PLN',
      description: 'Subtle method of working with cerebrospinal fluid and the craniosacral system. Deep relaxation, stress reduction and improvement of nervous system function.',
    },
    {
      name: 'Manual therapy',
      price: '350 PLN',
      description: 'Classic manual therapy techniques including mobilizations, manipulations and soft tissue techniques. Comprehensive approach to musculoskeletal problems.',
    },
    {
      name: 'Temporomandibular joint therapy',
      price: '350 PLN',
      description: 'Specialized treatment of temporomandibular joint (TMJ) dysfunction. Help with jaw pain, clicking, limited mouth opening and bruxism.',
    },
    {
      name: 'Visceral therapy',
      price: '350 PLN',
      description: 'Unique method of working with internal organs through gentle touch. Improves digestive, respiratory and circulatory function. Releases deep tensions.',
    },
  ],
} as const;

// Funkcja do pobierania usług w odpowiednim języku
export function getServicesList(locale: Locale): ServiceItem[] {
  return servicesTranslations[locale];
}

// Domyślna lista usług (polska) dla kompatybilności wstecznej
export const servicesList: ServiceItem[] = servicesTranslations.pl;


