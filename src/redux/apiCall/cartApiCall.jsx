import { addToCart, removeItemFromCart } from '../slices/CartSlice'
export function addItemToCart(newItem){
return (dispatch,getState)=>{
    dispatch(addToCart(newItem))
const {cart}=getState()
    localStorage.setItem("cart",JSON.stringify(cart.cartItems))
}
}
export function removeItem(id){
return (dispatch,getState)=>{
    dispatch(removeItemFromCart(id))
    const {cart}=getState()
    localStorage.setItem("cart",JSON.stringify(cart.cartItems))
}
}