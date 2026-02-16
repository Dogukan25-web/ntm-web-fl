import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const localStorageKey = 'ntm-cookie-consent';
const consentValues = ['all', 'necessary'] as const;

function CookiePopup() {
  const { t } = useTranslation();
  const [consentValue, setConsentValue] = React.useState<
    (typeof consentValues)[number] | null
  >(null);
  const [consentVisible, setConsentVisible] = React.useState(false);

  React.useEffect(() => {
    if (consentValue) return;

    const storedConsent = localStorage.getItem(localStorageKey);
    if (storedConsent && consentValues.includes(storedConsent as any)) {
      setConsentValue(storedConsent as any);
    }
    setConsentVisible(!storedConsent);
  }, []);

  const handleConsent = (value: (typeof consentValues)[number]) => {
    localStorage.setItem(localStorageKey, value);
    setConsentValue(value);
    setConsentVisible(false);
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0, visibility: 'hidden', scale: 0.9 }}
      // if consent is visible
      animate={
        consentVisible
          ? { opacity: 1, visibility: 'visible', scale: 1 }
          : { opacity: 0, visibility: 'hidden', scale: 0.9 }
      }
      transition={{ duration: 0.5, delay: 2 }}
      exit={{ opacity: 0, visibility: 'hidden', scale: 0.9 }}
      className="font-theme fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-2.5rem)] max-w-lg -translate-x-1/2 flex-col items-start justify-start gap-4 border border-t-2 border-zinc-200 border-t-yellow-400 bg-white p-5 shadow-lg"
    >
      <div className="flex flex-wrap items-start justify-start gap-4">
        <p className="w-full text-xs text-zinc-500">{t('policy.popup-desc')}</p>
        <Link
          href="/policy/cookie-policy"
          className="text-xs text-yellow-500 underline"
        >
          {t('policy.cookie-policy')}
        </Link>
        <Link
          href="/policy/privacy-policy"
          className="text-xs text-yellow-500 underline"
        >
          {t('policy.privacy-policy')}
        </Link>
      </div>

      <div className="flex flex-wrap items-start justify-start gap-2 text-xs">
        <button
          type="button"
          onClick={() => handleConsent('all')}
          className="border border-yellow-400 bg-yellow-400 px-2 py-1 font-medium text-black uppercase transition-all duration-150 hover:bg-white"
        >
          {t('policy.accept-all')}
        </button>
        <button
          type="button"
          onClick={() => handleConsent('necessary')}
          className="border border-yellow-400 bg-yellow-400 px-2 py-1 font-medium text-black uppercase transition-all duration-150 hover:bg-white"
        >
          {t('policy.accept-necessary')}
        </button>
      </div>
    </motion.div>
  );
}

export default CookiePopup;
