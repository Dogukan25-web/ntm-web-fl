import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useTranslation } from 'next-i18next';

import BGImage from '@/public/assets/img/recycling-banner.webp';

function Banner() {
  const { t } = useTranslation();
  return (
    <section className="relative m-0 grid min-h-screen w-full grid-cols-1 p-0">
      <section className="relative top-0 left-0 z-0 flex h-full w-full items-center justify-center bg-black/70">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0.2,
            ease: 'easeInOut',
          }}
          exit={{ opacity: 0, x: -50 }}
          className="max-w-theme font-theme flex w-full flex-col items-start justify-center gap-5 p-5 py-20"
        >
          <p
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-xs text-yellow-400 lg:bg-yellow-400 lg:p-2 lg:text-sm lg:text-black"
          >
            {t('home.banner.mini')}
          </p>
          <h2 className="text-2xl font-semibold whitespace-pre-wrap text-white lg:text-4xl">
            {t('home.banner.main')}
          </h2>
          <p className="max-w-md border-l-2 border-amber-300 py-0 pl-4 text-sm text-white lg:text-lg">
            {t('home.banner.content')}
          </p>
          <section className="mt-10 flex w-full flex-wrap items-center justify-start gap-5">
            <Link
              href="/contact"
              style={{
                letterSpacing: '0.1em',
              }}
              className="text-md border border-yellow-400 bg-yellow-400 px-6 py-3 text-center font-bold text-black transition-all duration-300 hover:bg-white hover:text-black"
            >
              {t('global-buttons.quote')}
            </Link>
            <Link
              href="/products"
              style={{
                letterSpacing: '0.1em',
              }}
              className="text-md border border-zinc-200 bg-transparent px-6 py-3 text-center font-normal text-zinc-200 transition-all duration-300 hover:bg-white hover:text-black"
            >
              {t('global-buttons.view-products')}
            </Link>
          </section>
        </motion.section>
      </section>
      <section
        style={{ backgroundImage: `url(${BGImage.src})` }}
        className="absolute top-0 left-0 -z-1 h-full w-full bg-cover bg-center"
      />
    </section>
  );
}

export default Banner;
