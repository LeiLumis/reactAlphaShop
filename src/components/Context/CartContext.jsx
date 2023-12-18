import { createContext, useState  } from "react";
import initialCart from "../Cart/initialCartData"

const CartContext = createContext()

export function CartProvider({children}){

    const initialTotal = (item => {
  let sum = 0
  for(let i = 0; i < item.length; i++){
      sum += (item[i].price * item[i].quantity)
   }
    return sum
  })

    const[cartItem, setCartItem] = useState(initialCart);
    const[totalNum, setTotalNum] = useState(initialTotal(initialCart));

    function operationClick(id, num,price){
  if(num === 1){
    const newCartItem = cartItem.map(item => {
        if(item.id ===id ) {
            return {
              ...item,
              quantity: item.quantity + 1
              }
        } else {
          return item
        }
    })
    setCartItem(newCartItem)
    setTotalNum( totalNum + price)
    
  }else if(num === -1){
    const newCartItem = cartItem.map(item => {
        if(item.id ===id && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1
              }
        } else {
          return item
        }
    })
    setCartItem(newCartItem)
    if(totalNum > 0) {
      setTotalNum( totalNum - price)
    }
  }
  }
  
    return(
        <CartContext.Provider value={{cartItem ,operationClick,totalNum}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;