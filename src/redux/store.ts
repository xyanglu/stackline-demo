import { createStore, Action } from 'redux';
import { Product } from '../models/Product';

// Define your actions
const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';

interface SetProductDataAction extends Action<typeof SET_PRODUCT_DATA> {
  payload: Product[]; // Change the payload type to an array of products
}

// Define a type for all possible actions
type AppAction = SetProductDataAction; // Add other action types as needed

// Define your action creators
export const setProductData = (data: Product[]): SetProductDataAction => ({ // Change the parameter type to an array of products
  type: SET_PRODUCT_DATA,
  payload: data,
});

// Define the shape of your state
export interface State {
  products: Product[] | null; // Change the type to an array of products
}

// Define your reducer
const reducer = (state: State = { products: null }, action: AppAction) => { // Adjust the state to reflect the change
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return { ...state, products: action.payload }; // Update the products property
    default:
      return state;
  }
};

// Create your store
const store = createStore(reducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
