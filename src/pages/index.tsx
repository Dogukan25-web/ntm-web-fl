import React from 'react';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Banner from '@/components/home/Banner';
import Counts from '@/components/home/Counts';
import Products from '@/components/home/Products';
import MiniAbout from '@/components/home/MiniAbout';
import References from '@/components/home/References';
import CTA from '@/components/misc/CTA';

export default function Home(): React.ReactNode {
  return (
    <>
      <Meta title=".." description=".." />
      <Navbar />
      <main className="flex min-h-screen flex-col items-start justify-start">
        <Banner />
        <Counts />
        <Products />
        <MiniAbout />
        <References />
        <CTA />
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
