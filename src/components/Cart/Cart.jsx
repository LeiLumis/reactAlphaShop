import { useDebugValue, useState } from 'react';
import styles from "./Cart.module.css"
import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'

const initialCart  = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


const initialTotal = (item => {
  let sum = 0
  for(let i = 0; i < item.length; i++){
      sum += (item[i].price * item[i].quantity)
   }
    return sum
  })



export function Cart(){
  const[cartItem, setCartItem] = useState(initialCart);
  const[totalNum, setTotalNum] = useState(initialTotal(initialCart));



 function operationClick(id, num, price){
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



  return (

    

    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price={0}>
        <section>
      {cartItem.map(item =>
        <div className={styles.productContainer} 
          data-count={0} 
          data-price={3999} 
          key={item.id}
          id={item.id}
        >
          <div className={styles.productInfo}>
            <img className={styles.imgContainer} src={item.img}/>
            <div className={styles.productControlContainer}>
              <div className={styles.productName}>{item.name}</div>
              <div className={styles.productControl}>

                <Minus className={styles.minus} onClick={() => operationClick(item.id,-1,item.price)}/>
                <span className={styles.productCount}>{item.quantity}</span>
                <Plus className={styles.plus} onClick={() => operationClick(item.id,1,item.price)}/>

              </div>
            </div>
            <div className={styles.productPrice}>{item.price}</div>
          </div>
        </div>
      )}
    </section>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>運費</div>
        <div className={styles.productInfoPrice}>免費</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>小計</div>
        <div className={styles.productInfoPrice}>${totalNum}</div>
      </section>
    </section>

  )
}