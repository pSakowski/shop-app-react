import styles from './Product.module.scss';
import { useState } from 'react';

import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor , setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  }

  const addToCart = (e) => {
    e.preventDefault();
    console.log
    (`
    Summary
    =======
    Name: ${props.title} 
    Price: ${getPrice()}
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
        setCurrentColor={setCurrentColor}
        setCurrentSize={setCurrentSize}
        setPrice={setPrice}
        addToCart={addToCart}
        colors={props.colors}
        sizes={props.sizes}
        />
      </div>
    </article>
  )
};

export default Product;