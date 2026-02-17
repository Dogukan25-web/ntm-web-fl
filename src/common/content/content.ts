// Tiltable Rotary Furnace
import TiltableRotaryFurnace1 from '@/public/assets/img/products/tiltable-rotary-furnace/left.webp';
import TiltableRotaryFurnace3 from '@/public/assets/img/products/tiltable-rotary-furnace/cad.webp';
import TiltableRotaryFurnace2 from '@/public/assets/img/products/tiltable-rotary-furnace/center.webp';

// Reverber Furnace
import ReverberFurnace1 from '@/public/assets/img/products/reverber-furnace/left.webp';
import ReverberFurnace2 from '@/public/assets/img/products/reverber-furnace/center.webp';
import ReverberFurnace3 from '@/public/assets/img/products/reverber-furnace/cad.webp';

// Tiltable Pota Furnace
import TiltablePotaFurnace1 from '@/public/assets/img/products/tiltable-pota-furnace/left.webp';
import TiltablePotaFurnace2 from '@/public/assets/img/products/tiltable-pota-furnace/center.webp';
import TiltablePotaFurnace3 from '@/public/assets/img/products/tiltable-pota-furnace/cad.webp';

// Copper Melting System
import CopperMeltingSystem1 from '@/public/assets/img/products/copper-melting-system/left.webp';
import CopperMeltingSystem2 from '@/public/assets/img/products/copper-melting-system/center.webp';
import CopperMeltingSystem3 from '@/public/assets/img/products/copper-melting-system/cad.webp';

// Ingot Casting System
import IngotCastingSystem1 from '@/public/assets/img/products/ingot-casting-system/left.webp';
import IngotCastingSystem2 from '@/public/assets/img/products/ingot-casting-system/center.webp';
import IngotCastingSystem3 from '@/public/assets/img/products/ingot-casting-system/cad.webp';

// De-ox Casting Machine
import DeOxCastingMachine1 from '@/public/assets/img/products/deox-casting-machine/left.webp';
import DeOxCastingMachine2 from '@/public/assets/img/products/deox-casting-machine/center.webp';
import DeOxCastingMachine3 from '@/public/assets/img/products/deox-casting-machine/cad.webp';

// T Ingot (sow) Casting Line
import TIngotSowCastingLine1 from '@/public/assets/img/products/t-ingot-sow-casting-line/left.webp';
import TIngotSowCastingLine2 from '@/public/assets/img/products/t-ingot-sow-casting-line/center.webp';
import TIngotSowCastingLine3 from '@/public/assets/img/products/t-ingot-sow-casting-line/cad.webp';

// Liquid Metal Pumps
import LiquidMetalPumps1 from '@/public/assets/img/products/liquid-metal-pump/left.webp';
import LiquidMetalPumps2 from '@/public/assets/img/products/liquid-metal-pump/center.webp';
import LiquidMetalPumps3 from '@/public/assets/img/products/liquid-metal-pump/cad.webp';

// Liquid Metal Mixers
import LiquidMetalMixers1 from '@/public/assets/img/products/liquid-metal-mixer/left.webp';
import LiquidMetalMixers2 from '@/public/assets/img/products/liquid-metal-mixer/center.webp';
import LiquidMetalMixers3 from '@/public/assets/img/products/liquid-metal-mixer/cad.webp';

// Liquid Metal Transfer Systems
import LiquidMetalTransferSystems1 from '@/public/assets/img/products/liquid-metal-transfer-system/left.webp';
import LiquidMetalTransferSystems2 from '@/public/assets/img/products/liquid-metal-transfer-system/center.webp';
import LiquidMetalTransferSystems3 from '@/public/assets/img/products/liquid-metal-transfer-system/cad.webp';

// Briquetting Presses
import BriquettingPresses1 from '@/public/assets/img/products/briquetting-pres/left.webp';
import BriquettingPresses2 from '@/public/assets/img/products/briquetting-pres/center.webp';
import BriquettingPresses3 from '@/public/assets/img/products/briquetting-pres/cad.webp';

// Scrap Baling
import ScrapBaling1 from '@/public/assets/img/products/scrap-baling/left.webp';
import ScrapBaling2 from '@/public/assets/img/products/scrap-baling/center.webp';
import ScrapBaling3 from '@/public/assets/img/products/scrap-baling/cad.webp';

// Slag Presses
import SlagPresses1 from '@/public/assets/img/products/slag-pres-machine/left.webp';
import SlagPresses2 from '@/public/assets/img/products/slag-pres-machine/center.webp';
import SlagPresses3 from '@/public/assets/img/products/slag-pres-machine/cad.webp';

// Slag Drum
import SlagDrum1 from '@/public/assets/img/products/slag-drum/left.webp';
import SlagDrum2 from '@/public/assets/img/products/slag-drum/center.webp';
import SlagDrum3 from '@/public/assets/img/products/slag-drum/cad.webp';

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
    images: [
      TiltableRotaryFurnace1.src,
      TiltableRotaryFurnace2.src,
      TiltableRotaryFurnace3.src,
    ],
  },
  {
    name: {
      tr: 'Reverber Fırın',
      en: 'Reverber Furnace',
    },
    category: productCategories[0],
    slug: 'reverber-furnace',
    images: [ReverberFurnace1.src, ReverberFurnace2.src, ReverberFurnace3.src],
  },
  {
    name: {
      tr: 'Devrilebilir Pota Fırın',
      en: 'Tiltable Pota Furnace',
    },
    category: productCategories[0],
    slug: 'tiltable-pota-furnace',
    images: [
      TiltablePotaFurnace1.src,
      TiltablePotaFurnace2.src,
      TiltablePotaFurnace3.src,
    ],
  },
  {
    name: {
      tr: 'Bakır Ergitme Sistemi',
      en: 'Copper Melting System',
    },
    category: productCategories[0],
    slug: 'copper-melting-system',
    images: [
      CopperMeltingSystem1.src,
      CopperMeltingSystem2.src,
      CopperMeltingSystem3.src,
    ],
  },
  {
    name: {
      tr: 'Külçe Döküm Sistemi',
      en: 'Ingot Casting System',
    },
    category: productCategories[1],
    slug: 'ingot-casting-system',
    images: [
      IngotCastingSystem1.src,
      IngotCastingSystem2.src,
      IngotCastingSystem3.src,
    ],
  },
  {
    name: {
      tr: 'De-ox Döküm Makinası',
      en: 'De-ox Casting Machine',
    },
    category: productCategories[1],
    slug: 'de-ox-casting-machine',
    images: [
      DeOxCastingMachine1.src,
      DeOxCastingMachine2.src,
      DeOxCastingMachine3.src,
    ],
  },
  {
    name: {
      tr: 'T Ingot (sow) Döküm Hattı',
      en: 'T Ingot (sow) Casting Line',
    },
    category: productCategories[1],
    slug: 't-ingot-sow-casting-line',
    images: [
      TIngotSowCastingLine1.src,
      TIngotSowCastingLine2.src,
      TIngotSowCastingLine3.src,
    ],
  },
  {
    name: {
      tr: 'Sıvı Metal Pompaları',
      en: 'Liquid Metal Pumps',
    },
    category: productCategories[2],
    slug: 'liquid-metal-pumps',
    images: [
      LiquidMetalPumps1.src,
      LiquidMetalPumps2.src,
      LiquidMetalPumps3.src,
    ],
  },
  {
    name: {
      tr: 'Sıvı Metal Mikserleri',
      en: 'Liquid Metal Mixers',
    },
    category: productCategories[2],
    slug: 'liquid-metal-mixers',
    images: [
      LiquidMetalMixers1.src,
      LiquidMetalMixers2.src,
      LiquidMetalMixers3.src,
    ],
  },
  {
    name: {
      tr: 'Sıvı Metal Transfer Yollukları',
      en: 'Liquid Metal Transfer Systems',
    },
    category: productCategories[2],
    slug: 'liquid-metal-transfer-systems',
    images: [
      LiquidMetalTransferSystems1.src,
      LiquidMetalTransferSystems2.src,
      LiquidMetalTransferSystems3.src,
    ],
  },
  {
    name: {
      tr: 'Briketleme Presleri',
      en: 'Briquetting Presses',
    },
    category: productCategories[3],
    slug: 'briquetting-presses',
    images: [
      BriquettingPresses1.src,
      BriquettingPresses2.src,
      BriquettingPresses3.src,
    ],
  },
  {
    name: {
      tr: 'Hurda Balyalama',
      en: 'Scrap Baling',
    },
    category: productCategories[3],
    slug: 'scrap-baling',
    images: [ScrapBaling1.src, ScrapBaling2.src, ScrapBaling3.src],
  },
  {
    name: {
      tr: 'Cüruf Presleri',
      en: 'Slag Presses',
    },
    category: productCategories[4],
    slug: 'slag-presses',
    images: [SlagPresses1.src, SlagPresses2.src, SlagPresses3.src],
  },
  {
    name: {
      tr: 'Cüruf Tamburu',
      en: 'Slag Drum',
    },
    category: productCategories[4],
    slug: 'slag-drum',
    images: [SlagDrum1.src, SlagDrum2.src, SlagDrum3.src],
  },
];

export { productCategories, products };
