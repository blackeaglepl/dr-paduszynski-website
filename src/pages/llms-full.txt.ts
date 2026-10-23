import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_EMAIL } from '../consts';
import { getServicesList } from '../utils/services';
import { faqSchema } from '../schemas/faq';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://osteopatia-paduszynski.pl').replace(/\/$/, '');
  const servicesPl = getServicesList('pl');
  const servicesEn = getServicesList('en');

  const allPosts = await getCollection('blog', ({ data }) => data.draft !== true);
  const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const lines: string[] = [
    '# Klinika Osteopatii – dr Jarema Paduszyński (Osteopata w Krakowie | Osteopata Małopolska – Pełna dokumentacja kontekstowa)',
    '',
    '> Kompletny zbiór informacji o Klinice Osteopatii dr. Jaremy Paduszyńskiego – osteopaty w Krakowie i Małopolsce (ul. Jugowicka 35/5, 30-443 Kraków): profil specjalisty, pełny opis zabiegów i cennika (PL/EN), przygotowanie do wizyty, FAQ oraz pełna treść artykułów edukacyjnych z bloga.',
    '',
    '## 1. Informacje podstawowe, lokalizacja (Kraków / Małopolska) i kontakt (NAP)',
    '',
    '- **Nazwa placówki:** Klinika Osteopatii dr Jarema Paduszyński',
    '- **Specjalista:** dr Jarema Paduszyński – osteopata w Krakowie, osteopata Małopolska, fizjoterapeuta Kraków, doktor nauk w dziedzinie fizjoterapii',
    '- **Numer Prawa Wykonywania Zawodu (PWZ):** 1206',
    '- **Doświadczenie:** 29+ lat doświadczenia klinicznego i dydaktyczno-naukowego, 2000+ wyleczonych pacjentów, 15 000+ godzin pracy z pacjentami, 50+ certyfikatów i szkoleń podyplomowych',
    '- **Adres:** ul. Jugowicka 35/5, 30-443 Kraków, województwo małopolskie, Polska (I piętro)',
    '- **Obszar obsługi (Kraków i Małopolska):** Południowy Kraków (Borek Fałęcki, Podgórze, Kliny, Ruczaj, Swoszowice, Kurdwanów), całe miasto Kraków oraz miejscowości województwa małopolskiego (Myślenice, Skawina, Wieliczka, Libertów, Mogilany, Świątniki Górne, Dobczyce, Wadowice)',
    '- **Współrzędne GPS:** 50.007685, 19.934027 (blisko Zakopianki i obwodnicy A4/S7)',
    '- **Telefon:** +48 667 762 227',
    `- **E-mail:** ${SITE_EMAIL}`,
    `- **Strona internetowa:** ${baseUrl}/`,
    '- **Rezerwacja online (ZnanyLekarz):** https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow',
    '- **Opinie Google:** https://g.page/r/CeL4hiVNs-NdEBM/review (150+ pozytywnych opinii pacjentów)',
    '',
    '## 2. Specjalizacje i obszary terapii (Osteopata i Fizjoterapeuta Kraków)',
    '',
    '- Osteopatia strukturalna, wisceralna i czaszkowo-krzyżowa (kranio-sakralna) w Krakowie',
    '- Fizjoterapia stomatologiczna Kraków',
    '- Fizjoterapia twarzowo-szczękowa (terapia stawów skroniowo-żuchwowych – TMJ / SSŻ)',
    '- Fizjoterapia uroginekologiczna Kraków',
    '- Osteopata dziecięcy Kraków (osteopatia pediatryczna dla niemowląt i dzieci)',
    '- Terapia wisceralna (narządów wewnętrznych – także w stanach ostrych)',
    '- Manipulacja powięzi wg Luigi Stecco',
    '- Terapia manualna kręgosłupa i stawów obwodowych',
    '',
    '### Dolegliwości, w których pomaga gabinet:',
    '- Zaburzenia czynnościowe układu pokarmowego (zaparcia, zgagi, refluks, wzdęcia)',
    '- Zaburzenia funkcjonalne stawu skroniowo-żuchwowego (bruksizm, bóle szczęki, trzaski, ograniczenie otwierania ust)',
    '- Bóle głowy, migreny, zawroty głowy, szumy uszne',
    '- Bóle kręgosłupa (szyjnego, piersiowego, lędźwiowego), rwa kulszowa, dyskopatie, napięcia kostne i mięśniowe, kręcz szyi',
    '- Dolegliwości u niemowląt i dzieci: kolki, ulewania, zaparcia, asymetrie ułożeniowe, korygowanie zniekształceń kształtu główki, odblokowywanie kanalików łzowych',
    '- Przewlekły stres i napięcia psychosomatyczne',
    '',
    '## 3. Pełny cennik i opis zabiegów (PL)',
    '',
    'Ceny dotyczą pojedynczej wizyty w gabinecie w Krakowie. Czas trwania wizyty: do 50 minut (dorośli), do 30 minut (dzieci).',
    '',
    ...servicesPl.map(
      (s) => `### ${s.name} — ${s.price}\n${s.description}\n`
    ),
    '## 4. Jak przygotować się do wizyty',
    '',
    '1. **Wygodny, luźny strój:** Najlepiej sprawdzają się legginsy, spodenki oraz t-shirt z cienkiego materiału. Grube i sztywne materiały, takie jak jeans, utrudniają wyczucie napięć oraz punktów kostnych. W gabinecie jest miejsce do przebrania się i wieszak na ubrania.',
    '2. **Higiena jamy ustnej przy terapii stawów skroniowo-żuchwowych (SSŻ):** Część technik w terapii SSŻ wykonywana jest wewnątrz jamy ustnej w jednorazowych rękawiczkach. Prosimy o umycie zębów przed wizytą lub skorzystanie z płynu do płukania dostępnego na miejscu. W przypadku aft, opryszczki lub świeżo usuniętego zęba stosowane są techniki zewnętrzne lub termin jest przenoszony.',
    '',
    '## 5. Najczęściej zadawane pytania (FAQ – Osteopata Kraków)',
    '',
    ...faqSchema.mainEntity.map(
      (q) => `### ${q.name}\n${q.acceptedAnswer.text}\n`
    ),
    '## 6. Services and Pricing in English (EN – Osteopath in Kraków, Małopolska)',
    '',
    ...servicesEn.map(
      (s) => `### ${s.name} — ${s.price}\n${s.description}\n`
    ),
    '## 7. Artykuły edukacyjne z bloga (Pełna treść)',
    '',
    ...posts.map(
      (post) =>
        `### ${post.data.title}\n- URL: ${baseUrl}/blog/${post.slug}/\n- Data publikacji: ${post.data.pubDate.toISOString().split('T')[0]}\n- Opis: ${post.data.description}\n\n${post.body}\n`
    ),
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
