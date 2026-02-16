/* eslint-disable no-alert */
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ErrorMsg from '@/components/forms/Error.Msg';
import apiClient from '@/common/clients/api.client';
import { ContactFormData } from '@/types/form.types';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FaUserGear } from 'react-icons/fa6';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const trapSpacesForRequiredFields = (value) => !!value.trim();

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const HP = document.querySelector('#requirements') as HTMLInputElement;

    if (HP?.value) return;
    setIsSubmitting(true);
    const response = await apiClient.sendContactMail(data);

    if (response.success) {
      alert(t('forms.contact-success'));
    } else {
      alert(t('forms.contact-fail'));
    }
    setIsSubmitting(false);
  };
  return (
    <section className="font-theme flex w-full flex-col items-center justify-start bg-white py-20">
      <section className="max-w-theme flex w-full flex-col items-center justify-start gap-10 px-5 py-0">
        <section className="flex w-full flex-col gap-5">
          <h2 className="flex flex-col items-start justify-start gap-2">
            <span
              style={{
                letterSpacing: '0.2em',
              }}
              className="text-xs font-medium text-yellow-500 uppercase lg:text-sm"
            >
              {t('contact.mini')}
            </span>
            <span className="text-xl font-bold text-black lg:text-3xl">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-sm text-zinc-400">{t('contact.content')}</p>
        </section>
        <section className="relative flex w-full flex-wrap items-stretch! justify-center gap-0 border border-zinc-200 shadow-lg lg:flex-nowrap">
          <ul className="order-2 flex w-full max-w-full grow flex-col items-start justify-start gap-8 border-t border-t-zinc-200 border-r-zinc-200 bg-zinc-50 p-5 lg:order-0 lg:max-w-[30%] lg:border-t-0 lg:border-r lg:p-10">
            <li className="flex w-full flex-row items-start justify-start gap-4">
              <FaUserGear className="h-6 w-6 text-yellow-500" />
              <section className="flex w-full flex-col items-start justify-start gap-1">
                <h3 className="text-sm font-semibold text-zinc-700">ADRES</h3>
                <p className="text-xs text-zinc-500">
                  İkitelli OSB, Ziya Gökalp Mahallesi, Pik Dökümcüler Sanayi
                  Sitesi, No:27, TEM 34, Kat:2, No:205
                </p>
              </section>
            </li>
            <span className="h-px w-full bg-zinc-200" />
            <li className="flex w-full flex-row items-start justify-start gap-4">
              <FaPhoneAlt className="h-6 w-6 text-yellow-500" />
              <section className="flex w-full flex-col items-start justify-start gap-1">
                <h3 className="text-sm font-semibold text-zinc-700">TELEFON</h3>
                <a
                  href="tel:+902128777025"
                  className="text-xs text-zinc-500 hover:underline"
                >
                  +90 (212) 877 70 25
                </a>
                <a
                  href="tel:+905458533962"
                  className="text-xs text-zinc-500 hover:underline"
                >
                  +90 (545) 853 39 62
                </a>
              </section>
            </li>
            <span className="h-px w-full bg-zinc-200" />
            <li className="flex w-full flex-row items-start justify-start gap-4">
              <FaEnvelope className="h-6 w-6 text-yellow-500" />
              <section className="flex w-full flex-col items-start justify-start gap-1">
                <h3 className="text-sm font-semibold text-zinc-700">E-POSTA</h3>
                <a
                  href="mailto:info@nurimakteknik.com"
                  className="text-xs text-zinc-500 hover:underline"
                >
                  info@nurimakteknik.com
                </a>
              </section>
            </li>
          </ul>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid h-full w-full grid-cols-1 place-content-start gap-5 bg-white p-5 lg:grid-cols-2 lg:p-10"
          >
            <label
              htmlFor="name"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.name.label')}
              </span>
              <input
                id="name"
                placeholder={t('forms.name.placeholder')}
                {...register('name', {
                  required: t('forms.error.required'),
                  validate: (value) =>
                    trapSpacesForRequiredFields(value) ||
                    t('forms.error.required'),
                })}
                className="w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.name?.message} />
            </label>
            <label
              htmlFor="surname"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.surname.label')}
              </span>
              <input
                id="surname"
                placeholder={t('forms.surname.placeholder')}
                {...register('surname', {
                  required: t('forms.error.required'),
                  validate: (value) =>
                    trapSpacesForRequiredFields(value) ||
                    t('forms.error.required'),
                })}
                className="w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.surname?.message} />
            </label>
            <label
              htmlFor="email"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.email.label')}
              </span>
              <input
                id="email"
                placeholder={t('forms.email.placeholder')}
                {...register('email', {
                  required: t('forms.error.required'),
                  validate: (value) => {
                    const emailRegex =
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    return (
                      emailRegex.test(value) || t('forms.error.email-invalid')
                    );
                  },
                })}
                className="w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.email?.message} />
            </label>
            <input type="text" className="hidden" id="requirements" />
            <label
              htmlFor="phone"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.phone.label')}
              </span>
              <input
                id="phone"
                placeholder={t('forms.phone.placeholder')}
                {...register('phone', {
                  required: t('forms.error.required'),
                  validate: (value) => {
                    const phoneRegex =
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
                    return (
                      phoneRegex.test(value) || t('forms.error.phone-invalid')
                    );
                  },
                })}
                className="w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.phone?.message} />
            </label>
            <label
              htmlFor="message"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.message.label')}
              </span>
              <textarea
                id="message"
                placeholder={t('forms.message.placeholder')}
                {...register('message', {
                  required: t('forms.error.required'),
                  validate: (value) =>
                    trapSpacesForRequiredFields(value) ||
                    t('forms.error.required'),
                })}
                className="min-h-20 w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.message?.message} />
            </label>
            <label
              htmlFor="kvkk"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1"
            >
              <div className="flex items-center gap-2">
                <input
                  id="kvkk"
                  type="checkbox"
                  {...register('kvkk', {
                    required: t('forms.error.required'),
                  })}
                  className="form-checkbox h-4 w-4 border border-zinc-300 text-yellow-400 focus:ring-yellow-400"
                />
                <span className="text-sm text-zinc-500">
                  {i18n.language === 'tr' ? (
                    <>
                      <Link
                        href="/policy/kvkk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:underline"
                      >
                        KVKK Aydınlatma Metni
                      </Link>
                      {
                        ' kapsamında kişisel verilerimin işlenmesini kabul ediyorum.'
                      }
                    </>
                  ) : (
                    <>
                      I consent to the processing of my personal data in
                      accordance with the{' '}
                      <Link
                        href="/policy/kvkk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:underline"
                      >
                        KVKK Disclosure Text
                      </Link>
                      .
                    </>
                  )}
                </span>
              </div>
              <ErrorMsg error={errors.kvkk?.message} />
            </label>
            <section className="col-span-full">
              <button
                type="submit"
                style={{
                  letterSpacing: '0.2em',
                }}
                disabled={isSubmitting}
                className="text-md cursor-pointer border border-yellow-400 bg-yellow-400 px-6 py-3 text-center font-bold text-black uppercase transition-all duration-300 hover:bg-white hover:text-black disabled:opacity-50"
              >
                {isSubmitting ? t('forms.submitting') : t('forms.submit')}
              </button>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
}

export default ContactForm;
