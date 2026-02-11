import React from 'react';
import { useTranslation } from 'next-i18next';

function Counts() {
  const { t } = useTranslation('common');
  return (
    <section className="font-theme flex w-full flex-wrap items-center justify-center bg-yellow-400">
      <ul
        data-aos="fade-in"
        className="max-w-theme m-0 flex w-full flex-col flex-wrap items-center justify-center gap-10 p-0 px-5 py-20 lg:flex-row lg:items-start lg:justify-between"
      >
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-bold lg:text-5xl">25+</p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-medium lg:text-sm"
          >
            {t('home.counts.experience').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-bold lg:text-5xl">500+</p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-medium lg:text-sm"
          >
            {t('home.counts.projects').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-bold lg:text-5xl">ISO</p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-medium lg:text-sm"
          >
            {t('home.counts.quality').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-bold lg:text-5xl">7/24</p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-medium lg:text-sm"
          >
            {t('home.counts.support').toUpperCase()}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Counts;
