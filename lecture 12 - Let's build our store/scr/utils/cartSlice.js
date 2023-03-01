import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
    },
    reducers: {

        addItem: (state , action) => {
            //state is the initialState which we created above
            //action is data which will be coming in

            state.items.push(action.payload);

        },

        removeItem: (state ,action) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items = [];
        }

    }
})

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;  //not cartSlice.reducers


/**********************************************
 * behind the scene it might look like this
 * 
 * cartSlice = {
 * 
    actions:{
        addItem,
        removeItem,
        clearCart
    },
    
    reducer: reducers
}
 * 
 * ********************************************
 */