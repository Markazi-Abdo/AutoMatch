
import Product from '../Product/Product';
import styles from './Products.module.css'; // Import CSS module


export default function Products() {
    return (
        <div className={styles.carsContainer}>
            {Array.from({ length: 8 }).map((_, index) => (
                <Product key={index} />
            ))}
        </div>
    );
}
