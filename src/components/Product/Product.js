import styles from './Product.module.scss';
import { useState } from 'react';

import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor , setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  function getPrice () {
    console.log('getPrice' + props.basePrice + props.sizes[0].additionalPrice)

    return props.basePrice + props.sizes[0].additionalPrice
  }

  const addToCard = (e) => {
    e.preventDefault();
    console.log
    (`
    Summary
    =======
    Name: ${props.title} 
    Price: ${getPrice()}$
    Size: ${currentSize}
    Color: ${currentColor}
    `);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
        colors={props.colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}

        sizes={props.sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        
        addToCard={addToCard}
        />
      </div>
    </article>
  )
};

export default Product;