import React from 'react';

type Props = {
  title: string;
  description?: string;
};

function Hero({ title, description }: Props) {
  return (
    <section className="font-theme relative flex w-full items-center justify-center overflow-hidden bg-stone-950 py-30">
      <section
        data-aos="fade-in"
        className="max-w-theme z-3 flex w-full flex-col items-start justify-center gap-5 px-5 text-left"
      >
        <h2
          style={{
            letterSpacing: '0.2em',
          }}
          className="mt-10 flex flex-col items-start justify-start gap-3"
        >
          <span className="border-l border-l-yellow-400 pl-4 text-2xl font-medium text-white lg:text-4xl">
            {title}
          </span>
          <span className="text-xs font-medium text-yellow-400 italic">
            NURİMAK TEKNİK MAKİNA
          </span>
        </h2>
        {description && (
          <p className="max-w-xl text-sm text-zinc-200">{description}</p>
        )}
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

Hero.defaultProps = {
  description: null,
};

export default Hero;
