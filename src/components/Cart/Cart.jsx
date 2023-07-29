import styles from "./Cart.module.css"
import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'

const cartItem = [
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

export function Cart(){
  return (
    <>
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price={0}>
        {cartItem.map(item =>
        <div className={styles.productContainer} 
        data-count={0} 
        data-price={3999} 
        key={item.id}
        >
          <div className={styles.productInfo}>
            <img className={styles.imgContainer} src={item.img} />
            <div className={styles.productControlContainer}>
              <div className={styles.productName}>{item.name}</div>
              <div className={styles.productControl}>
                <Minus className={styles.minus}/>
                <span className={styles.productCount}>{item.quantity}</span>
                <Plus className={styles.plus}/>
              </div>
            </div>
            <div className={styles.productPrice}>{item.price}</div>
          </div>
        </div>
    )}
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>運費</div>
        <div className={styles.productInfoPrice}>免費</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>小計</div>
        <div className={styles.productInfoPrice}>$300</div>
      </section>
    </section>
    </>
  )
}