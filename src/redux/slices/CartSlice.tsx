import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    item: string;
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartItem[],
    reducers: {
        addToCart: (state: CartItem[], action: { payload: CartItem }) => {
            state.push(action.payload);
            toast.success(`${action.payload.name} added to cart!`); 
        },
        removeFromCart: (state, action: { payload: { id: number } }) => {
            const itemToRemove = state.find(item => item.id === action.payload.id);
            if (itemToRemove) {
                toast.info(`${itemToRemove.name} removed from cart!`); 
            }
            return state.filter(item => item.id !== action.payload.id);
        },
        clearCart: () => {
            return [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
