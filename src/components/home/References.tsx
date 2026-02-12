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
    url: 'http://www.kayalaraluminyum.com/',
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
    <section className="m-0 flex w-full items-center justify-center overflow-hidden p-0 py-20">
      <Swiper
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        centeredSlides
        spaceBetween={75}
        scrollbar={false}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {allReferences.map((ref) => (
          <SwiperSlide
            key={`ref-${ref.id}`}
            className="flex! h-full min-h-[100px] w-full items-center justify-center"
          >
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inset-0 m-0 flex w-full max-w-[150px] items-center justify-center p-0 grayscale-100 transition-all duration-200 hover:grayscale-0"
            >
              <img
                alt={`Reference ${ref.id}`}
                src={ref.img}
                className="w-full"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default References;
