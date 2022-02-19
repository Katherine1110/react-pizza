// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

import './style.css';
import { useState } from 'react';
import { SortPopUp } from '../../components';

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(0);

  const onClickItem = (index) => {
    setActiveItem(index);
    // console.log(index);
  };

  return (
    <div>
      <ul className="categoriesList">
        {items &&
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              className={activeItem === index ? 'chosen' : ''}
              onClick={() => {
                onClickItem(index);
              }}>
              {name}
            </li>
          ))}
      </ul>
      <div>
        <SortPopUp items={['популярности', 'цене', 'алфавиту']} />
      </div>
    </div>
  );
}

export default Categories;
