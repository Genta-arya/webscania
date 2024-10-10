import { create } from "zustand";

const useSearch = create((set) => ({
  searchQuery: "",
  placeholderText: "Search...",
  setSearchQuery: (query) => set({ searchQuery: query }),

  setPlaceholderText: (text) => set({ placeholderText: text }),
}));

export default useSearch;
