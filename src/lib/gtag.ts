export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export function pageview(url: string) {
  if (!GA_ID || typeof window === 'undefined') return;
  // @ts-ignore
  window.gtag?.('event', 'page_view', { page_path: url });
}

export function grantAnalyticsConsent() {
  // Call this once when user accepts analytics cookies
  // @ts-ignore
  window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
}
