import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import {
  NavbarLink,
  MobileMenuProps,
  NavbarClass,
} from '@/types/boilerplate.types';

import { useTranslation } from 'next-i18next';

import LogoAsIcon from '../misc/LogoAsIcon';

const ClassNames: NavbarClass = {
  desktop: 'text-current hover:text-white transition-all duration-200',
  mobile: 'text-white',
};

function MobileMenu({ isActive, children }: MobileMenuProps): React.ReactNode {
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 z-[49] flex h-full w-full flex-col items-center justify-start bg-zinc-500 px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto py-[150px]">
        {children}
      </ul>
    </div>
  );
}

export default function Navbar(): React.ReactNode {
  const Router = useRouter();
  const { t } = useTranslation();
  const [scrolledDown, setScrolledDown] = React.useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  const HeaderLinks: NavbarLink[] = [
    {
      id: 0,
      name: 'header.home',
      url: '/',
      classNames: ClassNames,
    },
  ];

  const getDesktopElements = (): React.ReactNode => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { desktop: className }, external }) => (
        <li key={`d-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t(name)}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t(name)}
            </Link>
          )}
        </li>
      ),
    );

    return elements;
  };

  const getMobileElements = (): React.ReactNode => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { mobile: className }, external }) => (
        <li key={`m-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t(name)}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t(name)}
            </Link>
          )}
        </li>
      ),
    );

    return elements;
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      document.body.style.overflow = 'unset';

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  return (
    <header
      className={`${scrolledDown ? 'bg-black/50 text-zinc-200 shadow-md backdrop-blur-md' : 'bg-transparent text-zinc-300 backdrop-blur-none'} font-theme fixed top-0 left-0 z-[10] flex w-full items-center justify-center transition-all duration-200`}
    >
      <section className="max-w-theme flex w-full flex-wrap items-center justify-between gap-5 p-5">
        <Link
          href="/"
          className="relative z-[50] transition-all duration-200 hover:text-white"
        >
          <LogoAsIcon className="w-48" />
        </Link>
        <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
          <ul className="flex w-fit items-center justify-end gap-5">
            {getDesktopElements()}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="z-[100] flex max-w-fit items-center justify-center lg:hidden"
        >
          <HiOutlineMenuAlt3
            className={`${
              mobileMenu ? 'rotate-180' : 'rotate-0'
            } h-8 w-8 text-center transition-all duration-500`}
          />
        </button>
      </section>
      <MobileMenu isActive={mobileMenu}>{getMobileElements()}</MobileMenu>
    </header>
  );
}
