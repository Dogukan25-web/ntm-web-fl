import React from 'react';
import { useTranslation } from 'next-i18next';

import DogukanRazi from '@/public/assets/img/avatars/dogukan-razi.jpg';

const allPeoples = [
  {
    name: 'Doğukan RAZİ',
    title: 'about.peoples.roles.technical-responsible',
    mail: 'dogukanrazi@nurimakteknik.com',
    img: DogukanRazi.src,
  },
  {
    name: 'Elif RAZİ',
    title: 'about.peoples.roles.technical-responsible',
    mail: 'elifrazi@nurimakteknik.com',
    img: DogukanRazi.src,
  },
  {
    name: 'Doğukan RAZİ',
    title: 'about.peoples.roles.technical-responsible',
    mail: 'dogukanrazi@nurimakteknik.com',
    img: DogukanRazi.src,
  },
];

function Peoples() {
  const { t } = useTranslation();
  return (
    <section className="font-theme flex w-full items-center justify-center bg-white px-0 py-20">
      <section
        data-aos="fade-in"
        className="max-w-theme flex w-full flex-col items-start justify-start gap-10 bg-white px-5"
      >
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-xs font-medium text-yellow-500 uppercase lg:text-sm"
          >
            {t('about.peoples.mini')}
          </span>
          <span className="text-xl font-bold text-black lg:text-3xl">
            {t('about.peoples.title')}
          </span>
        </h2>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-10 p-0 md:grid-cols-2 lg:grid-cols-3">
          {allPeoples.map((people, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={`workers-${index}`}
              className="flex w-full flex-col items-center justify-center gap-5"
            >
              <section className="flex w-full max-w-50 flex-col items-center justify-start gap-5">
                <img
                  alt={people.name}
                  src={people.img}
                  className="aspect-square w-full max-w-40 rounded-full border-2 border-yellow-500 object-cover object-center shadow-xl"
                />
                <section className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-center text-sm font-semibold text-black lg:text-lg">
                    {people.name}
                  </h3>
                  <p className="text-center text-xs font-medium text-gray-500 lg:text-sm">
                    {t(people.title)}
                  </p>
                  <a
                    href={`mailto:${people.mail}`}
                    className="text-center text-xs font-medium text-yellow-500 lg:text-sm"
                  >
                    {people.mail}
                  </a>
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Peoples;
