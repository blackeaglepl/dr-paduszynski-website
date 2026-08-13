export const locales = {
  pl: 'pl-PL',
  en: 'en-US',
} as const;

export const defaultLocale = 'pl';

export type Locale = keyof typeof locales;

// Tłumaczenia dla nawigacji
export const translations = {
  pl: {
    navigation: {
      about: 'O mnie',
      pricing: 'Cennik i usługi',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    language: {
      switch: 'EN',
      current: 'PL',
    },
  },
  en: {
    navigation: {
      about: 'About me',
      pricing: 'Pricing and services',
      blog: 'Blog',
      contact: 'Contact',
    },
    language: {
      switch: 'PL',
      current: 'EN',
    },
  },
} as const;

// Funkcja do pobierania tłumaczeń
export function getTranslations(locale: Locale) {
  return translations[locale];
}

// Pomocnicza funkcja: zapewnia końcowy slash zgodnie z konfiguracją trailingSlash: 'always'
function ensureTrailingSlash(path: string): string {
  if (!path || path === '/') {
    return '/';
  }
  return path.endsWith('/') ? path : `${path}/`;
}

// Funkcja do wykrywania języka z URL
export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;

  // Sprawdź czy URL zaczyna się od /en
  if (pathname.startsWith('/en')) {
    return 'en';
  }

  return defaultLocale;
}

// Funkcja do generowania URL-i dla różnych języków
export function getLocalizedPath(path: string, locale: Locale): string {
  // Normalizuj wejściową ścieżkę
  const normalized = ensureTrailingSlash(path);
  if (locale === defaultLocale) {
    return normalized;
  }
  // Usuń ewentualny prefix językowy i dołóż poprawny
  const cleanPath = normalized.replace(/^\/(en|pl)/, '');
  return ensureTrailingSlash(`/${locale}${cleanPath}`);
}

// Pary stron, które istnieją w obu językach (PL <-> EN).
// Slugi nie zawsze się pokrywają, dlatego mapowanie jest jawne.
// Blog celowo pominięty — istnieje wyłącznie po polsku.
const hreflangPairs: ReadonlyArray<{ pl: string; en: string }> = [
  { pl: '/', en: '/en/' },
  { pl: '/cennik/', en: '/en/cennik/' },
  { pl: '/kontakt/', en: '/en/kontakt/' },
  { pl: '/polityka-prywatnosci/', en: '/en/privacy-policy/' },
];

export interface HreflangAlternate {
  hreflang: string;
  href: string;
}

// Zwraca listę odpowiedników językowych dla podanego URL.
// Pusta tablica oznacza stronę bez tłumaczenia — wtedy pomijamy hreflang.
export function getHreflangAlternates(currentUrl: URL, site: URL | undefined): HreflangAlternate[] {
  const currentPath = ensureTrailingSlash(currentUrl.pathname);
  const pair = hreflangPairs.find((p) => p.pl === currentPath || p.en === currentPath);

  if (!pair) {
    return [];
  }

  const origin = site ?? new URL(currentUrl.origin);
  const absolute = (path: string) => new URL(path, origin).href;

  return [
    { hreflang: 'pl', href: absolute(pair.pl) },
    { hreflang: 'en', href: absolute(pair.en) },
    { hreflang: 'x-default', href: absolute(pair.pl) },
  ];
}

// Funkcja do przełączania języka
export function getSwitchLanguageUrl(currentUrl: URL, targetLocale: Locale): string {
  const currentPath = ensureTrailingSlash(currentUrl.pathname);

  if (targetLocale === defaultLocale) {
    // Powrót na język domyślny (PL) — usuń ewentualny prefix /en
    const cleanPath = currentPath.replace(/^\/en/, '') || '/';
    
    // Specjalny przypadek: jeśli próbujemy wrócić na blog z EN, przekieruj na blog PL
    if (currentPath.startsWith('/en/blog/')) {
      return '/blog/';
    }
    
    return ensureTrailingSlash(cleanPath);
  }

  // Przejście na język EN — dodaj prefix /en
  if (currentPath.startsWith('/en/')) {
    return currentPath; // Już jest po angielsku
  }

  // Specjalny przypadek: Blog istnieje tylko w wersji PL
  if (currentPath.startsWith('/blog/')) {
    return '/en/';
  }

  // Zachowujemy te same slugi (np. /kontakt/ -> /en/kontakt/)
  return ensureTrailingSlash(`/en${currentPath}`);
}
