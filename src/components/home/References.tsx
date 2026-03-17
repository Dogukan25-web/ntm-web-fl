import React from 'react';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import RefIMG1 from '@/public/assets/img/references/kayalar-aluminyum.webp';
import RefIMG2 from '@/public/assets/img/references/ingotsan.webp';
import RefIMG3 from '@/public/assets/img/references/gelisim-aluminyum.webp';
import RefIMG4 from '@/public/assets/img/references/platinum-metal.webp';
import RefIMG5 from '@/public/assets/img/references/levent-kimya.webp';

const allReferences = [
  {
    id: 0,
    img: RefIMG1.src,
    url: 'https://www.kayalaraluminyum.com.tr/',
  },
  {
    id: 1,
    img: RefIMG2.src,
    url: 'https://ingotsan.com/',
  },
  {
    id: 2,
    img: RefIMG3.src,
    url: 'https://gelisimaluminyum.com.tr/',
  },
  {
    id: 3,
    img: RefIMG4.src,
    url: 'https://platinummetal.net/',
  },
  {
    id: 4,
    img: RefIMG5.src,
    url: 'https://www.leventkimya.com/',
  },
];

function References() {
  return (
    <section className="flex w-full items-center justify-center bg-white py-20">
      <section
        data-aos="fade-in"
        className="m-0 flex w-full items-center justify-center overflow-hidden p-0"
      >
        <Swiper
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          centeredSlides
          scrollbar={false}
          slidesPerView={1}
          spaceBetween={10}
          className="w-full"
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            '@1.00': {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {[...allReferences, ...allReferences].map((ref, key) => (
            <SwiperSlide
              // eslint-disable-next-line react/no-array-index-key
              key={`ref-${ref.id}-${key}`}
              className="flex! h-full min-h-[100px] w-full items-center justify-center"
            >
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inset-0 m-0 flex h-fit w-fit items-center justify-center p-0 grayscale-100 transition-all duration-200 hover:grayscale-0"
              >
                <img
                  className="w-full max-w-[125px]"
                  alt={`Reference ${ref.id}`}
                  src={ref.img}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}

export default References;
