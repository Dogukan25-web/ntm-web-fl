import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import FurnaceMiscIMG from '@/public/assets/img/furnace-misc.webp';

function MiniAbout() {
  const { t } = useTranslation();
  return (
    <section className="font-theme relative grid w-full grid-cols-1 bg-zinc-950">
      <section className="z-2 flex h-full w-full items-center justify-center bg-linear-to-r from-zinc-950 to-zinc-950/70 py-20">
        <section
          data-aos="fade-in"
          className="max-w-theme flex w-full flex-col"
        >
          <section className="flex w-full max-w-2xl flex-col items-start justify-start gap-10 px-5">
            <h2
              style={{
                letterSpacing: '0.2em',
              }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl font-bold text-white lg:text-6xl">
                NTM
              </span>
              <span className="bg-yellow-400 px-4 py-2 text-xs font-medium text-black italic lg:text-xl">
                NURİMAK TEKNİK MAKİNA
              </span>
            </h2>
            <p className="text-left text-sm text-zinc-200">
              {t('about.desc.content')}
            </p>
            <Link
              href="/about"
              style={{
                letterSpacing: '0.1em',
              }}
              className="border border-white bg-transparent px-6 py-3 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              {t('about.more')}
            </Link>
          </section>
        </section>
      </section>
      <img
        alt="NURİMAK Teknik Makina"
        src={FurnaceMiscIMG.src}
        className="absolute top-0 right-0 z-1 h-full w-full object-cover object-center"
      />
    </section>
  );
}

export default MiniAbout;
