'use client';

import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  desc: string;
  price: number;
  image: string;
  // opcional: tipos de sabor, comentários, etc
  flavors?: string[];
  hasCommentsBox?: boolean;
};

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div
      className="fixed inset-0 z-[10001] bg-black/50 flex items-start justify-center pt-10 px-4"
      onClick={(e) => {
        // fecha modal ao clicar no fundo
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-[#FFF2D8] max-w-4xl w-full rounded p-6 space-y-4 text-[#6B1D1D] shadow-lg
          flex flex-col md:flex-row gap-6"
      >
        {/* Imagem */}
        <div className="flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="rounded object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col flex-grow gap-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-sm">{product.desc}</p>

          {/* Área que muda */}
          <div className="bg-[#FFF2D8] rounded p-4 min-h-[100px] flex flex-col gap-2">
            {product.flavors ? (
              <>
                <h3 className="font-semibold">Choose a flavor:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor, i) => (
                    <button
                      key={i}
                      className="px-3 py-1 bg-[#FFF2D8] border border-[#f0b134] rounded hover:bg-[#f6e2bb] transition"
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </>
            ) : product.hasCommentsBox ? (
              <>
                <h3 className="font-semibold">Comments:</h3>
                <textarea
                  rows={4}
                  className="w-full rounded border border-[#f7bb44] p-2 resize-none"
                  placeholder="Write your comment here..."
                />
              </>
            ) : (
              <p className="text-gray-500 italic">No options available</p>
            )}
          </div>

          <p className="font-semibold text-lg">${product.price}</p>

          <div className="flex gap-2">
            <button className="bg-[#6B1D1D] text-white px-4 py-2 rounded hover:bg-[#511414] transition">
              Buy Now
            </button>
            <button className="border border-[#6B1D1D] px-4 py-2 rounded hover:bg-[#f3e3d3] transition">
              Add to Cart
            </button>
          </div>

          <button onClick={onClose} className="text-sm underline mt-2 self-start">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
