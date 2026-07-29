/**
 * Meta Pixel — kun konverteringsmåling for annonser.
 *
 * Samme dataset som bedrift.oppussinghjelpen.no, slik at Meta ser hele
 * trakten under ett merke. Lastes bare når NEXT_PUBLIC_META_PIXEL_ID er
 * satt, så lokal utvikling sender ingenting.
 */

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

type Fbq = (kommando: string, hendelse: string, data?: Record<string, unknown>) => void

/** Sporing skal aldri kunne velte skjemaet — feiler den, går den stille. */
export function sporHendelse(hendelse: 'Lead', data?: Record<string, unknown>) {
  if (!PIXEL_ID || typeof window === 'undefined') return
  const fbq = (window as unknown as { fbq?: Fbq }).fbq
  if (typeof fbq !== 'function') return
  try {
    fbq('track', hendelse, data)
  } catch {
    /* stille */
  }
}
