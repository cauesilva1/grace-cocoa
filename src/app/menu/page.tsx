'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProductModal from '@/components/productModal';

type Product = {
  id: number;
  title: string;
  desc: string;
  price: number;
  image: string;
  flavors?: string[];
  hasCommentsBox?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    title: 'Palha Italiana',
    desc: '95 grams of chocolate fudge with tea biscuits covered in sugar.',
    price: 5,
    image: '/images/cardapio/palha.svg',
    flavors: ['Chocolate', 'Morango', 'Doce de Leite'],
  },
  {
    id: 2,
    title: 'Holy Bites',
    desc: '145 grams of snack-sized Palha Italiana.',
    price: 5,
    image: '/images/cardapio/holy.svg',
    flavors: ['Original', 'Caramelo', 'Limão'],
  },
  {
    id: 3,
    title: 'Doce como Mel',
    desc: 'Pão de Mel is a honey chocolate cake filled with dulce de leche and coated in chocolate.',
    price: 5,
    image: '/images/cardapio/pao.svg',
    flavors: ['mel'],
  },
  {
    id: 4,
    title: 'Holy Party Collection',
    desc: 'Pão de Mel is a honey chocolate cake filled with dulce de leche and coated in chocolate.',
    price: 5,
    image: '/images/cardapio/box.svg',
    hasCommentsBox: true,
  },
];

export default function MenuPage() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <main className="bg-[#FFF2D8] text-[#6B1D1D] min-h-screen flex flex-col pt-24 overflow-y-auto scrollbar-hide md:overflow-y-visible">
      {/* Título */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <h1
          className="text-center text-[60px] md:text-[130px] font-serif font-extrabold"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          MENU
        </h1>
      </div>

      {/* Grid dos produtos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelected(product)}
            className="cursor-pointer flex flex-col items-center text-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="rounded"
            />
            <h2 className="font-semibold mt-2">{product.title}</h2>
            <p className="text-sm">{product.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
