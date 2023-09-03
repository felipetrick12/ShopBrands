import { ICartProduct } from '@/interfaces';
import { CartState } from '.';

type UIActionType =
  | {
      type: '[CART]- Load-Cart from  cookies | storage ';
      payload: ICartProduct[];
    }
  | {
      type: '[CART]- Load-Cart Add product';
      payload: ICartProduct;
    };

export const CartReducer = (
  state: CartState,
  action: UIActionType,
): CartState => {
  switch (action.type) {
    case '[CART]- Load-Cart Add product':
      return {
        ...state,
      };

    default:
      return state;
  }
};
