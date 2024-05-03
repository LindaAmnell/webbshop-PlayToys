import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  setToys: (newToys) => set({ toys: newToys }),
  checkoutList: [],
  checkoutTotal: 0,
  toyTypeFilter: "all",

  // lägger till i varukorgen
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

  // tar bort leksaker
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
  // räknar ut totalen av alla leksaker i varukorgen
  countTotalCheckout: () => {
    set((state) => ({
      checkoutTotal: state.checkoutList.reduce(
        (total, item) => total + parseInt(item.price) * item.quantity,
        0
      ),
    }));
  },
  // Tömmer chekputlist när man klickar på köp
  deleteChekoutList: () =>
    set((state) => ({
      checkoutList: [],
      checkoutTotal: 0,
    })),
  // tarbort alla av samma sorts leksak från checkoutlist
  deleteThatToyFromList: (item, key) => {
    set((state) => {
      const updatedCheckoutList = state.checkoutList.filter(
        (checkoutItem) => checkoutItem.key !== key
      );
      return { checkoutList: updatedCheckoutList };
    });
    useStore.getState().countTotalCheckout();
  },

  // sorterar leksakerna
  sortToys: (sortType) =>
    set((state) => {
      let sortedToys = [...state.toys];
      switch (sortType) {
        case "name-ascending":
          sortedToys.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "price-rising":
          sortedToys.sort((a, b) => a.price - b.price);
          break;
        case "price-falling":
          sortedToys.sort((a, b) => b.price - a.price);
          break;

        default:
          break;
      }
      return { toys: sortedToys };
    }),

  // sorterar typ av leksaker
  selectToysCategory: (type) =>
    set((state) => {
      const sortedToys = [...state.toys].sort((a, b) => {
        if (a.type === type && b.type !== type) return -1;
        if (a.type !== type && b.type === type) return 1;

        return 0;
      });

      return { toys: sortedToys };
    }),
}));
export { useStore };
