# Zestaw Zasad dla AI - Projekt Dr Jarema Paduszyński (Osteopata)

**Cel:** Te wytyczne mają zapewnić spójność, jakość, wydajność i łatwość utrzymania kodu w projekcie strony osteopaty, budowanej z użyciem Astro i Tailwind CSS.

## 🔄 Kontekst Projektu i Zarządzanie Zadaniami

* **Zawsze na początku:** Przeczytaj plik `GEMINI.md`, aby zrozumieć cele projektu medycznego, architekturę, specyfikę stacku, konwencje i ograniczenia.
* **Przed rozpoczęciem zadania:** Sprawdź plik `TASK.md`. Jeśli bieżącego zadania tam nie ma, dodaj je z krótkim opisem i dzisiejszą datą ([RRRR-MM-DD]).
* **Podczas pracy:** Jeśli odkryjesz potrzebę wykonania dodatkowych czynności (np. implementacja Schema Markup, integracja ZnanyLekarz widget), dodaj je do `TASK.md` w sekcji "Odkryte podczas pracy".
* **Po zakończeniu:** Oznacz zadanie jako wykonane w `TASK.md`.

## 🗣️ Język i Komunikacja

* **Język:** Wszystkie komunikaty, kod i komentarze powinny być w **języku polskim**. Terminy techniczne powszechnie używane po angielsku (np. `props`, `component`, `state`, `schema markup`) mogą pozostać w oryginale.
* **Styl:** Używaj prostego, jasnego i zrozumiałego języka, odpowiedniego dla branży medycznej.

## 🛠️ Stack Technologiczny i Konfiguracja

* **Framework:** Astro (stabilna, najnowsza wersja). Preferuj **Statyczne Generowanie Stron (SSG)**.
* **Hosting:** Netlify z automatycznym SSL
## 🎨 Design System i Layout

### Paleta Kolorów
* **Konfiguracja Centralna:** Wszystkie niestandardowe ustawienia definiuj wyłącznie w `tailwind.config.cjs`.
* **Paleta Kolorów Medyczna:** Używaj nazw semantycznych z prefiksem `medical-`:
    ```js
    colors: {
      'medical-primary': '#4ECDC4',      // Zieleń główna
      'medical-light': '#A8E6CF',       // Zieleń jasna
      'medical-bg': '#E8F8F5',          // Zieleń tło
      'medical-white': '#FFFFFF',       // Tło główne
      'medical-cream': '#FFFAF5',       // Elementy wypukłe
      'medical-text': '#243648',        // Tekst główny
      'medical-text-light': '#7F8C8D'   // Tekst pomocniczy
    }
    ```

### Typografia
* **Fonty Medyczne:** 
    ```js
    fontFamily: {
      'heading': ['Quicksand', 'sans-serif'],
      'body': ['Inter', 'sans-serif']
    }
    ```
* **Rozmiary Czcionek:**
    ```js
    fontSize: {
      // Mobile
      'h1-mobile': ['28px', { lineHeight: '1.2' }],
      'h2-mobile': ['24px', { lineHeight: '1.2' }], 
      'h3-mobile': ['20px', { lineHeight: '1.2' }],
      'body-mobile': ['16px', { lineHeight: '1.6' }],
      'small-mobile': ['14px', { lineHeight: '1.5' }],
      // Desktop
      'h1-desktop': ['42px', { lineHeight: '1.2' }],
      'h2-desktop': ['32px', { lineHeight: '1.2' }],
      'h3-desktop': ['24px', { lineHeight: '1.2' }], 
      'body-desktop': ['18px', { lineHeight: '1.6' }],
      'small-desktop': ['16px', { lineHeight: '1.5' }]
    }
    ```

### Layout Principles
* **Clean Sections:** Duże ilości white space między sekcjami
* **Alternating Layouts:** Zmienne układy left-right-left dla dynamizmu
* **Card-Based Components:** Komponenty w formie kart dla przejrzystości
* **Diagonal/Organic Backgrounds:** Nowoczesne, abstrakcyjne tła w hero sections
* **Strong Typography Hierarchy:** Jasna hierarchia nagłówków
* **Consistent Spacing:** Jednolite odstępy między wszystkimi sekcjami
* **Split Layouts:** Obrazek + tekst w dwóch kolumnach (desktop)
* **Dark Contrast Sections:** Ciemne sekcje dla opinii/testimonials
* **Pluginy:** Używaj tylko oficjalnych lub dobrze sprawdzonych pluginów Tailwind (np. `@tailwindcss/typography`, `@tailwindcss/forms`).
* **Stylizacja:** Wyłącznie Tailwind CSS - **nie dodawaj zewnętrznych bibliotek UI/CSS** (np. Bootstrap, Bulma, Material UI, DaisyUI).
* **Formatowanie Kodu:** Używaj Prettier z konfiguracją w projekcie (np. `.prettierrc`) do automatycznego formatowania kodu (`.astro`, `.ts`, `.js`, `.css`, `.md`).

## 🏥 Specyfika Medyczna

* **Schema Markup:** Implementuj obowiązkowo (JSON-LD format):
    * Local Business Schema (MedicalBusiness)
    * Review Schema (ZnanyLekarz integration)
    * FAQ Schema (pytania o osteopatię)
    * Person Schema (Dr Paduszyński)
    * Service Schema (zabiegi)
    * Organization Schema (klinika)
* **SEO Medyczne:** 
    * Local SEO optimization
    * Medical keywords research
    * E-A-T signals (Expertise, Authoritativeness, Trustworthiness)
* **ZnanyLekarz Widget:** 
    * Integracja z widget 300x451px minimum
    * Lazy loading widget dla performance
* **GDPR Compliance:** Uproszczona (brak cookies)
* **Accessibility:** 
    * WCAG 2.1 AA compliance
    * Focus indicators
    * Screen reader compatibility
    * Keyboard navigation
* **Medical Authority:**
    * Certyfikaty i dyplomy
    * Doświadczenie zawodowe
    * Publikacje naukowe
    * Membership w organizacjach medycznych

## 🧱 Struktura Kodu i Modułowość

* **Struktura Katalogów:** Standardowa Astro + dodatkowe:
    ```
    src/
    ├── pages/           # O mnie, Cennik, Blog, Kontakt
    ├── layouts/         # Layout główny + blog
    ├── components/      # Komponenty UI
    ├── content/         # Artykuły blog (markdown)
    ├── schemas/         # Schema markup definitions  
    ├── utils/           # Helpers, API calls
    └── assets/          # Zdjęcia, ikony
    ```
* **Komponenty Astro:**
    * Buduj interfejs z małych, wyspecjalizowanych komponentów (`.astro`).
    * Komponent powinien być odpowiedzialny za jedną, jasno określoną część UI lub funkcjonalność.
    * **Zasada:** Dąż do tego, aby pliki komponentów były zwięzłe i czytelne. Jeśli komponent staje się zbyt duży (> 200-300 linii), rozważ jego podział.
* **Importy:** Używaj spójnych ścieżek importu. Preferuj aliasy ścieżek (np. `@/components/*`) lub względne ścieżki w obrębie modułów.

## ✨ Konwencje Nazewnicze i Stylowe

* **Pliki Komponentów:** `PascalCase.astro` (np. `HeroSection.astro`, `PriceTable.astro`, `BlogCard.astro`, `ZnanyLekarzWidget.astro`, `ContactForm.astro`).
* **Pliki Utility/Logika:** `camelCase.ts` (np. `schemaMarkup.ts`, `znanyLekarzApi.ts`).
* **Props Komponentów:** `camelCase`.
* **Klasy CSS:** Używaj wyłącznie klas użytkowych Tailwind z prefiksem `medical-` dla kolorów brandowych. **Nie twórz własnych, niestandardowych klas CSS**, chyba że użytkownik wyraźnie poprosi o dodanie custom klasy lub jest to absolutnie nieuniknione dla specyficznych animacji/efektów.
* **Standardowy Przycisk CTA:**
    ```html
    <!-- Primary CTA -->
    <button class="bg-medical-primary hover:bg-medical-light text-white font-heading font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-medical-primary/50 focus:outline-none shadow-sm">
      Umów wizytę
    </button>
    
    <!-- Secondary CTA -->
    <button class="bg-transparent border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white font-heading font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-medical-primary/50 focus:outline-none">
      Sprawdź cennik
    </button>
    ```

## 🧩 Komponenty UI Patterns

### Card Component
```html
<div class="bg-medical-white rounded-lg shadow-sm border border-medical-bg p-6 hover:shadow-md transition-shadow duration-200">
  <!-- Card content -->
</div>
```

### Section Container
```html
<section class="py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <!-- Section content -->
  </div>
</section>
```

### Split Layout Pattern
```html
<div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
  <div><!-- Content --></div>
  <div><!-- Image/Visual --></div>
</div>
```

## 📱 Responsywność (Mobile-First)

* **Wymóg:** Strona musi być w pełni responsywna - pacjenci często przeglądają na telefonach podczas szukania lekarza.
* **Podejście:** Implementuj **Mobile First**. Style domyślne są dla małych ekranów, modyfikacje dla większych dodawaj za pomocą breakpointów Tailwind (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
* **Viewport Meta Tag:** W `<head>` każdej strony umieść:
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ```
* **Testowanie:** Testuj na rzeczywistych urządzeniach mobilnych, szczególnie na iOS Safari i Android Chrome.

## 🎯 Cele i Priorytety Projektu

* **Główny cel:** Zwiększenie liczby pacjentów przez profesjonalną prezentację online
* **Konwersja:** Widget ZnanyLekarz jako główny punkt konwersji
* **SEO:** Pozycjonowanie lokalne "osteopata Kraków", "fizjoterapeuta Kraków"
* **Trust Building:** Opinie pacjentów, certyfikaty, doświadczenie zawodowe
* **User Experience:** Łatwe znalezienie informacji o zabiegach i umówienie wizyty

## 📄 Struktura Stron i Layout Patterns

### Hero Section Pattern
* **Diagonal/abstract background** w medical kolorach
* **Duży nagłówek H1** z jasnym value proposition
* **Statystyki zaufania** (lata doświadczenia, liczba pacjentów, certyfikaty)
* **Prominent CTA button** "Umów wizytę" w kontrastowym kolorze
* **Minimalistyczny design** z focus na konwersję

### Strona Główna (O mnie) - Layout Sections
1. **Hero Section** - diagonal background + główne CTA
2. **Statystyki** - liczby budujące zaufanie (15+ lat, 1000+ pacjentów, etc.)
3. **O Lekarzu** - zdjęcie + tekst (split layout)
4. **Osteopatia Wyjaśnienie** - obrazek + opis specjalizacji
5. **Gabinet/Lokalizacja** - split layout z obrazkami wnętrza
6. **Zabiegi Overview** - card-based design z przyciskami CTA
7. **Opinie Pacjentów** - dark section, 3 testimonials
8. **FAQ** - accordion style
9. **CTA Final** - widget ZnanyLekarz + formularz kontaktowy

### Cennik - Layout Pattern
* **Header** z opisem przejrzystej polityki cenowej
* **Tabela responsywna** z zabiegami i cenami
* **Card-based layout** dla szczegółów zabiegów
* **Expandable sections** dla dodatkowych informacji
* **CTA buttons** przy każdej usłudze

### Blog - Layout Pattern
* **Grid layout** dla artykułów (3 kolumny desktop, 1 mobile)
* **Featured article** na górze
* **Kategorie** i **search functionality**
* **Related posts** na końcu artykułów

### Kontakt - Layout Pattern
* **Split layout:** formularz + dane kontaktowe
* **Mapa Google** zintegrowana
* **Widget ZnanyLekarz** prominent placement
* **Godziny przyjęć** w czytelnej formie

## 🔍 SEO i Performance

* **Core Web Vitals:** Optymalizuj LCP (<2.5s), FID (<100ms), CLS (<0.1)
* **Image Optimization:** 
    * Format WebP/AVIF z fallback
    * Responsive images (`srcset`)
    * Proper `alt` tags dla SEO i accessibility
* **Lazy Loading:** Dla obrazów poniżej fold z `loading="lazy"`
* **Minifikacja:** CSS i JS przez Astro build
* **Schema Markup:** Pełna implementacja dla medical business (JSON-LD)
* **Sitemap:** Automatyczne generowanie przez Astro
* **Robots.txt:** Prawidłowa konfiguracja
* **Meta Tags:** Open Graph i Twitter Cards
* **Local SEO:** 
    * Google My Business Schema
    * NAP consistency
    * Local keywords optimization
* **Page Speed:**
    * Preload critical fonts
    * Minimize render-blocking resources
    * Optimize JavaScript delivery

## 📝 Content Guidelines

* **Ton komunikacji:** Profesjonalny, ale ciepły i zrozumiały
* **Język medyczny:** Wyjaśniaj terminy medyczne w przystępny sposób
* **CTA:** Jasne i zachęcające do działania ("Umów wizytę", "Sprawdź cennik")
* **Proof Elements:** 
    * Certyfikaty i dyplomy
    * Doświadczenie zawodowe (lata praktyki)
    * Opinie pacjentów
    * Publikacje naukowe
* **Edukacja:** Artykuły pomagające zrozumieć osteopatię
* **Content Strategy:**
    * FAQ addressing common concerns
    * Before/after expectations
    * Treatment process explanation
    * Recovery timelines
* **Medical Disclaimers:** Odpowiednie zastrzeżenia prawne

## 🛡️ Bezpieczeństwo i Zgodność

* **GDPR:** Polityka prywatności (bez cookies - uproszczona)
* **SSL:** Automatyczne przez Netlify + wymuszenie HTTPS
* **Form Security:** 
    * Honeypot fields przeciw botom
    * Rate limiting przez Netlify Forms
    * Walidacja po stronie klienta i serwera
* **Medical Data:** Szczególna ochrona danych zdrowotnych w formularzach
* **Accessibility:** WCAG 2.1 AA compliance
* **Security Headers:** CSP, X-Frame-Options, X-Content-Type-Options

## ⚡ Performance i UX

* **Loading Strategy:**
    * Critical CSS inline
    * Progressive image loading
    * Preload key resources (fonts, hero image)
* **Error Handling:**
    * Custom 404 page
    * Form validation feedback
    * Graceful degradation
* **User Experience:**
    * Clear navigation breadcrumbs
    * Search functionality (blog)
    * Print-friendly styles (cennik)
    * Smooth scrolling and transitions
* **Analytics:** Simple, privacy-focused analytics (bez cookies)
* **Monitoring:** 
    * Uptime monitoring
    * Performance monitoring
    * Error tracking

---

**Te wytyczne zapewnią profesjonalną stronę medyczną zgodną z najlepszymi praktykami branży i wymaganiami SEO!**

When asked to design UI & frontend interface
When asked to design UI & frontend interface

## Context 7 MCP Server
When users request the following, use the context7 MCP server to retrieve information:
- Code examples and snippets
- Setup or configuration instructions
- Library/API documentation
- Framework-specific implementation details