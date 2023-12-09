import {configureStore} from '@reduxjs/toolkit'

import wishListReducer from '../features/wishListSlice'

const store = configureStore({
    reducer: {
        wishList: wishListReducer
    }
})

export default store;