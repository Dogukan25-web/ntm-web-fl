import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { FaPhoneAlt } from 'react-icons/fa';

function CTA() {
  const { t } = useTranslation();
  return (
    <section className="font-theme relative flex w-full items-center justify-center overflow-hidden bg-stone-950 py-20">
      <section
        data-aos="fade-in"
        className="max-w-theme z-3 flex w-full flex-col items-start justify-center gap-10 px-5 text-left"
      >
        <h2
          style={{
            letterSpacing: '0.2em',
          }}
          className="flex flex-col gap-3"
        >
          <span className="text-4xl font-bold text-white lg:text-6xl">
            {t('home.cta.title')}
          </span>
          <span className="bg-yellow-400 px-4 py-2 text-xs font-medium text-black italic lg:text-xl">
            NURİMAK TEKNİK MAKİNA
          </span>
        </h2>
        <p className="max-w-xl text-sm text-zinc-200">
          {t('home.cta.content')}
        </p>
        <section className="mt-10 flex w-full flex-wrap items-start justify-start gap-5">
          <Link
            href="#contact"
            style={{
              letterSpacing: '0.1em',
            }}
            className="text-md min-h-[50px] border border-yellow-400 bg-yellow-400 px-6 py-3 text-center font-bold text-black transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t('global-buttons.quote')}
          </Link>
          <Link
            href="/about"
            style={{
              letterSpacing: '0.1em',
            }}
            className="flex min-h-[50px] flex-row items-center justify-start gap-3 border border-white bg-transparent px-6 py-3 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <FaPhoneAlt className="h-4 w-4" />
            <span>{t('global-buttons.call-us')}</span>
          </Link>
        </section>
      </section>
      <div
        style={{
          backgroundImage:
            'radial-gradient(var(--color-yellow-500) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          backgroundPosition: '-19px -19px',
        }}
        className="pointer-events-none absolute top-0 left-0 z-1 h-full w-full opacity-20"
      />
      <div
        style={{
          boxShadow: '50px -50px 400px 200px var(--color-yellow-400)',
        }}
        className="absolute bottom-0 left-0 aspect-square w-[30%] -translate-[90%] translate-y-[90%] rounded-full bg-yellow-400 opacity-20"
      />
      <div
        style={{
          boxShadow: '-50px 50px 400px 200px var(--color-yellow-400)',
        }}
        className="absolute top-0 right-0 aspect-square w-[30%] translate-[90%] -translate-y-[90%] rounded-full bg-yellow-400 opacity-20"
      />
    </section>
  );
}

export default CTA;
