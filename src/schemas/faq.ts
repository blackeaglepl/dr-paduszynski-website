// FAQ Schema dla często zadawanych pytań o osteopatię
// Zgodne z Schema.org FAQPage

import type { FAQPage, Question, Answer } from './types';

export const faqSchema: FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Czym jest osteopatia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Osteopatia to holistyczna metoda medycyny manualnej, która traktuje ciało jako całość. Osteopata używa specjalistycznych technik manualnych do diagnozowania i leczenia dysfunkcji układu mięśniowo-szkieletowego, nerwowego i narządowego. Główną zasadą osteopatii jest przekonanie, że ciało posiada naturalną zdolność do samouzdrawiania się."
      }
    },
    {
      "@type": "Question", 
      "name": "Czy osteopatia jest bezpieczna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Osteopatia wykonywana przez wykwalifikowanego specjalistę jest metodą bardzo bezpieczną. Dr Jarema Paduszyński posiada wieloletnie doświadczenie oraz certyfikaty z renomowanych szkół osteopatii. Przed każdym zabiegiem przeprowadza się szczegółowy wywiad i badanie, aby wykluczyć przeciwwskazania."
      }
    },
    {
      "@type": "Question",
      "name": "Na jakie dolegliwości pomoże osteopatia?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Osteopatia skutecznie pomaga przy bólach kręgosłupa, sztywności karku, bólach głowy, problemach z dyskiem, dolegliwościach stawowych, napięciach mięśniowych, po urazach sportowych oraz przy problemach postawy. Pomaga także w zaburzeniach snu, stresie i problemach trawiennych."
      }
    },
    {
      "@type": "Question",
      "name": "Ile trwa wizyta u osteopaty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pierwsza konsultacja osteopatyczna trwa około 60 minut i obejmuje szczegółowy wywiad, badanie oraz leczenie. Kolejne wizyty trwają 45-60 minut w zależności od rodzaju terapii. Dr Paduszyński poświęca każdemu pacjentowi tyle czasu, ile potrzeba dla uzyskania optymalnych rezultatów."
      }
    },
    {
      "@type": "Question",
      "name": "Czy potrzebne jest skierowanie do osteopaty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skierowanie lekarskie nie jest wymagane do wizyty u osteopaty. Można umówić się na wizytę bezpośrednio. Jeśli jednak posiada Pan/Pani wyniki badań obrazowych (RTG, MRI, USG) lub dokumentację medyczną dotyczącą problemu, warto je zabrać na pierwszą wizytę."
      }
    },
    {
      "@type": "Question", 
      "name": "Jak często należy chodzić do osteopaty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Częstotliwość wizyt zależy od charakteru problemu i indywidualnych potrzeb. W ostrych przypadkach wizyty mogą odbywać się 1-2 razy w tygodniu, przy problemach przewlekłych co 1-2 tygodnie. Dr Paduszyński zawsze ustala z pacjentem optymalny plan terapii."
      }
    },
    {
      "@type": "Question",
      "name": "Ile kosztuje wizyta u osteopaty w Krakowie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Konsultacja osteopatyczna kosztuje 350 PLN, terapia manualna od 350 PLN, fizjoterapia od 350 PLN.Szczegółowy cennik znajdą Państwo na stronie cennika lub mogą uzyskać informacje telefoniczne."
      }
    },
    {
      "@type": "Question",
      "name": "Jak przygotować się do wizyty u osteopaty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Należy założyć wygodny strój umożliwiający swobodne ruchy (strój sportowy). Warto zabrać ze sobą wyniki badań i dokumentację medyczną."
      }
    },
    {
      "@type": "Question",
      "name": "Czy osteopatia pomaga dzieciom?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, osteopatia pediatryczna to specjalność, która pomaga dzieciom przy wielu problemach: kolce, zaburzenia snu, problemy z koncentracją, wady postawy, po urazach porodowych. Dr Paduszyński posiada doświadczenie w pracy z młodymi pacjentami i stosuje delikatne, bezpieczne techniki."
      }
    },
    {
      "@type": "Question",
      "name": "Gdzie znajduje się gabinet w Krakowie?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Klinika Dr Jaremy Paduszyńskiego znajduje się w centrum Krakowa przy ul. Przykładowej 15/2. Dojazd jest możliwy komunikacją miejską oraz samochodem (dostępne miejsca parkingowe przy sklepie Żabka). Dokładna lokalizacja oraz mapa dojazdu znajdują się na stronie kontaktowej."
      }
    }
  ]
};