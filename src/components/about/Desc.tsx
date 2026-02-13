import React from 'react';
import { useTranslation } from 'next-i18next';

function Desc() {
  const { t } = useTranslation();
  return (
    <section className="font-theme flex w-full items-center justify-center bg-white px-0 py-20">
      <section
        data-aos="fade-in"
        className="max-w-theme flex w-full flex-col items-start justify-start gap-10 px-5"
      >
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-xs font-medium text-yellow-500 uppercase lg:text-sm"
          >
            {t('about.desc.mini')}
          </span>
          <span className="text-xl font-bold text-black lg:text-3xl">
            {t('about.desc.title')}
          </span>
        </h2>
        <p className="text-xs text-zinc-600 lg:text-sm">
          {t('about.desc.content')}
        </p>
      </section>
    </section>
  );
}

export default Desc;
