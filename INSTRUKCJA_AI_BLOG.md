# 📝 Instrukcja dla AI - Generowanie Artykułów Blogowych

**Cel:** Automatyczne przygotowanie artykułów medycznych w formacie Markdown zgodnie z medical design system Dr Jaremy Paduszyńskiego.

---

## 🎯 Prompt dla AI

```
ROLA: Jesteś ekspertem w tworzeniu treści medycznych dla gabinetu osteopatii Dr Jaremy Paduszyńskiego w Krakowie.

ZADANIE: Na podstawie podanej treści, stwórz kompletny artykuł blogowy w formacie Markdown zgodny z wytycznymi medical design system.

WYMAGANIA:

1. METADATA (frontmatter):
   - title: Profesjonalny, SEO-friendly tytuł (max 60 znaków)
   - description: Meta description dla SEO (120-160 znaków)
   - pubDate: Dzisiejsza data w formacie YYYY-MM-DD
   - heroImage: "../../assets/blog-placeholder-2.jpg" (domyślny)
   - category: Wybierz z: porady, aktualności
   - tags: 3-6 tagów medycznych po polsku (bez #)
   - author: "Dr Jarema Paduszyński"
   - keywords: Słowa kluczowe SEO dla Ostopatii i Fizjoterapii w Krakowie
   - readingTime: Szacowany czas czytania w minutach
   - featured: true dla ważnych artykułów, false dla standardowych
   - draft: false

2. STRUKTURA ARTYKUŁU (ZWIĘZŁA):
   - Krótkie wprowadzenie z hook (1-2 akapity)
   - 2-3 główne sekcje H2 (nie więcej)
   - Maksymalnie 3-4 punkty w listach
   - 1 blockquote z najważniejszą informacją
   - Krótkie podsumowanie z CTA

3. STYL PISANIA (ZWIĘZŁY):
   - Profesjonalny, ale przystępny ton
   - Praktyczne porady (bez zbędnej teorii)
   - Fokus na rozwiązania dla pacjenta
   - Lokalne SEO (Kraków)
   - Proste słownictwo, unikaj żargonu medycznego

4. ELEMENTY OBOWIĄZKOWE (MINIMUM):
   - 1 statystyka w **bold** (jeśli możliwe)
   - 1 blockquote z kluczową informacją
   - 2-3 praktyczne porady
   - Krótka sekcja "Kiedy szukać pomocy"
   - Zwięzłe CTA do gabinetu (2-3 zdania max)

5. SEO:
   - Słowa kluczowe: "osteopatia Kraków", "fizjoterapeuta Kraków"
   - Długość: 700 słów (zwięzłe, praktyczne)
   - Nagłówki H1, H2, H3 z keywords
   - Internal linking do innych usług gabinetu

FORMAT ODPOWIEDZI: Tylko kod Markdown, bez dodatkowych komentarzy.

TREŚĆ DO PRZETWORZENIA:
[TUTAJ WKLEJASZ TREŚĆ]
```

---

## 🎨 Szablon Markdown

```markdown
---
title: "[Tytuł artykułu - max 60 znaków]"
description: "[Meta description 120-160 znaków z keywords]"
pubDate: [YYYY-MM-DD]
heroImage: "../../assets/blog-placeholder-2.jpg"
category: "[porady/aktualnosci]"
tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
author: "Dr Jarema Paduszyński"
keywords: "[keywords dla SEO Kraków]"
readingTime: [3-5 minut]
featured: [true/false]
draft: false
---

[Krótkie wprowadzenie z hook - max 2 akapity]

## [Główna sekcja 1]

[Treść z praktycznymi poradami]

- **Punkt pierwszy** - zwięzły opis
- **Punkt drugi** - zwięzły opis  
- **Punkt trzeci** - zwięzły opis

> **Ważne**: [Jedna kluczowa informacja medyczna]

## [Główna sekcja 2]

1. **[Pierwsza porada]** - krótko
2. **[Druga porada]** - krótko
3. **[Trzecia porada]** - krótko

## Kiedy szukać pomocy osteopaty?

[Krótka lista 2-3 sytuacji kiedy się zgłosić]

---

**Pamiętaj**: Przedstawione informacje mają charakter edukacyjny i nie zastępują konsultacji ze specjalistą.

Jeśli borykasz się z [problem zdrowotny], zapraszam na konsultację do mojego gabinetu w Krakowie. Wspólnie opracujemy skuteczny plan leczenia.
```

---

## 📋 Checklist dla AI

**✅ METADATA:**
- [ ] Tytuł SEO-friendly (max 60 znaków)
- [ ] Description 120-160 znaków
- [ ] Aktualna data
- [ ] Odpowiednia kategoria medyczna
- [ ] 3-6 tagów polskich
- [ ] Keywords z "Kraków"
- [ ] Szacowany readingTime
- [ ] featured true/false
- [ ] draft: false

**✅ TREŚĆ (ZWIĘZŁA):**
- [ ] Krótkie wprowadzenie (1-2 akapity)
- [ ] 1 statystyka w **bold** (jeśli możliwe)
- [ ] 2-3 sekcje H2 z keywords
- [ ] Maksymalnie 3-4 punkty w listach
- [ ] 1 blockquote z kluczową informacją
- [ ] 2-3 praktyczne porady
- [ ] Krótka sekcja "Kiedy szukać pomocy"
- [ ] Zwięzłe CTA (2-3 zdania)

**✅ STYL (PRAKTYCZNY):**
- [ ] Przystępny ton medyczny
- [ ] Fokus na rozwiązania
- [ ] Lokalne SEO (Kraków)
- [ ] 800-1200 słów
- [ ] Czytelna, zwarta struktura

---

## 🎯 Przykłady Keywords dla różnych kategorii:

**Porady:**
- "porady osteopata Kraków", "jak dbać o kręgosłup", "praktyczne wskazówki", "profilaktyka zdrowia"

**Aktualności:**
- "nowości osteopatia", "aktualności medyczne", "informacje gabinet", "zmiany w leczeniu"

---

## 💡 Tips dla lepszego AI promptu:

1. **Bądź konkretny** z tematem: "Napisz o bólu krzyża u osób pracujących przy komputerze"

2. **Podaj kontekst**: "Artykuł dla pacjentów z siedzącym trybem pracy"

3. **Wskaż fokus**: "Skoncentruj się na praktycznych poradach"

4. **Określ długość**: "Krótki artykuł 800-1000 słów"

5. **Dodaj specjalizację**: "Z perspektywy osteopaty"

---

## 🔄 Workflow:

1. **Przygotuj treść** - notatki, główne punkty, źródła
2. **Użyj promptu** - wklej do AI z instrukcjami
3. **Sprawdź output** - czy metadata i struktura są OK
4. **Zapisz jako .md** - w folderze `src/content/blog/`
5. **Dodaj obraz** - do `src/assets/` i popraw ścieżkę heroImage
6. **Zbuduj i testuj** - `npm run dev`

---

**Rezultat:** Profesjonalny artykuł medyczny gotowy do publikacji z SEO, Schema Markup i medical design!