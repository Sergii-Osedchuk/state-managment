import React, { useContext} from 'react';
import { ProductContext } from '../../context/product-context';

import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = props => {
  const toggleFavourite = useContext(ProductContext).toggleFav;

  const toggleHandler = () => {
    toggleFavourite(props.id)
  }


  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
