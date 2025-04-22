import { create } from 'zustand'

interface CartItem {
  id: string
  name: string
  price: number
  restaurantId: string
  restaurantName: string
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
  clearCart: () => set({ items: [] }),
})) 