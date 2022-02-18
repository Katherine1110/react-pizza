// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

import  './style.css';
import { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(0);

  const onClickItem = (index) => {
    setActiveItem(index);
    console.log(index);
  };

  return (
    <div>
      <ul className='categoriesList'>
        {items && items.map((name, index) => (
          <li key={`${name}_${index}`}
            className={activeItem === index ? 'chosen' : ''}
            onClick={() => {
              onClickItem(index);
            }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
