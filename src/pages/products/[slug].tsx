/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import getPostData from '@/common/utils/getPostData';
import { Product, products } from '@/common/content/content';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/misc/Hero';
import CTA from '@/components/misc/CTA';
import Footer from '@/components/layout/Footer';

interface Props {
  postData: {
    slug: string;
    contentHtml: string;
    title: string;
    description: string;
  };
  product: Product;
}

function ProductPage({ postData, product }: Props): React.ReactNode {
  const [activeImage, setActiveImage] = React.useState<string>('0');

  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={`NTM | ${postData.title}`}
        description={postData.description}
      />
      <Navbar />
      <main className="font-theme flex min-h-screen flex-col items-start justify-start">
        <Hero title={postData.title} />
        <section className="flex w-full items-center justify-center bg-white py-20">
          <section className="max-w-theme flex w-full flex-col items-start justify-start gap-10 px-5 lg:flex-row">
            <section className="relative order-2 m-0 grid w-full max-w-md grid-cols-1 place-content-center place-items-start gap-0 overflow-hidden bg-black/80 p-0 lg:sticky lg:top-28">
              <section className="z-2 flex h-full w-full flex-col items-start justify-start gap-3 bg-transparent p-5">
                <h2 className="m-0 flex flex-col items-start justify-start gap-1 text-xl font-bold tracking-tight text-zinc-200 lg:text-xl">
                  <span
                    style={{
                      letterSpacing: '0.2em',
                    }}
                    className="text-xs font-normal text-yellow-500 uppercase"
                  >
                    {t('mini-cta.mini', { ns: 'products' })}
                  </span>
                  <span>{t('mini-cta.title', { ns: 'products' })}</span>
                </h2>
                <section className="flex w-full flex-wrap items-start justify-start gap-5">
                  <Link
                    href="/request-quote"
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="text-md min-h-[50px] border border-yellow-400 bg-yellow-400 px-6 py-3 text-center font-bold text-black transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    {t('global-buttons.quote')}
                  </Link>
                  <a
                    href="tel:+902128777025"
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="flex min-h-[50px] flex-row items-center justify-start gap-3 border border-white bg-transparent px-6 py-3 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <FaPhoneAlt className="h-4 w-4" />
                    <span>{t('global-buttons.call-us')}</span>
                  </a>
                </section>
              </section>
              <div
                style={{
                  boxShadow: '50px -50px 400px 200px var(--color-yellow-400)',
                }}
                className="absolute bottom-0 left-0 z-1 aspect-square w-[30%] -translate-[90%] translate-y-[90%] rounded-full bg-yellow-400 opacity-20"
              />
            </section>

            <section className="flex w-full max-w-5xl flex-col items-start justify-start gap-10">
              {product.images && (
                <section className="flex w-full flex-col items-center justify-center gap-5 border border-zinc-200 bg-zinc-100 p-5 lg:p-5">
                  <span
                    style={{ letterSpacing: '0.2em' }}
                    className="upppercase w-full border-b border-b-zinc-300 pb-4 text-left text-xs font-bold text-zinc-400"
                  >
                    {t('products:product.product-images')}
                  </span>
                  <section className="relative aspect-video w-full overflow-hidden">
                    {product.images.map((img, key) => (
                      <img
                        src={img}
                        alt={postData.title}
                        key={`${postData.slug}-active-image-${key}`}
                        className={`${key.toString() === activeImage ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'} absolute aspect-video w-full border border-zinc-200 object-cover object-center shadow-xl transition-all duration-500`}
                      />
                    ))}
                  </section>
                  <span className="h-px w-full bg-zinc-300" />
                  <section className="flex w-full flex-row items-center justify-start gap-5">
                    {product.images.map((img, key) => (
                      <button
                        type="button"
                        className="group relative"
                        key={`${postData.slug}-image-${key}`}
                        onClick={() => setActiveImage(key.toString())}
                      >
                        <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-black/50 transition-all duration-200 group-hover:bg-black/10" />
                        <img
                          src={img}
                          alt={postData.title}
                          className="aspect-video w-full max-w-50 cursor-pointer border border-zinc-200 object-cover object-center shadow-xl"
                        />
                      </button>
                    ))}
                  </section>
                </section>
              )}
              <div
                className="prose w-full max-w-none"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </section>
          </section>
        </section>
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default ProductPage;

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const paths = products.flatMap((product) =>
    locales.map((locale) => ({
      params: { slug: product.slug },
      locale,
    })),
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  locale,
  params,
}: {
  locale: string;
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params?.slug);
  const postData = await getPostData(params?.slug, locale);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
      product,
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}
