import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer : todoReducer
})


// In redux toolkit -
// we will first create a store -> just like this file (store.js) 
// then we will create reducers, which we call as "slices" in redux toolkit (todoSlice.js)
// then you can create components
// we will use -> 
// 1) useSelector -> to select anything
// 2) useDispatch -> to dispatch or to send anything 