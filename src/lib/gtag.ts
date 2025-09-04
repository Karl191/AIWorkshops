export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

function gtag(...args: any[]) {
  if (typeof window === 'undefined') return;
  window.gtag?.(...args);
}

export function pageview(url: string) {
  if (!GA_ID || typeof window === 'undefined') return;
  gtag('event', 'page_view', { page_path: url });
}

export function grantAnalyticsConsent() {
  if (typeof window === 'undefined') return;
  gtag('consent', 'update', { analytics_storage: 'granted' });
}
