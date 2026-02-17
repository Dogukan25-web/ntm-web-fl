import React from 'react';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { FooterSocialLink } from '@/types/boilerplate.types';
import LogoAsIcon from '../misc/LogoAsIcon';

function Footer(): React.ReactNode {
  const { t } = useTranslation();
  const FooterSocialLinks: FooterSocialLink[] = [
    {
      id: 0,
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: BsInstagram,
    },
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: BsFacebook,
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: BsLinkedin,
    },
  ];

  const manageConsent = () => {
    localStorage.removeItem('ntm-cookie-consent');
    window.location.reload();
  };

  return (
    <footer className="font-theme m-0 flex min-h-[100px] w-full flex-col flex-wrap items-center justify-center gap-0 border-t border-t-zinc-800 bg-stone-950 p-0">
      <section className="max-w-theme flex h-full w-full items-center justify-center px-5 py-20">
        <ul className="grid w-full grid-cols-1 place-content-start gap-10 md:grid-cols-2 lg:grid-cols-5">
          <li className="inset-0 m-0 flex w-full flex-col items-start justify-start gap-5 p-0 lg:col-span-2">
            <Link
              href="/"
              className="m-0 flex w-fit flex-row items-start justify-start p-0 transition-all duration-200 hover:scale-105"
            >
              <LogoAsIcon className="w-full max-w-48 text-white" />
            </Link>
            <p className="text-xs whitespace-pre-wrap text-zinc-300">
              {t('home.banner.content')}
            </p>
            <button
              className="text-xs text-zinc-300 hover:underline"
              type="button"
              onClick={manageConsent}
            >
              {t('policy.manage-consent')}
            </button>
            <ul className="flex flex-wrap items-center justify-start gap-4">
              {FooterSocialLinks.map(({ url, id, icon: Icon }) => (
                <li key={`footer-social-link-${id}`}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors duration-200 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0">
            <h3 className="font-semibold text-white">
              {t('footer.quick-links')}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-2">
              <li>
                <Link
                  href="/"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.products.main')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </li>
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0">
            <h3 className="font-semibold text-white">
              {t('footer.company.title')}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-2">
              {/* <li>
                <Link
                  href="/about#certificates"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('footer.company.certificates')}
                </Link>
              </li> */}
              <li>
                <Link
                  href="/policy/kvkk"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.kvkk-policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/privacy-policy"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.privacy-policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/terms-of-service"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.terms-of-service')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/explicit-consent"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.explicit-consent')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/cookie-policy"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.cookie-policy')}
                </Link>
              </li>
            </ul>
          </li>
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0">
            <h3 className="font-semibold text-white">
              {t('footer.contact-us')}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-2">
              <li>
                <a
                  href="tel:+902128777025"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  +90 (212) 877 70 25
                </a>
              </li>
              <li>
                <a
                  href="tel:+905458533962"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  +90 (545) 853 39 62
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nurimakteknik.com"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  info@nurimakteknik.com
                </a>
              </li>
              <li>
                <p className="py-1 text-xs text-zinc-400">
                  İkitelli OSB, Ziya Gökalp Mahallesi, Pik Dökümcüler Sanayi
                  Sitesi, No:27, TEM 34, Kat:2, No:205
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="flex w-full items-center justify-center gap-1 bg-black p-2 text-xs text-zinc-700">
        <p>Made By</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/of-kayalar/"
        >
          Ö. Kaya
        </a>
      </section>
    </footer>
  );
}

export default Footer;
