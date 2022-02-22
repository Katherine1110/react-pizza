import { Button } from '../index';
import BtnPlus from '../../images/btnPlus.svg';
import { useEffect, useState } from 'react';

function ProductItem({ id, name, imageUrl, sizes, price, types }) {
  //   const [activeType, setActiveType] = useState([]);
  const [activeSize, setActiveSize] = useState({ ...sizes });

  useEffect(() => {});
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={imageUrl} alt={name} />
        <h4 className="card-title">{name}</h4>
        <div>
          <ul className="d-flex justify-content-around">
            {types.map((type, id) => (
              <li key={id}>{type}</li>
            ))}
          </ul>
          <ul className="d-flex justify-content-around">
            {sizes.map((size, id) => (
              <li key={id}>{size} см</li>
            ))}
          </ul>
          <div>
            <span>от {price} &#8372;</span>
            <Button>
              <img src={BtnPlus} alt="" />
              <span>Добавить 2 </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
