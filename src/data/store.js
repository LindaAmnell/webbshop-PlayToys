import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  setToys: (newToys) => set({ toys: newToys }),
  checkoutList: [],
  checkoutTotal: 0,

  addToyToCheckout: (item) =>
    set((state) => {
      let found = false;
      let updatedList = state.checkoutList.map((checkToy) => {
        if (checkToy.name === item.name) {
          found = true;
          return { ...checkToy, quantity: checkToy.quantity + 1 };
        }
        return checkToy;
      });

      if (!found) {
        const checkoutToy = state.toys.find((t) => t.name === item.name);
        if (checkoutToy) {
          updatedList = [...updatedList, { ...checkoutToy, quantity: 1 }];
        }
      }

      return { checkoutList: updatedList };
    }),

  deleteFromCheckout: (key) => {
    set((state) => {
      const updatedCheckoutList = state.checkoutList
        .map((item) => {
          if (item.key === key && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else if (item.key === key && item.quantity === 1) {
            return null;
          }
          return item;
        })
        .filter((item) => item !== null);
      return { checkoutList: updatedCheckoutList };
    });
    useStore.getState().countTotalCheckout();
  },

  countTotalCheckout: () => {
    set((state) => ({
      checkoutTotal: state.checkoutList.reduce(
        (total, item) => total + parseInt(item.price) * item.quantity,
        0
      ),
    }));
  },
  deleteChekoutList: () =>
    set((state) => ({
      checkoutList: [],
      checkoutTotal: 0,
    })),

  deleteThatToyFromList: (item, key) => {
    set((state) => {
      const updatedCheckoutList = state.checkoutList.filter(
        (checkoutItem) => checkoutItem.key !== key
      );
      return { checkoutList: updatedCheckoutList };
    });
    useStore.getState().countTotalCheckout();
  },
}));

export { useStore };
