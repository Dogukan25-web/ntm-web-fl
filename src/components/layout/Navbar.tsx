import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { CiMenuFries } from 'react-icons/ci';

import { MobileMenuProps } from '@/types/boilerplate.types';

import LogoAsIcon from '../misc/LogoAsIcon';
import { ProductCategories } from '../home/Products';

function MobileMenu({ isActive }: MobileMenuProps): React.ReactNode {
  const Router = useRouter();
  const {
    t,
    i18n: { language },
  } = useTranslation();
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
            {t('global-buttons.quote')}
          </Link>
        </li>
        <li>
          <Link
            href={Router.asPath}
            className="text-2xl!"
            locale={language === 'en' ? 'tr' : 'en'}
          >
            {language === 'en' ? '🇹🇷' : '🇬🇧'}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Navbar(): React.ReactNode {
  const Router = useRouter();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [scrolledDown, setScrolledDown] = React.useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenu(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
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
                      {ProductCategories.map((product) => (
                        <li key={`nav-p-ct-${product.id}`}>
                          {/* <Link href={`/products/${product.slug}`}> */}
                          <Link href="/products">
                            <product.icon />
                            <section>
                              <p className="">
                                {t(`${product.slug}.title`, { ns: 'products' })}
                              </p>
                              <p>
                                {t(`${product.slug}.short-desc`, {
                                  ns: 'products',
                                })}
                              </p>
                            </section>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                </section>
              </li>
              <li>
                <Link href="/contact">{t('navbar.contact')}</Link>
              </li>
              <li>
                <Link href="/request-quote" className="quote">
                  {t('global-buttons.quote')}
                </Link>
              </li>
              <li>
                <Link
                  href={Router.asPath}
                  className="text-xl!"
                  locale={language === 'en' ? 'tr' : 'en'}
                >
                  {language === 'en' ? '🇹🇷' : '🇬🇧'}
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
            <CiMenuFries />
          </button>
        </section>
      </motion.header>
      <MobileMenu isActive={mobileMenu} />
    </>
  );
}
