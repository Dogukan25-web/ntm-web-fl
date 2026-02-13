import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { FaRecycle } from 'react-icons/fa';
import { GiFoundryBucket } from 'react-icons/gi';

import RecyclingBanner from '@/public/assets/img/recycling-banner.webp';
import FoundryBanner from '@/public/assets/img/foundry-banner.webp';

export interface ProductCategory {
  id: number;
  icon: React.ElementType;
  slug: string;
  img?: string;
}

export const ProductCategories: ProductCategory[] = [
  {
    id: 0,
    icon: FaRecycle,
    slug: 'recycling-systems',
    img: RecyclingBanner.src,
  },
  {
    id: 1,
    icon: GiFoundryBucket,
    slug: 'foundry-systems',
    img: FoundryBanner.src,
  },
];

function ProductCard({ product }: { product: ProductCategory }) {
  const { t } = useTranslation();

  const Icon = product.icon;

  return (
    <li className="product-card group relative m-0 p-0">
      {/* <Link href={`/products/${product.slug}`}> */}
      <Link href="/products">
        {product.img && (
          <img
            alt={t(`${product.slug}.title`, { ns: 'products' })}
            src={product.img}
          />
        )}
        <div className="tint" />
        <section>
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
  const { t } = useTranslation();
  return (
    <section
      id="products"
      className="font-theme flex w-full items-center justify-center bg-white py-20"
    >
      <section
        data-aos="fade-in"
        className="lg:max-w-theme flex w-full max-w-lg flex-col items-start justify-start gap-10 px-5"
      >
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-xs font-medium text-yellow-500 uppercase lg:text-sm"
          >
            {t('mini', { ns: 'products' })}
          </span>
          <span className="text-xl font-bold text-black lg:text-3xl">
            {t('title', { ns: 'products' })}
          </span>
        </h2>
        <ul className="grid h-full w-full grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2">
          {ProductCategories.map((product) => (
            <ProductCard key={`p-ct-${product.id}`} product={product} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Products;
