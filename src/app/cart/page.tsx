'use client';

import { useCartStore } from '@/store/cartstore';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeFromCart } = useCartStore();
  const total = items.reduce((sum, item) => {
    let itemPrice = item.price;
    if (item.flavorPrices && item.selectedFlavor) {
      itemPrice = item.flavorPrices[item.selectedFlavor] ?? item.price;
    }
    // holly bites preço fixo, independente dos sabores múltiplos
    // já está no item.price
    return sum + itemPrice * item.quantity;
  }, 0);
  

  const handleCheckout = () => {
    console.log('Redirecting to checkout...');
  };

  return (
    <main
      className="bg-[#FFF2D8] text-[#6B1D1D] min-h-screen py-20 px-6 md:px-12 lg:px-20 flex flex-col w-full mt-6"
      style={{ fontFamily: 'var(--font-cinzel)' }}
    >
      <h1 className="text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold font-serif mb-10">
        CART
      </h1>

      <div className="flex-1 overflow-y-auto max-w-6xl w-full mx-auto space-y-6 pr-2 pb-32">
        {items.length === 0 ? (
          <p className="text-center mt-16 text-2xl font-medium tracking-wide">
            Your cart is empty.
          </p>
        ) : (
          items.map((item, idx) => {
            const key = `${item.id}-${item.selectedFlavor ?? 'no-flavor'}-${item.comment ?? 'no-comment'}-${idx}`;
            return (
              <div
                key={key}
                className="w-full bg-white rounded-lg shadow-md p-4 sm:p-5 flex flex-col sm:flex-row gap-3 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 self-center sm:self-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif font-semibold text-lg mb-1">{item.title}</h2>
                    {item.selectedFlavor && (
                      <p className="text-xs italic text-[#6B1D1D]/80 mb-1">
                        Flavor: {item.selectedFlavor}
                      </p>
                    )}

                    <div className="text-sm mb-2">
                      <strong>Comment:</strong>
                      <p className="whitespace-pre-wrap mt-1 px-2 py-1 bg-[#FFF7E3] rounded text-[#6B1D1D]/90 min-h-[36px] text-sm">
                        {item.comment ?? '—'}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span>
                      Qty: <span className="font-normal">{item.quantity}</span>
                    </span>
                    <span className="text-base">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item)}
                    className="mt-2 text-red-600 hover:text-red-700 text-sm underline text-left transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {items.length > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 bg-[#FFF2D8] border-t border-[#6B1D1D]/40
          max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4
          px-6 py-6 shadow-inner z-50"
        >
          <p className="text-2xl font-bold tracking-wide">
            Total: <span className="text-[#6B1D1D]">${total.toFixed(2)}</span>
          </p>

          <button
            onClick={handleCheckout}
            className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </main>
  );
}
