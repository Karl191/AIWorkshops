'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/gtag';

export default function GAProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname || '/';
    pageview(url);
    if (process.env.NODE_ENV !== 'production') {
      // dev logger
      // eslint-disable-next-line no-console
      console.log('[GA] page_view', url);
    }
  }, [pathname, searchParams]);

  return null;
}
