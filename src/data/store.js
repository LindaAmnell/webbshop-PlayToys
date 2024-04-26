import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  setToys: (newToys) => set({ toys: newToys }),
  CheckoutList: [],

  addToyToCheckout: (toy) =>
    set((state) => {
      const checkoutToy = state.toys.find((t) => t.key === toy.key);
      console.log("Adding toy to checkout:", checkoutToy); // Loggar det aktuella leksaket som läggs till i kassan

      return { CheckoutList: [...state.CheckoutList, checkoutToy] };
    }),
}));

export { useStore };
