import { TYPES } from "./ShoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "producto 1",
      price: 10001,
    },
    {
      id: 2,
      name: "producto 2",
      price: 10002,
    },
    {
      id: 3,
      name: "producto 3",
      price: 10003,
    },
    {
      id: 4,
      name: "producto 4",
      price: 10004,
    },
    {
      id: 5,
      name: "producto 5",
      price: 10005,
    },
    {
      id: 6,
      name: "producto 6",
      price: 10006,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item, indice) =>
              item.id === newItem.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, cantidad: 1 }] };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
        let itemToDelete = state.cart.find(item => item.id === action.payload);
        return itemToDelete.cantidad > 1 ? {
            ...state, 
             cart: state.cart.map(item => item.id === action.payload ? 
                {...item, cantidad: item.cantidad - 1} : item)
        } : {
            ...state, 
            cart: state.cart.filter(item => item.id !== action.payload)
        };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
        return {
            ...state, 
            cart: state.cart.filter(item => item.id !== action.payload)
        };
    }
    case TYPES.CLEAR_CART: {
        return shoppingInitialState;
    }

    default:
      return state;
  }
}
