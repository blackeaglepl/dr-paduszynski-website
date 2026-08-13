# ZADANIA - Dr Jarema Paduszyński Website

## 🟢 Wykonane

- [x] **[2025-08-11]** Inicjalizacja projektu Astro z szablonem blog
- [x] **[2025-08-11]** Konfiguracja Tailwind CSS z paletą medyczną
- [x] **[2025-08-11]** Dodanie fontów medycznych (Quicksand + Inter)
- [x] **[2025-08-11]** Konfiguracja responsive typography (mobile/desktop)
- [x] **[2025-08-11]** Utworzenie PROJECT_CONTEXT.md
- [x] **[2025-08-11]** Konfiguracja globalnych styli CSS
- [x] **[2025-08-11]** Test dev server i weryfikacja konfiguracji
- [x] **[2025-08-11]** Utworzenie 4 podstawowych stron: O mnie, Cennik, Blog, Kontakt
- [x] **[2025-08-11]** Aktualizacja nawigacji w Header.astro z polskimi nazwami
- [x] **[2025-08-11]** Aktualizacja consts.ts z danymi medycznymi
- [x] **[2025-08-11]** Dodanie Hero Section na stronie głównej z gradient background
- [x] **[2025-08-11]** Implementacja standardowych przycisków CTA (Primary/Secondary)
- [x] **[2025-08-11]** Dodanie komponentów `Header.astro`, `BaseHead.astro`, `Footer.astro`, `FormattedDate.astro` i layoutu `BlogPost.astro`; działająca nawigacja do `/`, `/cennik`, `/blog`, `/kontakt`
- [x] **[2025-08-11]** Zwiększenie odstępów między linkami w navbarze (`Header.astro`) dla lepszej czytelności (desktop i mobile)
- [x] **[2025-08-11]** Dodanie zwięzłych komentarzy sekcyjnych do `HeroSection.astro`
- [x] **[2025-08-11]** Dostosowanie wyglądu `HeroSection.astro` do makiety (gradient overlay, styl overlay nav, typografia H1 z tokenów, dopracowane rating/CTA)
- [x] **[2025-08-11]** Dodanie sekcji statystyk zaufania (`StatsSection.astro`) pod hero — 4 kolumny: 20+ lat doświadczenia, 500+ wyleczonych pacjentów, 10 000+ godzin poświęconych pacjentom, 50+ certyfikatów i szkoleń
- [x] **[2025-08-12]** Podmiana obrazów w `TherapistAndOsteopathySection.astro` na `src/assets/portret1.jpg` i `src/assets/gallery4.jpg`
- [x] **[2025-08-12]** Lekkie animacje wejścia sekcji (IntersectionObserver + Tailwind) bez zewnętrznych bibliotek
- [x] **[2025-08-12]** `TherapistAndOsteopathySection.astro`: zwiększenie szerokości kolumny i obrazu (okrągłe zdjęcie, większy rozmiar, `md:grid-cols-[auto_1fr]`, `md:h-56 md:w-56`)
- [x] **[2025-08-12]** Dodanie sekcji „Pomagam w” – komponent `SpecializationsSection.astro` (3 kolumny, separatory, responsywny układ) i wpięcie do `src/pages/index.astro`
- [x] **[2025-08-12]** Delikatne zwiększenie marginesu nad opisem lokalizacji w `ClinicGallerySection.astro` (`mt-10 md:mt-12` → `mt-12 md:mt-14`)
- [x] **[2025-08-12]** Implementacja systemu wielojęzyczności (i18n) - dodanie obsługi PL/EN z przełącznikiem w Header

- [x] **[2025-08-13]** Ustawienie linku CTA "Zapisz się" do profilu ZnanyLekarz we wszystkich miejscach (Hero na stronie głównej, domyślny `ctaHref` w `TreatmentSelector.astro`).
- [x] **[2025-08-18]** Tymczasowa łatka typów: dodano `src/types/astro-kebabkeys.d.ts` z eksportem `KebabKeys` dla kompatybilności z Astro 5.12.9 (błąd TS2694)
 - [x] **[2025-08-18]** Dodano sekcję pre-footer z logo (`PreFooterLogoSection.astro`) i wpięto pod `TestimonialsSection` na stronie głównej
 - [x] **[2025-08-18]** `TreatmentSelector.astro`: dodano autoplay co 6s z pauzą podczas hover nad karuzelą, restart po interakcji
 - [x] **[2025-08-19]** Dodano tło `tlo3.jpg` do sekcji Hero na stronie bloga
 - [x] **[2025-08-19]** Wyłączono blog w wersji EN: ukryto link w `Header.astro` i `Footer.astro` dla EN, przekierowano przełącznik języka z `/blog/` na `/en/`, pozostawiono pusty placeholder pliku `src/pages/en/blog/index.astro` jako tymczasowe zabezpieczenie.
- [x] **[2026-08-13]** Dodano numer PWZ (1206) w sekcji brand stopki (`Footer.astro`).
 - [x] **[2025-08-19]** Dodano stronę błędu `404` (`src/pages/404.astro`) z `noindex` oraz spójnym layoutem (Header/CTA/Stopka) dla SEO i UX.
 - [x] **[2025-08-19]** Strona `kontakt`: dodano widget ZnanyLekarz (lazy loading) i podmieniono tło hero na `tlo4.png`.
  - [x] **[2025-08-19]** SEO: dodano `public/robots.txt` (Allow: /, link do sitemap) i potwierdzono generowanie sitemap przez `@astrojs/sitemap` (`sitemap-index.xml`/`sitemap.xml`).
- [x] **[2025-08-20]** Dodano komponent `GoogleMaps.astro` na stronę kontakt z integracją Google Maps API, responsywnym layoutem i obsługą błędów
- [x] **[2025-08-20]** Przerobiono stronę kontakt: utworzono `ContactAndWidget.astro` (dane kontaktowe + widget ZnanyLekarz w dwóch kolumnach) i `LocationMap.astro` (mapa na dole pełnej szerokości)

- [x] **[2025-08-27]** `TreatmentSelector.astro` (mobile): zwiększono min. wysokość sekcji i wysokość toru karuzeli, aby 3 przyciski zawsze mieściły się w panelu (bez zmian na desktopie)

- [x] **[2025-08-27]** Zwiększono odstęp nad sekcją „Certyfikaty i referencje” na desktopie: w `src/components/SpecializationsSection2.astro` zmieniono `md:pb-24` → `md:pb-32 lg:pb-36`.

- [x] **[2026-08-13]** `TreatmentSelector.astro` (mobile): paski postępu zastąpione standardowymi kropkami z odstępem (`gap-4`), usunięto animację wypełniania paska; kropki widoczne teraz na wszystkich szerokościach poniżej `md` (wcześniej dopiero od 370px).
- [x] **[2026-08-13]** Zmieniono etykietę nawigacji „Cennik” → „Cennik i usługi” (`utils/i18n.ts`, `Footer.astro`); w `Header.astro` zmniejszono odstępy nawigacji w paśmie `md` i dodano `whitespace-nowrap`, aby menu mieściło się w jednej linii.
- [x] **[2026-08-13]** Dodano komponent `PreparationSection.astro` („Jak przygotować się do wizyty”) i wpięto na dole strony cennika (PL i EN), pod `TreatmentSelector`. Dwa punkty: luźny strój oraz higiena jamy ustnej przy terapii stawów skroniowo-żuchwowych.

## 🟡 W trakcie
- [ ] [2025-08-12] Dodanie mocniejszego ease-out (quint) do animacji licznika w `StatsSection.astro`
- [ ] [2025-08-12] Dopracowanie typowania/lint dla plików `.astro` (fałszywe błędy `class` vs `className` w narzędziu lintera)
- [ ] [2025-08-12] Sekcja „Gabinet/Lokalizacja” – karuzela 3-stanowa z autoscrollem i opisem lokalizacji
- [ ] [2025-08-12] Komponent `TreatmentSelector.astro` – interaktywny wybór zabiegu (prawy panel jako karuzela 3 przycisków, blur 30px, zaokrąglenie 56px, logo w lewym górnym rogu)
- [ ] [2025-08-12] `TreatmentSelector.astro` – dopracowanie layoutu desktop: większa wysokość panelu, niżej cena/CTA/kropki, węższy opis
- [ ] [2025-08-12] Sekcja „Certyfikaty i referencje” – nowy komponent `CertificatesSection.astro` (karuzela A4, cień 12px 12px 35px rgba(0,0,0,0.15), rounded 30px)
  - [ ] [2025-08-13] Sekcja „Zalety osteopatii” – nowy komponent `BenefitsSection.astro` (3 kolumny z ikonami i opisami) – w trakcie
- [ ] [2025-08-18] Typografia nagłówków: w `TherapistAndOsteopathySection.astro` dodano `span` z `font-light` dla „Dr” i `font-semibold` dla nazwiska; przegląd pozostałych sekcji pod ten wzorzec

- [ ] [2025-09-02] Konfiguracja domeny `osteopatia-paduszynski.pl` na Netlify (zewnętrzny DNS u Zenbox: A na Netlify dla `@`, CNAME `www` → `*.netlify.app`, weryfikacja SSL i przekierowanie kanoniczne)

## 🔴 Do wykonania

### Strukturę i komponenty podstawowe

- [ ] Aktualizacja struktury katalogów zgodnie ze specyfikacją
- [ ] Utworzenie podstawowych komponentów UI (Header, Footer, HeroSection)
- [ ] Implementacja layout główny + blog layout
- [ ] Tworzenie komponentów CTA buttons (Primary/Secondary)

### Strona główna (O mnie)

- [ ] Hero Section z diagonal background
- [ ]
- [x] [2025-08-12] Sekcja "O Lekarzu" (zdjęcie + tekst, split layout) – dodana jako `TherapistAndOsteopathySection.astro`
- [x] [2025-08-12] Sekcja "Osteopatia Wyjaśnienie" – dodana pod blokiem o terapeucie
- [x] [2025-08-12] Sekcja "Gabinet/Lokalizacja" – dodano `ClinicGallerySection.astro` i wpięto do `index.astro`
- [ ] Sekcja "Zabiegi Overview" (card-based)
- [ ] Sekcja "Opinie Pacjentów" (dark section)
- [x] [2025-08-13] Sekcja "Opinie Pacjentów" – dodano komponent `TestimonialsSection.astro` (ciemna sekcja, karuzela 3-kolumnowa z auto-rotacją, klawiatura i gesty)
- [ ] FAQ (accordion style)
 - [x] [2025-08-13] Final CTA z widget ZnanyLekarz – dodano komponent `ZnanyLekarzWidget.astro` z lazy loading i wpięto do `index.astro`
 - [x] [2025-08-13] Sekcja "Zalety osteopatii" – dodano `BenefitsSection.astro` i wpięto do `index.astro`

### Pozostałe strony

- [ ] Strona Cennik - responsive tabela + card layout
- [ ] Strona Kontakt - formularz + mapa + widget ZnanyLekarz
- [ ] Blog - grid layout, featured article, search

### Schema Markup & SEO

- [x] **[2025-08-18]** Implementacja Local Business Schema (MedicalBusiness)
- [x] **[2025-08-18]** Review Schema (integracja ZnanyLekarz)
- [x] **[2025-08-18]** FAQ Schema
- [x] **[2025-08-18]** Person Schema (Dr Paduszyński)
- [x] **[2025-08-18]** Service Schema (zabiegi)
- [x] **[2025-08-18]** Organization Schema (klinika)

### Integracje

 - [x] [2025-08-13] Widget ZnanyLekarz (300x451px minimum, lazy loading) – zaimplementowano `ZnanyLekarzWidget.astro`
- [ ] Formularz kontaktowy z zabezpieczeniami
- [ ] Google Maps integracja
- [ ] Analytics (privacy-focused)

### Performance & Accessibility

- [ ] Image optimization (WebP/AVIF + fallback)
- [ ] Lazy loading implementacja
- [ ] WCAG 2.1 AA compliance check
- [ ] Core Web Vitals optimization
- [ ] Meta tags (Open Graph, Twitter Cards)

### Content & Copy

- [ ] Copywriting dla wszystkich sekcji
- [ ] Przygotowanie obrazków medycznych/gabinetu
- [ ] Artykuły blog o osteopatii
- [ ] Polityka prywatności (GDPR)
 - [x] [2025-08-19] Polityka prywatności (GDPR) – dodano stronę `src/pages/polityka-prywatnosci.astro` i link w stopce już wskazuje na tę podstronę

## 📋 Odkryte podczas pracy

_Dodawaj tutaj zadania odkryte w trakcie implementacji_

- [2025-08-18] Zaktualizować `astro` do wersji, która eksportuje `KebabKeys` w `astro/dist/type-utils`, a następnie usunąć plik `src/types/astro-kebabkeys.d.ts`.
 - [2025-08-18] Dopracować linki docelowe w sekcji „Social" stopki po akceptacji kanałów przez klienta.
 - [2025-08-18] Zmniejszono liczbę kolumn w `Footer.astro` do 3 i usunięto sekcję Social. Dodano `min-w-0` oraz `break-words` dla poprawnego zawijania na desktopie.
- [2025-08-18] **Ukończono kompletną implementację Schema Markup** - utworzono katalog `src/schemas/` z wszystkimi typami schema markup dla medycyny (LocalBusiness, Person, Organization, Services, FAQ, Reviews) plus komponent `SchemaMarkup.astro` z automatyczną integracją w layout'cie.

- [2025-08-19] Zmieniono format grafik hero z PNG na JPG: zaktualizowano importy `tlo1`, `tlo2` i placeholder w `TreatmentSelector.astro`.
 - [2025-08-19] Blog dostępny tylko w wersji polskiej (PL). Wersja EN usunięta z menu; ewentualne odnośniki powinny kierować na `/en/`.

### Audyt techniczny SEO [2026-08-13]

Wykonane:

- [x] [2026-08-13] Ceny wszystkich usług zmienione na 400 zł (`src/utils/services.ts`) wraz z synchronizacją schema markup (`schemas/services.ts`, `localBusiness.ts`, `faq.ts`, `SchemaMarkup.astro`).
- [x] [2026-08-13] Meta description usunięto emoji, dodano adres (ul. Jugowicka 35/5); dodano osobne `SITE_TITLE_EN`, `SITE_DESCRIPTION_EN`, `SITE_KEYWORDS_EN` dla `/en/`.
- [x] [2026-08-13] Dodano hreflang PL/EN/x-default — funkcja `getHreflangAlternates()` w `utils/i18n.ts` z jawną mapą par URL (obsługuje różne slugi `polityka-prywatnosci` ↔ `privacy-policy`; blog pominięty, bo istnieje tylko po polsku).
- [x] [2026-08-13] Usunięto duplikat tagów `geo.*`/`ICBM` z `BaseHead.astro` — jedynym źródłem jest `SchemaMarkup.astro`. Poprzednio `BaseHead` podawał współrzędne Rynku Głównego zamiast gabinetu.
- [x] [2026-08-13] Usunięto `lastmod: new Date()` z konfiguracji sitemap — stemplowanie wszystkich stron datą builda to fałszywy sygnał świeżości.
- [x] [2026-08-13] Usunięto martwy meta tag `revisit-after` i plik-artefakt `nul` z katalogu głównego.

- [x] [2026-08-13] Nagłówki bezpieczeństwa w `netlify.toml`: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (`max-age=86400` na start) oraz CSP w trybie `Report-Only`. Dodano też `Cache-Control: immutable` dla `/_astro/*`.
- [x] [2026-08-13] Numer telefonu w sekcji kontaktu (`ContactAndWidget.astro`) owinięty w `<a href="tel:">` — działa w wersji PL i EN.

- [x] [2026-08-13] Ujednolicono `sameAs` we wszystkich 5 definicjach schema na pełny URL ZnanyLekarz (wcześniej część wskazywała skrócony adres zwracający 301).
- [x] [2026-08-13] Naprawiono martwe obrazy w schema — wszystkie 8 URL-i (`logo`, `image`) prowadziło do nieistniejących plików. Wygenerowano z `src/assets` zoptymalizowane kopie w `public/`: `logo.png`, `gabinet-wnetrze.jpg`, `gabinet-sala-zabiegow.jpg`, `gabinet-stol-terapeutyczny.jpg`, `dr-paduszynski-portret.jpg`. Logo pochodzi z `logo_szare.svg` (wersja `logo_osteopatia.svg` jest biała i byłaby niewidoczna).

Do zrobienia:

- [ ] **Po wdrożeniu:** sprawdzić konsolę przeglądarki na `/kontakt/` i `/cennik/` pod kątem raportów CSP. Gdy brak naruszeń — zamienić `Content-Security-Policy-Report-Only` na `Content-Security-Policy` i podnieść HSTS `max-age` do 31536000.
- [ ] **Optymalizacja obrazów** — `tlo4.png` waży 2,6 MB, `portret1.jpg` 1,4 MB. 27 tagów `<img>` w komponentach omija `astro:assets` (brak WebP/AVIF i `srcset`), żaden nie ma `loading="lazy"`, tylko jeden ma `width`/`height` (ryzyko CLS).
- [ ] **Numery telefonu nieklikalne** — na `/kontakt/` numer występuje 4 razy, ale tylko raz jako `<a href="tel:">`. Meta `format-detection: telephone=no` blokuje automatyczne wykrywanie pozostałych.
- [ ] **Rozbieżny numer telefonu** — meta description PL podaje `12 346 55 44`, a stopka i całe schema `+48 667 762 227`. Ujednolicić (NAP).
- [ ] Self-hosting fontów Inter/Quicksand zamiast render-blocking z `fonts.googleapis.com`.
- [ ] `NODE_VERSION = "18"` w `netlify.toml` — Node 18 po EOL (kwiecień 2025), podnieść do 20/22.
- [ ] **Pilne/bezpieczeństwo:** token GitHub zapisany jawnie w URL-u `git remote` (`.git/config`) — unieważnić i przejść na SSH lub credential manager.

---

**Uwagi:**

- Każde zadanie oznaczaj datą rozpoczęcia [RRRR-MM-DD]
- Po zakończeniu przenoś do sekcji "Wykonane"
- Priorytety: Najpierw podstawowa struktura, potem content, na końcu optymalizacje
