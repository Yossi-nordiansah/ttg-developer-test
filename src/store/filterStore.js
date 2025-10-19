import { create } from "zustand";

const useFilterStore = create((set) => ({
  filters: {
    is_open: false,
    price_range: "default",
    categories: "default",
  },

  setFilters: (newFilter) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilter },
    })),

  clearFilters: set({
    filters: {
      is_open: false,
      price_range: "default",
      categories: "default",
    },
  }),
}));

export default useFilterStore;
