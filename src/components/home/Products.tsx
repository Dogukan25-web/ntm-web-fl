import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import BannerImg from '@/public/assets/img/banner.webp';
import { FaRecycle } from 'react-icons/fa';
import { GiFoundryBucket } from 'react-icons/gi';
import { MdShield } from 'react-icons/md';

export interface ProductCategory {
  id: number;
  icon: React.ElementType;
  slug: string;
}

export const ProductCategories: ProductCategory[] = [
  {
    id: 0,
    icon: FaRecycle,
    slug: 'recycling-systems',
  },
  {
    id: 1,
    icon: GiFoundryBucket,
    slug: 'foundry-systems',
  },
  {
    id: 2,
    icon: MdShield,
    slug: 'defence-industry',
  },
];

function ProductCard({ product }: { product: ProductCategory }) {
  const { t } = useTranslation();

  const Icon = product.icon;

  return (
    <li className="product-card group">
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full items-center justify-center"
      >
        <img
          alt={t(`${product.slug}.title`, { ns: 'products' })}
          src={BannerImg.src}
        />
        <div className="tint" />
        <section className="z-2">
          <Icon />
          <h3>{t(`${product.slug}.title`, { ns: 'products' })}</h3>
          <p>{t(`${product.slug}.short-desc`, { ns: 'products' })}</p>
        </section>
        <span>
          <span>{t('see-all-btn', { ns: 'products' })}</span>
          <span>{'>'}</span>
        </span>
      </Link>
    </li>
  );
}

function Products() {
  return (
    <section className="font-theme flex w-full items-center justify-center bg-white py-20">
      <section className="lg:max-w-theme flex w-full max-w-lg flex-col items-start justify-start gap-10 px-5">
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-xs font-medium text-yellow-500 uppercase lg:text-sm"
          >
            UZMANLIK ALANLARIMIZ
          </span>
          <span className="text-xl font-bold text-black lg:text-3xl">
            ÜRÜNLER VE ÇÖZÜMLERİMİZ
          </span>
        </h2>
        <ul className="grid w-full grid-cols-1 gap-0 gap-1 md:grid-cols-2 lg:grid-cols-3">
          {ProductCategories.map((product) => (
            <ProductCard key={`p-ct-${product.id}`} product={product} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Products;
