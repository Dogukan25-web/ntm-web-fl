import React from 'react';

import BGImage from '@/public/assets/img/banner.webp';
import Link from 'next/link';

function Banner() {
  return (
    <section className="relative m-0 grid min-h-screen w-full grid-cols-1 p-0">
      <section className="relative top-0 left-0 z-0 flex h-full w-full items-center justify-center bg-black/60">
        <section className="max-w-theme font-theme flex w-full flex-col items-start justify-center gap-5 p-5 py-20">
          <p
            style={{
              letterSpacing: '0.5em',
            }}
            className="bg-yellow-300 p-2 text-xs text-black lg:text-sm"
          >
            1980&apos;DEN BERİ MÜHENDİSLİKTE MÜKEMMELLİK
          </p>
          <h2 className="text-2xl font-semibold text-white lg:text-4xl">
            AĞIR SANAYİ MAKİNA <br /> VE METAL GERİ DÖNÜŞÜM SİSTEMLERİ
          </h2>
          <p className="max-w-md border-l-2 border-amber-300 py-0 pl-4 text-sm text-white lg:text-lg">
            Endüstriyel Tesisler İçin Mühendislik, Üretim ve Kurulum Çözümleri
          </p>
          <section className="mt-10 flex w-full flex-wrap items-center justify-start gap-5">
            <Link
              href="#contact"
              style={{
                letterSpacing: '0.1em',
              }}
              className="text-md border border-yellow-300 bg-yellow-300 px-6 py-3 text-center font-bold text-black transition-all duration-150 hover:bg-white hover:text-black"
            >
              TEKLİF AL
            </Link>
            <Link
              href="#contact"
              style={{
                letterSpacing: '0.1em',
              }}
              className="text-md border border-zinc-200 bg-transparent px-6 py-3 text-center font-normal text-zinc-200 transition-all duration-150 hover:bg-white hover:text-black"
            >
              ÜRÜNLERİ İNCELE
            </Link>
          </section>
        </section>
      </section>
      <section
        style={{ backgroundImage: `url(${BGImage.src})` }}
        className="absolute top-0 left-0 -z-1 h-full w-full bg-cover bg-center"
      />
    </section>
  );
}

export default Banner;
