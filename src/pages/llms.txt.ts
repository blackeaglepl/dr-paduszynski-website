import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_EMAIL } from '../consts';
import { getServicesList } from '../utils/services';
import { faqSchema } from '../schemas/faq';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://osteopatia-paduszynski.pl').replace(/\/$/, '');
  const servicesPl = getServicesList('pl');

  const allPosts = await getCollection('blog', ({ data }) => data.draft !== true);
  const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const lines: string[] = [
    '# Klinika Osteopatii – dr Jarema Paduszyński (Osteopata w Krakowie | Osteopata Małopolska)',
    '',
    '> Oficjalna strona gabinetu osteopatii i fizjoterapii dr. Jaremy Paduszyńskiego – doświadczonego osteopaty w Krakowie i Małopolsce (ul. Jugowicka 35/5, Kraków). Ponad 29 lat doświadczenia zawodowego, ponad 2000 wyleczonych pacjentów, stopień doktora w dziedzinie fizjoterapii oraz prawo wykonywania zawodu fizjoterapeuty (nr PWZ: 1206). Specjalizacja w holistycznej terapii manualnej dorosłych, dzieci i niemowląt.',
    '',
    'Klinika Osteopatii dr Jarema Paduszyński to profesjonalny gabinet, w którym przyjmuje dyplomowany osteopata w Krakowie (województwo małopolskie). Oferujemy kompleksową diagnostykę funkcjonalną oraz leczenie zaburzeń całego ciała w ujęciu osteopatycznym i fizjoterapeutycznym. Gabinet mieści się w południowej części Krakowa (ul. Jugowicka 35/5, I piętro – okolice dzielnic Podgórze, Borek Fałęcki, Kliny, Ruczaj, Swoszowice), tuż przy Zakopiance i obwodnicy Krakowa. Dzięki temu jest to łatwo dostępny osteopata w Małopolsce z wygodnym dojazdem zarówno z każdej dzielnicy Krakowa, jak i z okolicznych miast regionu: Myślenice, Skawina, Wieliczka, Libertów, Mogilany, Świątniki Górne, Dobczyce czy Wadowice.',
    '',
    '- Lekarz / Terapeuta prowadzący: dr Jarema Paduszyński – osteopata Kraków, fizjoterapeuta Kraków, osteopata Małopolska (nr PWZ: 1206)',
    '- Adres gabinetu: ul. Jugowicka 35/5, 30-443 Kraków, województwo małopolskie, Polska (I piętro)',
    '- Obszar działania (Local SEO): Kraków (południe, centrum) oraz cała Małopolska (m.in. Myślenice, Skawina, Wieliczka, Libertów, Mogilany)',
    '- Telefon rejestracji: +48 667 762 227',
    `- E-mail: ${SITE_EMAIL}`,
    '- Rezerwacja wizyt online (ZnanyLekarz): https://www.znanylekarz.pl/jarema-paduszynski/osteopata-fizjoterapeuta/krakow',
    '- Cena wizyty: 400 zł (wszystkie konsultacje i terapie specjalistyczne; dorośli do 50 min, dzieci do 30 min)',
    '- Języki przyjęć: polski (PL), angielski (EN)',
    '- Specjalizacje główne: osteopata Kraków, osteopata dziecięcy Kraków (osteopatia pediatryczna dla niemowląt i dzieci), fizjoterapia stomatologiczna Kraków, fizjoterapia twarzowo-szczękowa (stawy skroniowo-żuchwowe TMJ / SSŻ), fizjoterapia uroginekologiczna, terapia wisceralna, terapia czaszkowo-krzyżowa, manipulacja powięzi wg Stecco',
    '- Dolegliwości, w których pomagamy: bóle kręgosłupa i stawów, rwa kulszowa, dyskopatie, bóle głowy i migreny, zaburzenia stawu skroniowo-żuchwowego (bruksizm, trzaski, zaciskanie zębów), zaburzenia czynnościowe układu pokarmowego (zaparcia, zgagi, refluks), szumy uszne, kręcz szyi, u dzieci i niemowląt: kolki, ulewania, asymetrie ułożeniowe, zniekształcenia kształtu główki, niedrożność kanalików łzowych',
    '',
    '## Główne strony',
    '',
    `- [Osteopata Kraków – O mnie (Strona główna)](${baseUrl}/): Profil zawodowy dr. Jaremy Paduszyńskiego (osteopata w Krakowie i Małopolsce), doświadczenie, wyjaśnienie metod osteopatii, galeria gabinetu, certyfikaty oraz opinie pacjentów.`,
    `- [Cennik i usługi osteopatyczne w Krakowie](${baseUrl}/cennik/): Aktualny wykaz wszystkich zabiegów osteopatycznych i fizjoterapeutycznych (400 zł) wraz z opisem przebiegu terapii oraz wskazówkami, jak przygotować się do wizyty.`,
    `- [Kontakt i rezerwacja wizyty – Gabinet Osteopatii Kraków](${baseUrl}/kontakt/): Dane adresowe gabinetu przy ul. Jugowickiej 35/5 w Krakowie (Małopolska), godziny przyjęć, mapa dojazdu oraz kalendarz rezerwacji online ZnanyLekarz.`,
    `- [Blog o osteopatii i fizjoterapii](${baseUrl}/blog/): Artykuły edukacyjne i porady eksperckie dotyczące leczenia bólu kręgosłupa, ergonomii pracy oraz terapii manualnej.`,
    `- [Pełna dokumentacja kontekstowa dla AI (llms-full.txt)](${baseUrl}/llms-full.txt): Kompletny plik tekstowy zawierający pełny opis usług, cennik, FAQ, zasady przygotowania do wizyty oraz pełną treść artykułów blogowych.`,
    '',
    '## Oferowane zabiegi i cennik (400 zł)',
    '',
    ...servicesPl.map(
      (s) => `- [${s.name} – Kraków (${s.price})](${baseUrl}/cennik/): ${s.description}`
    ),
    '',
    '## Artykuły edukacyjne (Blog)',
    '',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${baseUrl}/blog/${post.slug}/): ${post.data.description}`
    ),
    '',
    '## Najczęściej zadawane pytania (FAQ)',
    '',
    ...faqSchema.mainEntity.map(
      (q) => `- [${q.name}](${baseUrl}/): ${q.acceptedAnswer.text}`
    ),
    '',
    '## English Version (EN)',
    '',
    `- [About – Osteopath in Kraków & Lesser Poland (Małopolska)](${baseUrl}/en/): Overview of Dr Jarema Paduszyński's osteopathy and physiotherapy practice in Kraków.`,
    `- [Pricing and Services](${baseUrl}/en/cennik/): Transparent pricing (400 PLN per visit), descriptions of osteopathic treatments, and patient preparation guide.`,
    `- [Contact and Online Booking](${baseUrl}/en/kontakt/): Clinic address (ul. Jugowicka 35/5, Kraków, Małopolska), office hours, directions, and ZnanyLekarz appointment calendar.`,
    '',
    '## Optional',
    '',
    `- [Polityka prywatności (PL)](${baseUrl}/polityka-prywatnosci/): Informacje o przetwarzaniu danych osobowych (RODO) i polityce prywatności gabinetu.`,
    `- [Privacy Policy (EN)](${baseUrl}/en/privacy-policy/): GDPR and privacy policy information in English.`,
    `- [Kanał RSS bloga](${baseUrl}/rss.xml): Subskrypcja najnowszych artykułów o osteopatii i fizjoterapii.`,
    `- [Mapa witryny XML](${baseUrl}/sitemap-index.xml): Indeks mapy strony dla wyszukiwarek.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
