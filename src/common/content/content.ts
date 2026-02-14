import MockIMG from '@/public/assets/img/recycling-banner.webp';
import MockIMG2 from '@/public/assets/img/furnace-misc.webp';
import MockIMG3 from '@/public/assets/img/foundry-banner.webp';

export interface ProductCategory {
  name: {
    tr: string;
    en: string;
  };
  slug: string;
}

export interface Product {
  name: {
    tr: string;
    en: string;
  };
  category: {
    name: {
      tr: string;
      en: string;
    };
    slug: string;
  };
  slug: string;
  images?: string[];
}

const productCategories: ProductCategory[] = [
  {
    name: {
      tr: 'Demir Dışı Metal Ergitme ve Endüstriyel Fırınlar',
      en: 'Non-Ferrous Metal Melting and Industrial Furnaces',
    },
    slug: 'non-ferrous-metal-melting-and-industrial-furnaces',
  },
  {
    name: {
      tr: 'Demir Dışı Döküm ve Entegre Sistemleri',
      en: 'Non-Ferrous Casting and Integrated Systems',
    },
    slug: 'non-ferrous-casting-and-integrated-systems',
  },
  {
    name: {
      tr: 'Yardımcı Makina Teçhizat ve Özel Ekipmanlar',
      en: 'Auxiliary Machinery Equipment and Special Equipment',
    },
    slug: 'auxiliary-machinery-equipment-and-special-equipment',
  },
  {
    name: {
      tr: 'Hurda Zenginleştirme Sistemleri',
      en: 'Scrap Enrichment Systems',
    },
    slug: 'scrap-enrichment-systems',
  },
  {
    name: {
      tr: 'Cüruf Zenginleştirme Sistemleri',
      en: 'Slag Enrichment Systems',
    },
    slug: 'slag-enrichment-systems',
  },
];

const products: Product[] = [
  {
    name: {
      tr: 'Devrilebilir Döner Fırın',
      en: 'Tiltable Rotary Furnace',
    },
    category: productCategories[0],
    slug: 'tiltable-rotary-furnace',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Reverber Fırın',
      en: 'Reverber Furnace',
    },
    category: productCategories[0],
    slug: 'reverber-furnace',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Devrilebilir Pota Fırın',
      en: 'Tiltable Pota Furnace',
    },
    category: productCategories[0],
    slug: 'tiltable-pota-furnace',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Bakır Ergitme Sistemi',
      en: 'Copper Melting System',
    },
    category: productCategories[0],
    slug: 'copper-melting-system',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Külçe Döküm Sistemi',
      en: 'Ingot Casting System',
    },
    category: productCategories[1],
    slug: 'ingot-casting-system',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'De-ox Döküm Makinası',
      en: 'De-ox Casting Machine',
    },
    category: productCategories[1],
    slug: 'de-ox-casting-machine',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'T Ingot (sow) Döküm Hattı',
      en: 'T Ingot (sow) Casting Line',
    },
    category: productCategories[1],
    slug: 't-ingot-sow-casting-line',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Sıvı Metal Pompaları',
      en: 'Liquid Metal Pumps',
    },
    category: productCategories[2],
    slug: 'liquid-metal-pumps',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Sıvı Metal Mikserleri',
      en: 'Liquid Metal Mixers',
    },
    category: productCategories[2],
    slug: 'liquid-metal-mixers',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Sıvı Metal Transfer Yollukları',
      en: 'Liquid Metal Transfer Systems',
    },
    category: productCategories[2],
    slug: 'liquid-metal-transfer-systems',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Briketleme Presleri',
      en: 'Briquetting Presses',
    },
    category: productCategories[3],
    slug: 'briquetting-presses',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Hurda Balyalama',
      en: 'Scrap Baling',
    },
    category: productCategories[3],
    slug: 'scrap-baling',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Cüruf Presleri',
      en: 'Slag Presses',
    },
    category: productCategories[4],
    slug: 'slag-presses',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
  {
    name: {
      tr: 'Cüruf Tamburu',
      en: 'Slag Drum',
    },
    category: productCategories[4],
    slug: 'slag-drum',
    images: [MockIMG.src, MockIMG2.src, MockIMG3.src],
  },
];

export { productCategories, products };
