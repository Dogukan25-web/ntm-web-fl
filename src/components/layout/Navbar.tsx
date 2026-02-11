import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'motion/react';

import { FaRecycle } from 'react-icons/fa';
import { GiFoundryBucket } from 'react-icons/gi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdShield } from 'react-icons/md';

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

function MobileMenu({ isActive }: MobileMenuProps): React.ReactNode {
  const { t } = useTranslation();
  return (
    <nav data-active={isActive} className="mobile-navbar">
      <ul>
        <li
          style={{
            letterSpacing: '0.2em',
          }}
        >
          <Link href="/">{t('navbar.home')}</Link>
        </li>
        <li>
          <Link href="/about">{t('navbar.about')}</Link>
        </li>

        <li>
          <Link href="/#products">{t('navbar.products.main')}</Link>
        </li>

        <li>
          <Link href="/contact">{t('navbar.contact')}</Link>
        </li>
        <li>
          <Link className="quote" href="/#quote">
            {t('navbar.quote')}
          </Link>
        </li>
      </ul>
    </nav>
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
    {
      id: 1,
      name: 'header.about',
      url: '/about',
      classNames: ClassNames,
    },
    {
      id: 1,
      name: 'header.products.main',
      url: '/#products',
      classNames: ClassNames,
      subLinks: [
        {
          id: 11,
          name: 'header.products.sub.recycling-systems',
          url: '/products/recycling-systems',
          classNames: ClassNames,
        },
        {
          id: 12,
          name: 'header.products.sub.foundry-systems',
          url: '/products/foundry-systems',
          classNames: ClassNames,
        },
        {
          id: 13,
          name: 'header.products.sub.defence-industry',
          url: '/products/defence-industry',
          classNames: ClassNames,
        },
      ],
    },
    {
      id: 2,
      name: 'header.contact',
      url: '/contact',
      classNames: ClassNames,
    },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenu(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('resize', () => {
      handleResize();
    });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', () => {
        handleResize();
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  return (
    <>
      <motion.header
        key="navbar"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 0.2,
          ease: 'easeInOut',
        }}
        exit={{ opacity: 0, y: -80 }}
        data-scrolled={scrolledDown}
        className="navbar"
      >
        <section>
          <Link href="/" className="logo">
            <LogoAsIcon />
          </Link>
          <nav className="desktop-nav">
            <ul>
              <li>
                <Link href="/">{t('navbar.home')}</Link>
              </li>
              <li>
                <Link href="/about">{t('navbar.about')}</Link>
              </li>
              <li className="group">
                <Link href="/#products">{t('navbar.products.main')}</Link>
                <section>
                  <section>
                    <span className="triangle" />
                    <section className="submenu-header">
                      <span>{t('navbar.products.sub.main')}</span>
                    </section>
                    <ul>
                      <li>
                        <Link href="/products/recycling-systems">
                          <FaRecycle />
                          <section>
                            <p className="">
                              {t('navbar.products.sub.recycling-systems')}
                            </p>
                            <p>
                              {t('navbar.products.sub.recycling-systems-desc')}
                            </p>
                          </section>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/foundry-systems">
                          <GiFoundryBucket />
                          <section>
                            <p>{t('navbar.products.sub.foundry-systems')}</p>
                            <p>
                              {t('navbar.products.sub.foundry-systems-desc')}
                            </p>
                          </section>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/defence-industry">
                          <MdShield />
                          <section>
                            <p>{t('navbar.products.sub.defence-industry')}</p>
                            <p>
                              {t('navbar.products.sub.defence-industry-desc')}
                            </p>
                          </section>
                        </Link>
                      </li>
                    </ul>
                  </section>
                </section>
              </li>
              <li>
                <Link href="/contact">{t('navbar.contact')}</Link>
              </li>
              <li>
                <Link href="/#quote" className="quote">
                  {t('navbar.quote')}
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="menu-button"
            data-menu-active={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </section>
      </motion.header>
      <MobileMenu isActive={mobileMenu} />
    </>
  );
}
