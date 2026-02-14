import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/misc/Hero';
import ProductGallery from '@/components/products/ProductGallery';
import CTA from '@/components/misc/CTA';

function ProductsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('meta.title', { ns: 'products' })}
        description={t('meta.description', { ns: 'products' })}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <Hero title={t('hero.title', { ns: 'products' })} />
        <ProductGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default ProductsPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
