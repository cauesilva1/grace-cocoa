'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProductModal from '@/components/productModal';
import Footer from '@/components/Footer';
import type { Product } from '@/store/cartstore';

const products: Product[] = [
  {
    id: 1,
    title: 'Palha Italiana',
    desc: '95 grams of chocolate fudge with tea biscuits covered in sugar.',
    price: 5, // preço base (exemplo)
    image: '/images/cardapio/palha.svg',
    flavors: [
      { name: 'Tradicional', price: 5 },
      { name: 'Oreo', price: 6 },
      { name: 'Oreo Black', price: 6 },
      { name: 'Dois Amores', price: 5 },
    ],
  },
  {
    id: 2,
    title: 'Holy Bites',
    desc: '145 grams of snack-sized Palha Italiana.',
    price: 10, // preço fixo
    image: '/images/cardapio/holy.svg',
    flavors: [
      'Tradicional',
      'Oreo',
      'Oreo Black',
      'Dois Amores',
    ], // pode escolher múltiplos sabores, preço fixo
  },
  {
    id: 3,
    title: 'Doce como Mel',
    desc: 'Pão de Mel is a honey chocolate cake filled with dulce de leche and coated in chocolate.',
    price: 5,
    image: '/images/cardapio/pao.svg',
    flavors: ['Mel'],
  },
  {
    id: 4,
    title: 'Holy Party Collection',
    desc: 'Escolha o kit desejado dentro do produto, assim como escolhe o sabor.',
    price: 16, // preço base para o menor kit
    image: '/images/cardapio/box.svg',
    hasCommentsBox: true,
    flavors: [
      { name: 'Grace Kit (8 unidades)', price: 16 },
      { name: 'Blessing Kit (16 unidades)', price: 32 },
      { name: 'Joy Kit (30 unidades)', price: 60 },
      { name: 'Light Kit (60 unidades)', price: 120 },
      { name: 'Heaven Kit (100 unidades)', price: 200 },
    ],
  },
];


export default function MenuPage() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <><main className="bg-[#FFF2D8] text-[#6B1D1D] min-h-screen flex flex-col pt-24 overflow-y-auto scrollbar-hide md:overflow-y-visible">
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
                      <img
                          src={product.image}
                          alt={product.title}
                          width={300}
                          height={200}
                          className="rounded" />
                      <h2 className="font-semibold mt-2">{product.title}</h2>
                      <p className="text-sm">{product.desc}</p>
                  </div>
              ))}
          </div>

          {/* Modal */}
          {selected && (
              <ProductModal product={selected} onClose={() => setSelected(null)} />
          )}
      </main><Footer /></>
  );
}
