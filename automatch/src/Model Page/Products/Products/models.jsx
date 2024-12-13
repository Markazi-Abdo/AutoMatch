// import { connect } from "react-redux";
// import Product from '../Product/Product';
// import styles from './Products.module.css'; // Import CSS module
// import { useParams } from 'react-router-dom';

//  function Products({cars}) {
//     const { id } = useParams()
//     // test get id
//     console.log(id)
//     const modelInMArque= cars.find((item)=>{return item.id==id})
//     return (
//         <div className={styles.carsContainer}>
//             {modelInMArque.models.map((item, index) => (
//                 <Product key={index} data={item} />
//             ))}
//         </div>
//     );
// }
// const mapStateToProps = state => {
//     return {
//         cars: state.cars,
//     };
// };
// export default connect(mapStateToProps)(Products)
import { connect } from "react-redux";

import styles from './Products.module.css'; // Import CSS module
import { useParams } from 'react-router-dom';
import Model from "../Product/model";

function Models({ cars }) {
    const { id } = useParams();
    // Filter models by marque id
    const selectedMarque = cars.find((item) => item.id == id); // Find instead of filter to get a single marque

    return (
        <div className={styles.carsContainer}>
            {selectedMarque ? (
                selectedMarque.models.map((model, index) => (
                    <Model key={index} data={model} id={id} marqueImg={selectedMarque.marque.logo} />
                    
                ))
            ) : (
                <p>No models found for this marque.</p>
            )}
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
    };
};

export default connect(mapStateToProps)(Models)