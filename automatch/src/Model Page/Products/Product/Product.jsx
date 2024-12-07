import styles from './Product.module.css';

export default function Product() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src="./mercdesd.png" alt="Car Image" />
        <div className={styles.color}>
          <button className={styles.green}></button>
          <button className={styles.blue}></button>
          <button className={styles.brown}></button>
          <button className={styles.black}></button>
        </div>
        <div className={styles.logo}>
          <img src="./cmc-logo.png" alt="" />
        </div>
      </div>
      <div className={styles.body}>
        <h5>MERCEDES</h5>
        <h6>110 500 DH</h6>
      </div>
    </div>
  );
}
