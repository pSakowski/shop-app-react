import styles from './Product.module.scss';
import { useState } from 'react';

import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

import PropTypes from 'prop-types'

const Product = props => {

  const [currentColor , setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = (basePrice, additionalPrice) => {
    console.log('getPrice' , basePrice + additionalPrice)

    return basePrice + additionalPrice
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
          <span className={styles.price}>Price: {getPrice(props.basePrice, props.sizes.find((item) => item.name === currentSize).additionalPrice)}$</span>
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

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;