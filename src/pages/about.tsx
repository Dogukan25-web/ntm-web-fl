import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/misc/Hero';
import CTA from '@/components/misc/CTA';
import Peoples from '@/components/about/Peoples';
import Desc from '@/components/about/Desc';
import VisionMision from '@/components/about/VisionMision';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('about.meta.title')}
        description={t('about.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <Hero title={t('about.hero.title')} />
        <Desc />
        <VisionMision />
        <Peoples />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default About;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
