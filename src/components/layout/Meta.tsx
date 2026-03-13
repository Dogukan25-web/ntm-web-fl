import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type MetaProps = {
  title: string;
  description: string;
  favIconType?: 'png' | 'jpg' | 'jpeg' | 'ico'; // ? You can add more types..
};

function Meta({ title, description, favIconType }: MetaProps): React.ReactNode {
  const router = useRouter();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NTM - NURIMAK Teknik Makina',
    url: process.env.NEXT_PUBLIC_APP_URL,
    logo: `${process.env.NEXT_PUBLIC_APP_URL}/assets/img/logo.webp`,
    foundingDate: '1980',
    email: 'info@nurimakteknik.com',
    telephone: '+90-(212)-877-70-25',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English'],
      },
    ],
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.${favIconType || 'ico'}`}
          type="image/x-icon"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath.replace(/^\/(tr|en)/, '')}`}
        />
        <link
          rel="alternate"
          hrefLang="tr"
          href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath.replace(/^\/(tr|en)/, '')}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/en${router.asPath.replace(/^\/(tr|en)/, '')}`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`}
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          site_name: process.env.NEXT_PUBLIC_APP_NAME,
        }}
      />
    </>
  );
}

Meta.defaultProps = {
  favIconType: 'ico',
};

export default Meta;
