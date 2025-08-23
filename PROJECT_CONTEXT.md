# PROJECT CONTEXT - Dr Jarema Paduszyński (Osteopata)

## 🎯 Cel Projektu

Profesjonalna strona internetowa dla osteopaty Dr. Jarema Paduszyńskiego mająca na celu:

- **Zwiększenie liczby pacjentów** przez profesjonalną prezentację online
- **Budowanie zaufania** poprzez prezentację doświadczenia, certyfikatów i opinii
- **Konwersja** - główny punkt konwersji to widget ZnanyLekarz
- **SEO lokalne** - pozycjonowanie na "osteopata Kraków", "fizjoterapeuta Kraków" "osteopata Myślenice

## 🏥 Specyfika Medyczna

- **Branża**: Osteopatia i fizjoterapia
- **Lokalizacja**: Kraków, Polska
- **Target**: Pacjenci szukający pomocy w problemach ze stawami, kręgosłupem, bólami
- **Trust factors**: Certyfikaty, doświadczenie (15+ lat), opinie pacjentów
- **Compliance**: GDPR (uproszczona - brak cookies), WCAG 2.1 AA

## 🛠️ Stack Technologiczny

### Core

- **Framework**: Astro (najnowsza stabilna wersja)
- **Rendering**: SSG (Static Site Generation)
- **Hosting**: Netlify z automatycznym SSL
- **Styling**: Tailwind CSS (wersja 4.x)

### Integracje

- **ZnanyLekarz Widget**: Główny punkt konwersji (300x451px minimum)
- **Google Fonts**: Quicksand (headings) + Inter (body)
- **Schema Markup**: JSON-LD (Medical Business, Reviews, FAQ, Person, Service)
- **Analytics**: Privacy-focused, bez cookies

## 🎨 Design System

### Paleta Kolorów (prefix: medical-)

```css
--medical-primary: #4ecdc4 // Zieleń główna
  --medical-light: #a8e6cf // Zieleń jasna
  --medical-bg: #e8f8f5 // Zieleń tło
  --medical-white: #ffffff // Tło główne
  --medical-cream: #fffaf5 // Elementy wypukłe
  --medical-text: #243648 // Tekst główny
  --medical-text-light: #7f8c8d; // Tekst pomocniczy
```

### Typografia

- **Heading Font**: Quicksand (400, 500, 600, 700)
- **Body Font**: Inter (400, 500, 600, 700)
- **Mobile-first**: Responsive typography z breakpointami
- **Line Height**: 1.2 (headings), 1.6 (body)

### Layout Principles

- **Mobile-first approach**
- **Clean sections** z dużymi odstępami
- **Alternating layouts** (left-right-left)
- **Card-based components**
- **Diagonal/organic backgrounds** w hero sections
- **Split layouts** (image + text, 2 kolumny desktop)

## 📱 Struktura Stron

### Główne Strony

1. **Strona Główna (O mnie)** - `/`
2. **Cennik** - `/cennik`
3. **Blog** - `/blog`
4. **Kontakt** - `/kontakt`

### Layout Patterns

- **Hero sections** z diagonal background + CTA
- **Statystyki zaufania** (lata doświadczenia, pacjenci)
- **Split layouts** z obrazkami
- **Card-based design** dla zabiegów
- **Dark sections** dla opinii/testimonials
- **FAQ** w stylu accordion

## 🔍 SEO & Performance

### Local SEO

- **Keywords**: "osteopata Kraków", "fizjoterapeuta Kraków"
- **Google My Business Schema**
- **NAP consistency**
- **Local business markup**

### Technical SEO

- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Schema Markup**: Medical Business, Person, Service, Review, FAQ
- **Image optimization**: WebP/AVIF z fallback
- **Lazy loading**: Obrazy poniżej fold
- **Sitemap**: Automatyczne przez Astro

### Content Strategy

- **Ton**: Profesjonalny ale ciepły i zrozumiały
- **Edukacja**: Artykuły o osteopatii w przystępnym języku
- **Proof elements**: Certyfikaty, doświadczenie, opinie
- **CTA**: Jasne zachęty do działania

## 🏗️ Architektura Projektu

### Struktura Katalogów

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

### Komponenty Patterns

- **PascalCase.astro** dla komponentów
- **camelCase.ts** dla utility
- **Modułowe komponenty** (<200-300 linii)
- **Props w camelCase**

### CTA Buttons (Standardowe)

```html
<!-- Primary CTA -->
<button
  class="bg-medical-primary hover:bg-medical-light text-white font-heading font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-medical-primary/50 focus:outline-none shadow-sm"
>
  <!-- Secondary CTA -->
  <button
    class="bg-transparent border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white font-heading font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-medical-primary/50 focus:outline-none"
  ></button>
</button>
```

## ⚡ Performance & UX

### Loading Strategy

- **Critical CSS**: Inline
- **Progressive loading**: Images
- **Preload**: Key resources (fonts, hero image)
- **Smooth scrolling**: CSS scroll-behavior

### Error Handling

- **Custom 404** page
- **Form validation** feedback
- **Graceful degradation**

### Accessibility

- **WCAG 2.1 AA** compliance
- **Focus indicators**
- **Screen reader** compatibility
- **Keyboard navigation**

## 🛡️ Bezpieczeństwo

### GDPR Compliance

- **Polityka prywatności** (uproszczona - brak cookies)
- **Ochrona danych zdrowotnych** w formularzach
- **SSL**: Automatyczne przez Netlify + wymuszenie HTTPS

### Form Security

- **Honeypot fields** przeciw botom
- **Rate limiting** przez Netlify Forms
- **Walidacja**: Client + server side

---

**Ten dokument stanowi fundament dla wszystkich decyzji projektowych i implementacyjnych.**
