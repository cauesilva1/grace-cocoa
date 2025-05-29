import { create } from 'zustand';

export type FlavorObject = {
  name: string;
  price: number;
};

export type Product = {
  id: number;
  title: string;
  desc: string;
  price: number;
  image?: string;
  flavors?: string[] | FlavorObject[];
  hasCommentsBox?: boolean;
  isMultiFlavorChoice?: boolean;
  isBox?: boolean;
  flavorPrices?: { [key: string]: number }; // 👈 Adicione aqui
};


export type CartItem = Product & {
  quantity: number;
  selectedFlavor?: string;
  selectedFlavors?: string[]; // para múltiplas opções de sabor
  comment?: string;
};

type CartStore = {
  items: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (itemToRemove: CartItem) => void;
  clearCart: () => void;
  updateComment: (itemToUpdate: CartItem, comment: string) => void;
  updateQuantity: (itemToUpdate: CartItem, quantity: number) => void;
};

function areFlavorArraysEqual(a: string[] = [], b: string[] = []) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) return false;
  }
  return true;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  
  addToCart: (product) =>
    set((state) => {
      const index = state.items.findIndex((item) => {
        if (item.id !== product.id) return false;
        if (item.comment !== product.comment) return false;

        if (product.isMultiFlavorChoice) {
          // comparar arrays de sabores (mesmo conjunto)
          return areFlavorArraysEqual(item.selectedFlavors, product.selectedFlavors);
        } else {
          // sabor único
          return item.selectedFlavor === product.selectedFlavor;
        }
      });

      if (index !== -1) {
        const newItems = [...state.items];
        newItems[index].quantity += product.quantity;
        return { items: newItems };
      } else {
        return { items: [...state.items, { ...product }] };
      }
    }),

  removeFromCart: (itemToRemove) =>
    set((state) => ({
      items: state.items.filter((item) => {
        if (item.id !== itemToRemove.id) return true;
        if (item.comment !== itemToRemove.comment) return true;

        if (itemToRemove.isMultiFlavorChoice) {
          return !areFlavorArraysEqual(item.selectedFlavors, itemToRemove.selectedFlavors);
        } else {
          return item.selectedFlavor !== itemToRemove.selectedFlavor;
        }
      }),
    })),

  clearCart: () => set({ items: [] }),

  updateComment: (itemToUpdate, comment) =>
    set((state) => {
      const newItems = state.items.map((item) => {
        if (
          item.id === itemToUpdate.id &&
          item.comment === itemToUpdate.comment &&
          (
            (item.isMultiFlavorChoice && areFlavorArraysEqual(item.selectedFlavors, itemToUpdate.selectedFlavors)) ||
            (!item.isMultiFlavorChoice && item.selectedFlavor === itemToUpdate.selectedFlavor)
          )
        ) {
          return { ...item, comment };
        }
        return item;
      });
      return { items: newItems };
    }),

  updateQuantity: (itemToUpdate, quantity) =>
    set((state) => {
      const newItems = state.items.map((item) => {
        if (
          item.id === itemToUpdate.id &&
          item.comment === itemToUpdate.comment &&
          (
            (item.isMultiFlavorChoice && areFlavorArraysEqual(item.selectedFlavors, itemToUpdate.selectedFlavors)) ||
            (!item.isMultiFlavorChoice && item.selectedFlavor === itemToUpdate.selectedFlavor)
          )
        ) {
          return { ...item, quantity };
        }
        return item;
      });
      return { items: newItems };
    }),
}));
