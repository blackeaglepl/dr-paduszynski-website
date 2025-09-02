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
 - [x] **[2025-08-19]** Dodano stronę błędu `404` (`src/pages/404.astro`) z `noindex` oraz spójnym layoutem (Header/CTA/Stopka) dla SEO i UX.
 - [x] **[2025-08-19]** Strona `kontakt`: dodano widget ZnanyLekarz (lazy loading) i podmieniono tło hero na `tlo4.png`.
  - [x] **[2025-08-19]** SEO: dodano `public/robots.txt` (Allow: /, link do sitemap) i potwierdzono generowanie sitemap przez `@astrojs/sitemap` (`sitemap-index.xml`/`sitemap.xml`).
- [x] **[2025-08-20]** Dodano komponent `GoogleMaps.astro` na stronę kontakt z integracją Google Maps API, responsywnym layoutem i obsługą błędów
- [x] **[2025-08-20]** Przerobiono stronę kontakt: utworzono `ContactAndWidget.astro` (dane kontaktowe + widget ZnanyLekarz w dwóch kolumnach) i `LocationMap.astro` (mapa na dole pełnej szerokości)

- [x] **[2025-08-27]** `TreatmentSelector.astro` (mobile): zwiększono min. wysokość sekcji i wysokość toru karuzeli, aby 3 przyciski zawsze mieściły się w panelu (bez zmian na desktopie)

- [x] **[2025-08-27]** Zwiększono odstęp nad sekcją „Certyfikaty i referencje” na desktopie: w `src/components/SpecializationsSection2.astro` zmieniono `md:pb-24` → `md:pb-32 lg:pb-36`.

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

---

**Uwagi:**

- Każde zadanie oznaczaj datą rozpoczęcia [RRRR-MM-DD]
- Po zakończeniu przenoś do sekcji "Wykonane"
- Priorytety: Najpierw podstawowa struktura, potem content, na końcu optymalizacje
