import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/misc/Hero';
import QuoteForm from '@/components/forms/Quote.Form.';
import Footer from '@/components/layout/Footer';

function RequestQuote() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('quote.meta.title')}
        description={t('quote.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <Hero title={t('quote.hero.title')} />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

export default RequestQuote;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
