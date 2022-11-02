import styles from './ProductForm.module.scss';
import Button from '../Button/Button'
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

import PropTypes from 'prop-types'

const ProductForm = (props) => {
    return (
      <form onSubmit={props.addToCard}>
        <OptionSize
          currentSize={props.currentSize}
          sizes={props.sizes}
          setCurrentSize={props.setCurrentSize}
        />
        <OptionColor 
          colors={props.colors} 
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
        <Button type={"submit"} className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    );
}

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
}

export default ProductForm;