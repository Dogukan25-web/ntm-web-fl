import React, { useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

const CONSENT_KEY = 'ntm-cookie-consent';

export default function ConsentGTM() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      setEnabled(consent === 'all');
    } catch {
      setEnabled(false);
    }
  }, []);

  if (!enabled) return null;
  return <GoogleTagManager gtmId="GTM-5VDR7NQ8" />;
}
