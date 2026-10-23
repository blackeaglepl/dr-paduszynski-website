// FAQ Schema oraz dane pytań i odpowiedzi dla komponentu FaqSection.astro i llms.txt
// Zgodne z Schema.org FAQPage

import type { FAQPage } from './types';
import type { Locale } from '../utils/i18n';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: Record<Locale, FaqItem[]> = {
  pl: [
    {
      question: "Jak przebiega pierwsza wizyta u osteopaty i ile trwa?",
      answer: "Pierwsza wizyta obejmuje szczegółowy wywiad medyczny, badanie palpacyjne oraz testy funkcjonalne, po których przechodzimy bezpośrednio do terapii manualnej i omówienia planu leczenia. Wizyta osoby dorosłej trwa do 50 minut, natomiast wizyta dziecka lub niemowlęcia do 30 minut."
    },
    {
      question: "Czy na wizytę potrzebne jest skierowanie i jak się do niej przygotować?",
      answer: "Skierowanie lekarskie nie jest wymagane. Warto zabrać posiadane wyniki badań obrazowych (RTG, MRI, USG) lub dokumentację medyczną. Najlepiej założyć wygodny, luźny strój z cienkiego materiału (np. legginsy, spodenki, t-shirt). Przy terapii stawów skroniowo-żuchwowych (SSŻ) część technik wykonywana jest wewnątrz jamy ustnej w jednorazowych rękawiczkach. Z racji na specyfikę zabiegu konieczne jest zachowanie higieny jamy ustnej (na miejscu dostępny jest antybakteryjny płyn do płukania jamy ustnej)."
    },
    {
      question: "Z jakimi dolegliwościami u dorosłych i dzieci warto zgłosić się do osteopaty?",
      answer: "Pomagam osobom dorosłym m.in. w bólach kręgosłupa i stawów, rwie kulszowej, dyskopatiach, bólach głowy i migrenach, szumach usznych, zaburzeniach stawów skroniowo-żuchwowych (bruksizm, trzaski, zaciskanie zębów), dolegliwościach wisceralnych (refluks, zgaga, zaparcia) oraz uroginekologicznych. W ramach osteopatii pediatrycznej pracuję z niemowlętami i dziećmi przy kolkach, ulewaniach, asymetriach ułożeniowych, zniekształceniach kształtu główki oraz niedrożności kanalików łzowych."
    },
    {
      question: "Ile kosztuje wizyta u osteopaty i jak umówić wizytę?",
      answer: "Koszt pojedynczej wizyty - zarówno konsultacji osteopatycznej, jak i każdej terapii specjalistycznej - wynosi 400 zł. Termin można zarezerwować online przez kalendarz ZnanyLekarz lub telefonicznie pod numerem +48 667 762 227."
    },
    {
      question: "Jaka jest dokładna lokalizacja mojego gabinetu w Krakowie?",
      answer: "Gabinet mieści się w południowej części Krakowa przy ul. Jugowickiej 35/5 (I piętro, 30-443 Kraków - okolice Borka Fałęckiego, Podgórza i Klinów). Położenie tuż przy Zakopiance i obwodnicy Krakowa zapewnia wygodny dojazd zarówno z każdej dzielnicy Krakowa, jak i z okolicznych miejscowości Małopolski (m.in. Myślenic, Skawiny, Wieliczki, Libertowa czy Mogilan)."
    }
  ],
  en: [
    {
      question: "What does the first osteopathic visit look like and how long does it take?",
      answer: "The first visit includes a detailed medical interview, palpation examination, and functional tests, followed directly by targeted manual therapy and an individual treatment plan. Visits last up to 50 minutes for adults and up to 30 minutes for children and infants."
    },
    {
      question: "Do I need a doctor's referral and how should I prepare for the appointment?",
      answer: "A medical referral is not required. If you have imaging results (X-ray, MRI, ultrasound) or medical records, please bring them along. Wear comfortable, loose clothing made of thin fabric (e.g., leggings, shorts, a t-shirt). For temporomandibular joint (TMJ) therapy, some techniques are performed inside the oral cavity using disposable gloves, so please brush your teeth before the visit (mouthwash is also available at the clinic)."
    },
    {
      question: "What conditions in adults and children can osteopathy help with?",
      answer: "For adults, we treat spine and joint pain, sciatica, discopathy, headaches and migraines, tinnitus, temporomandibular joint disorders (bruxism, jaw clicking), visceral complaints (reflux, heartburn, constipation), and urogynecological conditions. In pediatric osteopathy, we help infants and children with colic, reflux, postural asymmetries, head shape deformations, and blocked tear ducts."
    },
    {
      question: "How much does an osteopath visit in Kraków cost and how can I book?",
      answer: "The cost of a single visit—whether an osteopathic consultation or specialized therapy—is 400 PLN. You can book an appointment online via the ZnanyLekarz calendar or by calling +48 667 762 227."
    },
    {
      question: "Where is the clinic located and is it easy to reach from Kraków and Małopolska?",
      answer: "The clinic is located in southern Kraków at ul. Jugowicka 35/5 (1st floor, 30-443 Kraków – near Borek Fałęcki, Podgórze, and Kliny). Its proximity to the Zakopianka route and Kraków bypass ensures easy access from all districts of Kraków as well as nearby towns across Małopolska (including Myślenice, Skawina, Wieliczka, Libertów, and Mogilany)."
    }
  ]
};

export function getFaqSchema(locale: Locale = 'pl'): FAQPage {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems[locale].map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export const faqSchema: FAQPage = getFaqSchema('pl');
