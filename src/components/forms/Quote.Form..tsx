/* eslint-disable no-alert */
import React from 'react';
import { useTranslation } from 'next-i18next';
import { QuoteFormData } from '@/types/form.types';
import ErrorMsg from '@/components/forms/Error.Msg';
import apiClient from '@/common/clients/api.client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { trapSpacesForRequiredFields } from '@/components/forms/Contact.Form';

import { FaUserGear, FaClockRotateLeft } from 'react-icons/fa6';
import {
  FaWrench,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<QuoteFormData> = async (data) => {
    const HP = document.querySelector('#requirements') as HTMLInputElement;

    if (HP?.value) return;
    setIsSubmitting(true);
    const response = await apiClient.sendQuoteMail(data);

    if (response.success) {
      alert(t('forms.quote-success'));
    } else {
      alert(t('forms.quote-fail'));
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
              {t('quote.mini')}
            </span>
            <span className="text-xl font-bold text-black lg:text-3xl">
              {t('quote.title')}
            </span>
          </h2>
          <p className="text-sm text-zinc-400">{t('quote.content')}</p>
        </section>
        <section className="relative flex w-full flex-wrap items-stretch! justify-center gap-0 border border-zinc-200 shadow-lg lg:flex-nowrap">
          <section className="order-2 flex w-full max-w-full grow flex-col items-start justify-start gap-10 border-t border-t-zinc-200 border-r-zinc-200 bg-zinc-50 p-5 lg:order-0 lg:max-w-[30%] lg:border-t-0 lg:border-r lg:p-10">
            <section className="flex w-full flex-col items-start justify-start gap-2">
              <h3 className="flex flex-row items-center justify-start gap-2">
                <FaUserGear className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-medium text-zinc-700">
                  TEKNİK ANALİZ SÜRECİ
                </span>
              </h3>
              <p className="text-xs text-zinc-500">
                Mühendislik ekibimiz, ilettiğiniz teknik gereksinimleri
                inceleyerek projenize özel bir analiz ve maliyet tahmini
                oluşturur. Lütfen sistem gereksinimlerinizi mümkün olduğunca
                detaylı belirtiniz.
              </p>
            </section>
            <ul className="m-0 flex w-full list-none flex-col gap-4 p-0">
              <li className="flex flex-row items-start justify-start gap-4">
                <span className="item-center flex aspect-square justify-center border border-zinc-200 bg-white p-2">
                  <FaCheckCircle className="h-5 w-5 text-yellow-500" />
                </span>
                <section className="flex flex-col items-start justify-start gap-0.5">
                  <h4 className="text-base font-medium text-zinc-700">
                    Proje Bazlı Mühendislik
                  </h4>
                  <p className="text-xs text-zinc-500">
                    İhtiyaçlarınıza özel tasarlanmış çözümler.
                  </p>
                </section>
              </li>
              <li className="flex flex-row items-start justify-start gap-4">
                <span className="item-center flex aspect-square justify-center border border-zinc-200 bg-white p-2">
                  <FaClockRotateLeft className="h-5 w-5 text-yellow-500" />
                </span>
                <section className="flex flex-col items-start justify-start gap-0.5">
                  <h4 className="text-base font-medium text-zinc-700">
                    40+ Yıllık Tecrübe
                  </h4>
                  <p className="text-xs text-zinc-500">
                    İhtiyaçlarınıza özel tasarlanmış çözümler.
                  </p>
                </section>
              </li>
              <li className="flex flex-row items-start justify-start gap-4">
                <span className="item-center flex aspect-square justify-center border border-zinc-200 bg-white p-2">
                  <FaWrench className="h-5 w-5 text-yellow-500" />
                </span>
                <section className="flex flex-col items-start justify-start gap-0.5">
                  <h4 className="text-base font-medium text-zinc-700">
                    Yerinde Kurulum
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Anahtar teslim proje ve kurulum hizmeti.
                  </p>
                </section>
              </li>
            </ul>
            <span className="h-px w-full bg-zinc-200" />
            <ul className="flex flex-col items-start justify-start gap-4">
              <h3
                style={{
                  letterSpacing: '0.2em',
                }}
                className="text-xs font-semibold text-zinc-400"
              >
                İLETİŞİM
              </h3>
              <li className="m-0 p-0">
                <a
                  href="tel:+902126711100"
                  className="flex flex-row items-start justify-start gap-2 text-xs hover:underline"
                >
                  <FaPhoneAlt className="h-4 w-4 text-zinc-500" />
                  <span className="text-zinc-500">+90 212 671 11 00</span>
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="mailto:info@example.com"
                  className="flex flex-row items-start justify-start gap-2 text-xs hover:underline"
                >
                  <FaEnvelope className="h-4 w-4 text-zinc-500" />
                  <span className="text-zinc-500">info@example.com</span>
                </a>
              </li>
            </ul>
          </section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid h-full w-full grid-cols-1 place-content-start gap-10 bg-white p-5 lg:grid-cols-2 lg:p-10"
          >
            <label
              htmlFor="name"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.fullname.label')}
              </span>
              <input
                id="name"
                placeholder={t('forms.fullname.placeholder')}
                {...register('fullname', {
                  required: t('forms.error.required'),
                  validate: (value) =>
                    trapSpacesForRequiredFields(value) ||
                    t('forms.error.required'),
                })}
                className="w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.fullname?.message} />
            </label>
            <label
              htmlFor="company"
              className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
            >
              <span className="text-sm font-medium text-zinc-500">
                {t('forms.company.label')}
              </span>
              <input
                id="company"
                placeholder={t('forms.company.placeholder')}
                {...register('company', {
                  required: t('forms.error.required'),
                  validate: (value) =>
                    trapSpacesForRequiredFields(value) ||
                    t('forms.error.required'),
                })}
                className="w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.company?.message} />
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
                {t('forms.project.label')}
              </span>
              <textarea
                id="project"
                placeholder={t('forms.project.placeholder')}
                {...register('project', {
                  required: t('forms.error.required'),
                  validate: (value) =>
                    trapSpacesForRequiredFields(value) ||
                    t('forms.error.required'),
                })}
                className="min-h-20 w-full border border-zinc-300 p-2 text-sm placeholder-zinc-300 ring-0! outline-0! transition-all duration-200 focus:border-yellow-400"
              />
              <ErrorMsg error={errors.project?.message} />
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

export default QuoteForm;
