'use Client';
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cart-slice'

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer
//   },
// });

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    }
  })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']