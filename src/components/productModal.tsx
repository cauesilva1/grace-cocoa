'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCartStore } from '@/store/cartstore';
import { useRouter } from 'next/navigation';
import type { FlavorObject, Product } from '@/store/cartstore';

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const isMulti = product.isMultiFlavorChoice;
  const [selectedFlavor, setSelectedFlavor] = useState<string | FlavorObject | null>(null);
  const [selectedFlavors, setSelectedFlavors] = useState<(string | FlavorObject)[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');

  function toggleFlavor(flavor: string | FlavorObject) {
    if (!isMulti) {
      setSelectedFlavor(flavor);
      return;
    }

    setSelectedFlavors((prev) => {
      const exists = prev.some((f) =>
        typeof f === 'string'
          ? f === flavor
          : typeof flavor !== 'string' && f.name === flavor.name
      );
      if (exists) {
        return prev.filter((f) =>
          typeof f === 'string'
            ? f !== flavor
            : typeof flavor !== 'string' && f.name !== flavor.name
        );
      } else {
        return [...prev, flavor];
      }
    });
  }

  function inc() {
    setQuantity((q) => Math.min(q + 1, 99));
  }

  function dec() {
    setQuantity((q) => Math.max(q - 1, 1));
  }

  function handleAddToCart() {
    if (product.flavors && !selectedFlavor && !selectedFlavors.length) {
      alert('Please choose a flavor before adding to cart.');
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedFlavor: !isMulti ? selectedFlavor ?? undefined : undefined,
      selectedFlavors: isMulti ? selectedFlavors : undefined,
      comment: comment.trim() || undefined,
    } as any);

    alert(`Added ${quantity} x ${product.title} to cart.`);
  }

  function handleBuyNow() {
    if (product.flavors && !selectedFlavor && !selectedFlavors.length) {
      alert('Please choose a flavor before buying.');
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedFlavor: !isMulti ? selectedFlavor ?? undefined : undefined,
      selectedFlavors: isMulti ? selectedFlavors : undefined,
      comment: comment.trim() || undefined,
    } as any);

    router.push('/cart');
  }

  function renderFlavorName(flavor: string | FlavorObject) {
    return typeof flavor === 'string' ? flavor : flavor.name;
  }

  function renderPrice() {
    if (
      selectedFlavor !== null &&
      typeof selectedFlavor === 'object' &&
      'price' in selectedFlavor
    ) {
      return selectedFlavor.price.toFixed(2);
    }

    return product.price.toFixed(2);
  }

  return (
    <div
      className="fixed inset-0 z-[10001] bg-black/50 flex items-start justify-center pt-10 px-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-[#FFF2D8] w-full max-w-3xl rounded p-4 space-y-4 text-[#6B1D1D] shadow-lg
        flex flex-col md:flex-row gap-4 max-h-[90vh] overflow-y-auto ${product.isBox ? 'max-w-xl' : ''}`}
      >
        {/* Imagem */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            width={product.isBox ? 250 : 400}
            height={product.isBox ? 200 : 300}
            className="rounded object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col flex-grow gap-3">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-sm">{product.desc}</p>

          {/* Sabores */}
          {product.flavors && (
            <div>
              <h3 className="font-semibold">Choose flavor{isMulti ? 's' : ''}:</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((flavor, i) => {
                  const selected = isMulti
                    ? selectedFlavors.some((f) =>
                        typeof f === 'string'
                          ? f === flavor
                          : typeof flavor !== 'string' && f.name === flavor.name
                      )
                    : selectedFlavor === flavor;

                  return (
                    <button
                      key={i}
                      onClick={() => toggleFlavor(flavor)}
                      className={`px-3 py-1 border rounded hover:bg-[#f6e2bb] transition
                      ${selected ? 'bg-[#f0b134] text-white border-[#f0b134]' : 'bg-[#FFF2D8] border-[#f0b134]'}`}
                    >
                      {renderFlavorName(flavor)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Comentário */}
          {product.hasCommentsBox && (
            <div>
              <h3 className="font-semibold">Comments:</h3>
              <textarea
                rows={3}
                className="w-full rounded border border-[#f7bb44] p-2 resize-none"
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          )}

          {/* Quantidade */}
          <div className="flex items-center gap-2">
            <span className="font-semibold">Quantity:</span>
            <button
              onClick={dec}
              className="w-8 h-8 flex justify-center items-center border rounded hover:bg-[#f3e3d3]"
            >
              -
            </button>
            <input
              type="number"
              min={1}
              max={99}
              value={quantity}
              onChange={(e) => {
                let val = parseInt(e.target.value);
                if (isNaN(val)) val = 1;
                val = Math.min(99, Math.max(1, val));
                setQuantity(val);
              }}
              className="w-12 text-center border rounded"
            />
            <button
              onClick={inc}
              className="w-8 h-8 flex justify-center items-center border rounded hover:bg-[#f3e3d3]"
            >
              +
            </button>
          </div>

          {/* Preço dinâmico */}
          <p className="font-semibold text-lg">R$ {renderPrice()}</p>

          {/* Botões */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleAddToCart}
              className="bg-[#6B1D1D] text-white px-4 py-2 rounded hover:bg-[#511414] transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="border border-[#6B1D1D] px-4 py-2 rounded hover:bg-[#f3e3d3] transition"
            >
              Buy Now
            </button>
          </div>

          <button
            onClick={onClose}
            className="text-sm underline mt-2 self-start"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
