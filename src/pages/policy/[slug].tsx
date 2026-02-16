import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import getPolicyMD from '@/common/utils/getPolicyMD';

import Navbar from '@/components/layout/Navbar';
import Meta from '@/components/layout/Meta';
import Hero from '@/components/misc/Hero';
import Footer from '@/components/layout/Footer';

interface Props {
  policyData: {
    slug: string;
    contentHtml: string;
    title: string;
    description: string;
  };
}

const policyPages = [
  'privacy-policy',
  'terms-of-service',
  'kvkk',
  'explicit-consent',
  'cookie-policy',
];

function PolicyPage({ policyData }: Props) {
  return (
    <>
      <Meta
        title={`NTM | ${policyData.title}`}
        description={policyData.description}
      />
      <Navbar />
      <main className="font-theme flex min-h-screen flex-col items-start justify-start">
        <Hero title={policyData.title} />
        <section className="flex w-full items-center justify-center bg-white py-20">
          <section className="max-w-theme flex w-full flex-col items-start justify-start gap-10 px-5">
            <div
              className="prose w-full max-w-none"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: policyData.contentHtml }}
            />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PolicyPage;

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const paths = policyPages.flatMap((slug) =>
    locales.map((locale) => ({
      params: { slug },
      locale,
    })),
  );

  return { paths, fallback: false };
}

export async function getStaticProps({
  locale,
  params,
}: {
  locale: string;
  params: { slug: string };
}) {
  const slug = params?.slug;

  const policyData = await getPolicyMD(slug, locale);

  if (!slug || !policyPages.includes(slug)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      policyData,
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
