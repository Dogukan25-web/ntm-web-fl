import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/misc/Hero';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/Contact.Form';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <Hero title={t('contact.hero.title')} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Contact;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
