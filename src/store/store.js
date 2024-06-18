import { create } from "zustand";

// Create a store using Zustand
export const useMenuStore = create((set) => ({
  isOpen: false, // Initial state of the menu

  // Function to toggle the menu (open if closed, close if open)
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
