/**
 * Tymczasowa augmentacja typów Astro: dodaje brakujący typ KebabKeys,
 * aby naprawić błąd TS2694 w node_modules/astro/astro-jsx.d.ts.
 * Do usunięcia po aktualizacji Astro, gdy typ będzie dostępny natywnie.
 */
declare module 'astro/dist/type-utils' {
	export type KebabKeys<T> = Record<string, unknown>;
}




