import React from 'react';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Banner from '@/components/home/Banner';
import Counts from '@/components/home/Counts';
import Products from '@/components/home/Products';

export default function Home(): React.ReactNode {
  return (
    <>
      <Meta title=".." description=".." />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <Banner />
        <Counts />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
