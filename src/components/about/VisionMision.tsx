import React from 'react';
import { useTranslation } from 'next-i18next';

import { IoMdEye } from 'react-icons/io';
import { IoFlash } from 'react-icons/io5';

function VisionMision() {
  const { t } = useTranslation();
  return (
    <section className="font-theme relative flex w-full items-center justify-center overflow-hidden bg-stone-950 py-20">
      <section
        data-aos="fade-in"
        className="max-w-theme z-3 flex w-full items-center justify-center px-5"
      >
        <ul className="m-0 grid w-full grid-cols-1 place-content-center place-items-start gap-0 border border-stone-800 p-0 lg:grid-cols-2">
          <li className="flex h-full w-full flex-col items-start justify-start gap-3 border-2 border-stone-800 bg-black/10 p-5 backdrop-blur-sm lg:p-10">
            <IoMdEye className="aspect-square h-10 w-10 text-yellow-400" />
            <h2 className="m-0 text-xl leading-snug font-bold tracking-tight text-white lg:text-3xl">
              {t('about.vision-mision.vision.title')}
            </h2>
            <p className="m-0 text-sm leading-relaxed tracking-normal text-zinc-400">
              {t('about.vision-mision.vision.content')}
            </p>
            <span className="mt-5 h-px w-20 bg-yellow-400" />
          </li>
          <li className="flex h-full w-full flex-col items-start justify-start gap-3 border-2 border-stone-800 bg-black/10 p-5 backdrop-blur-sm lg:p-10">
            <IoFlash className="aspect-square h-10 w-10 text-yellow-400" />
            <h2 className="m-0 text-xl leading-snug font-bold tracking-tight text-white lg:text-3xl">
              {t('about.vision-mision.mission.title')}
            </h2>
            <p className="m-0 text-sm leading-relaxed tracking-normal text-zinc-400">
              {t('about.vision-mision.mission.content')}
            </p>
            <span className="mt-5 h-px w-20 bg-yellow-400" />
          </li>
        </ul>
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

export default VisionMision;
