import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

import { productCategories, products } from '@/common/content/content';

import MockIMG from '@/public/assets/img/products/mock.webp';

function FilteredProducts({
  categorySlug,
  searchKeyword,
}: {
  categorySlug: string | null | 'FR';
  searchKeyword: string | null;
}) {
  const { t, i18n } = useTranslation();

  const filteredProducts = React.useMemo(() => {
    let filtered = products;
    if (categorySlug && categorySlug !== 'FR') {
      filtered = filtered.filter((product) =>
        product.category.slug
          .toLowerCase()
          .includes(categorySlug.toLowerCase()),
      );
    }
    if (searchKeyword) {
      filtered = filtered.filter((product) =>
        product.name[i18n.language]
          .toLocaleLowerCase(i18n.language)
          .includes(searchKeyword.toLocaleLowerCase(i18n.language)),
      );
    }
    return filtered;
  }, [categorySlug, searchKeyword, i18n.language]);

  return (
    <ul
      key={`filtered-products-${categorySlug}`}
      className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {filteredProducts.map((product, key) => (
        <li
          key={`${product.slug}-product-card`}
          style={{
            animationDelay: `${key * 0.1}s`,
          }}
          className="default-fade-in group m-0 grid min-h-full w-full grid-cols-1 border border-zinc-200 p-0 transition-colors duration-200 hover:border-yellow-400"
        >
          <Link
            className="relative m-0 flex min-h-full w-full flex-1 flex-col justify-between gap-0 p-0 transition-all duration-200 group-hover:bg-zinc-100"
            href={`/products/${product.slug}`}
          >
            <img
              src={MockIMG.src}
              alt={product.name[i18n.language]}
              className="aspect-square! w-full object-cover object-center"
            />
            <section className="flex w-full flex-1 flex-col justify-between gap-1 p-5">
              <section className="flex w-full flex-col items-start justify-start gap-2">
                <h3 className="text-lg font-semibold text-zinc-900 uppercase">
                  {product.name[i18n.language]}
                </h3>
                <p className="text-xs text-zinc-400">
                  {product.category.name[i18n.language]}
                </p>
              </section>
              <section className="mt-5 flex w-full flex-row items-center justify-between border-t border-t-zinc-200 pt-5">
                <span className="text-xs font-bold text-zinc-300">NTM</span>
                <span
                  style={{
                    letterSpacing: '0.1em',
                  }}
                  className="text-sm font-medium text-yellow-500"
                >
                  {t('details-btn', { ns: 'products' })}
                </span>
              </section>
            </section>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ProductGallery() {
  const { t, i18n } = useTranslation();
  const [searchKeyword, setSearchKeyword] = React.useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<
    string | null | 'FR'
  >('FR');

  React.useEffect(() => {
    const ctSelectorList = document.querySelector('.categories-selector');

    if (window.scrollY > 300 && selectedCategory !== 'FR') {
      const productsSection = document.getElementById('f-products');
      productsSection?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (ctSelectorList) {
      const selectedBtn = ctSelectorList.querySelector(
        `[data-ct-picker="${selectedCategory ?? 'all'}"]`,
      ) as HTMLElement | null;

      ctSelectorList.scrollTo({
        behavior: 'smooth',
        left: (selectedBtn?.offsetLeft ?? 0) - 25,
      });
    }
  }, [selectedCategory]);

  return (
    <section
      id="f-products"
      className="font-theme flex w-full items-center justify-center bg-white"
    >
      <section className="max-w-theme flex w-full items-center justify-center py-20">
        <section className="grid w-full max-w-sm grid-cols-1 place-content-start place-items-start gap-5 md:max-w-full md:grid-cols-5 lg:max-w-full lg:grid-cols-6">
          <h2 className="col-span-full mb-10 flex flex-col items-start justify-start gap-2 px-5">
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
          <section className="sticky top-18 z-3 col-span-1 flex w-full flex-col items-start justify-start gap-2 bg-white/90 p-5 text-left backdrop-blur-lg md:col-span-2 md:pt-8 lg:col-span-2 lg:pt-8">
            <span
              style={{
                letterSpacing: '0.2em',
              }}
              className="w-full border-b border-b-zinc-200 pb-2 text-sm font-medium text-zinc-400"
            >
              KATEGORİLER
            </span>
            <ul className="categories-selector relative m-0 flex w-full list-none items-start justify-start gap-2 overflow-scroll p-0 md:flex-col md:overflow-hidden lg:flex-col lg:overflow-hidden">
              <li className="m-0 flex w-full min-w-fit items-start justify-start p-0">
                <button
                  className="p-ct-picker"
                  type="button"
                  data-ct-picker="all"
                  onClick={() => setSelectedCategory(null)}
                  data-selected-category={
                    selectedCategory === null || selectedCategory === 'FR'
                  }
                >
                  Tüm Kategoriler
                </button>
              </li>
              {productCategories.map((category) => (
                <li
                  data-ct-picker={category.slug}
                  key={`${category.slug}-ct-picker`}
                  className="m-0 flex w-full min-w-fit items-start justify-start p-0 md:min-w-auto lg:min-w-auto"
                >
                  <button
                    className="p-ct-picker"
                    type="button"
                    onClick={() =>
                      category.slug !== selectedCategory &&
                      setSelectedCategory(category.slug)
                    }
                    data-selected-category={selectedCategory === category.slug}
                  >
                    {category.name[i18n.language]}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section className="col-span-full px-5 md:col-span-3 lg:col-span-4 lg:pl-0">
            <section className="item-center col-span-full flex w-full justify-start">
              <section className="relative m-0 mb-5 flex w-full max-w-[384px] items-center justify-start border border-zinc-200 bg-white px-3 py-0 text-zinc-500 transition-colors duration-200 focus-within:border-yellow-500 focus-within:text-yellow-400">
                <FaSearch className="mr-2 text-current transition-colors duration-200" />
                <input
                  type="text"
                  defaultValue={searchKeyword ?? ''}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder={t('search-placeholder', { ns: 'products' })}
                  className="p-ct-search w-full border-none border-yellow-500! bg-transparent p-2 text-sm text-zinc-500 ring-0! outline-0!"
                />
              </section>
            </section>
            <FilteredProducts
              searchKeyword={searchKeyword}
              categorySlug={selectedCategory}
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductGallery;
