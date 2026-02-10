import React from 'react';

import BGImage from '@/public/assets/img/banner.webp';

function Banner() {
  return (
    <section className="relative m-0 flex min-h-screen w-full items-center justify-center p-0">
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-black/60">
        x
      </div>
      <div
        style={{ backgroundImage: `url(${BGImage.src})` }}
        className="absolute top-0 left-0 -z-[1] h-full w-full bg-cover bg-center"
      />
    </section>
  );
}

export default Banner;
