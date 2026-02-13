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

  return (
    <footer className="font-theme m-0 flex min-h-[100px] w-full flex-col flex-wrap items-center justify-center gap-0 border-t border-t-zinc-800 bg-stone-950 p-0">
      <section
        data-aos="fade-in"
        className="max-w-theme flex h-full w-full items-center justify-center px-5 py-20"
      >
        <ul className="grid w-full grid-cols-1 place-content-start gap-10 md:grid-cols-2 lg:grid-cols-5">
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0 lg:col-span-2">
            <Link
              href="/"
              className="m-0 flex w-fit flex-row items-start justify-start p-0 transition-all duration-200 hover:scale-105"
            >
              <LogoAsIcon className="w-full max-w-48 text-white" />
            </Link>
            <p className="text-xs whitespace-pre-wrap text-zinc-300">
              {t('home.banner.content')}
            </p>
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
              <li>
                <Link
                  href="/about#certificates"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('footer.company.certificates')}
                </Link>
              </li>
              <li>
                <Link
                  href="/kvkk-policy"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('footer.company.kvkk-policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('footer.company.privacy-policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('footer.company.terms-of-service')}
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
                  href="tel:+902123456789"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  +90 212 345 67 89
                </a>
              </li>
              <li>
                <a
                  href="mailto:nurimak@gmail.com"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  nurimak@gmail.com
                </a>
              </li>
              <li>
                <p className="py-1 text-xs text-zinc-400">
                  Başakşehir / İstanbul
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
