import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductItem } from '../index';

function ProductsList({ name, id, imageUrl, types, sizes, price, category, rating }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setProducts(data.pizzas);
    });
  }, []);

  return (
    <div>
      <ul className="d-flex flex-wrap justify-content-around">
        {products.map(({ name, imageUrl, price, sizes, types, id }) => (
          <li key={id}>
            <ProductItem
              name={name}
              imageUrl={imageUrl}
              price={price}
              sizes={sizes}
              types={types}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
