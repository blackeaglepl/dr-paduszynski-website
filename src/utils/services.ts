export interface ServiceItem {
  name: string;
  price: string;
  description: string;
}

// Centralna lista usług wykorzystywana na stronie cennika i w komponentach UI
export const servicesList: ServiceItem[] = [
  {
    name: 'Konsultacja osteopatyczna',
    price: '350 zł',
    description:
      'Pierwsza wizyta to kompleksowe badanie i wywiad medyczny. Opracowanie indywidualnego planu terapii dostosowanego do Twoich potrzeb. Dowiesz się co dokładnie się dzieje z Twoim ciałem.',
  },
  {
    name: 'Wizyta fizjoterapeutyczna',
    price: '350 zł',
    description:
      'Kompleksowa terapia fizjoterapeutyczna obejmująca diagnostykę funkcjonalną, ćwiczenia terapeutyczne i techniki manualne. Skuteczna rehabilitacja po urazach i w chorobach przewlekłych.',
  },
  {
    name: 'Fizjoterapia uroginekologiczna',
    price: '350 zł',
    description:
      'Specjalistyczna terapia problemów dna miednicy, nietrzymania moczu i dysfunkcji seksualnych. Bezpieczne i skuteczne metody dla kobiet w każdym wieku.',
  },
  {
    name: 'Manipulacja powięzi wg Stecco',
    price: '350 zł',
    description:
      'Innowacyjna metoda terapii powięziowej według Luigi Stecco. Precyzyjna praca z punktami densyfikacji powięzi, przywracająca prawidłową biomechanikę całego ciała.',
  },
  {
    name: 'Manipulacja stawów',
    price: '350 zł',
    description:
      'Precyzyjne techniki osteopatyczne przywracające pełną ruchomość stawów. Bezpieczne manipulacje wysokiej prędkości i niskiej amplitudy dla wszystkich stawów ciała.',
  },
  {
    name: 'Osteopatia pediatryczna',
    price: '350 zł',
    description:
      'Delikatna terapia osteopatyczna dla dzieci i niemowląt. Pomoc przy kolkach, problemach z karmieniem, asymetriach i opóźnieniach rozwojowych. Bezpieczne techniki dostosowane do wieku.',
  },
  {
    name: 'Stan ostry - Terapia wisceralna',
    price: '350 zł',
    description:
      'Intensywna terapia narządów wewnętrznych w stanach ostrych. Szybka ulga w dolegliwościach trawiennych, oddechowych i krążeniowych. Pilna interwencja osteopatyczna.',
  },
  {
    name: 'Terapia czaszkowo-krzyżowa',
    price: '350 zł',
    description:
      'Subtelna metoda pracy z płynem mózgowo-rdzeniowym i systemem czaszkowo-krzyżowym. Głęboka relaksacja, redukcja stresu i poprawa funkcji układu nerwowego.',
  },
  {
    name: 'Terapia manualna',
    price: '350 zł',
    description:
      'Klasyczne techniki terapii manualnej obejmujące mobilizacje, manipulacje i techniki tkanek miękkich. Kompleksowe podejście do problemów układu ruchu.',
  },
  {
    name: 'Terapia stawów skroniowo-żuchwowych',
    price: '350 zł',
    description:
      'Specjalistyczne leczenie dysfunkcji stawu żuchwowego (TMJ). Pomoc przy bólach szczęki, trzaskaniu, ograniczeniu otwierania ust i bruksizmie.',
  },
  {
    name: 'Terapia wisceralna',
    price: '350 zł',
    description:
      'Unikalna metoda pracy z narządami wewnętrznymi poprzez delikatny dotyk. Poprawia funkcjonowanie układu trawiennego, oddechowego i krążenia. Odblokuje napięcia głębokie.',
  },
];


