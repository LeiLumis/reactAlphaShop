import { useContext } from 'react';
import styles from "./Cart.module.css"
import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import CartContext from '../Context/CartContext';


function Product({item}) {
  const {operationClick} = useContext(CartContext);
  return(
    <>
    <div className={styles.productContainer} 
          data-count="0" 
          data-price="3999"
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
  </>
  )
}


export function Cart(){

  const {cartItem,totalNum} = useContext(CartContext);

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price={0}>
      {cartItem.map((item) =>{
        return(
          <Product
          key={item.id}
          item={item}
          />
          )})}
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