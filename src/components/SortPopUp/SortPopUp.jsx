import { useEffect, useRef, useState } from 'react';
import Arrow from '../../images/arrowUp.svg';

function SortPopUp({ items }) {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortElRef = useRef();
  const activeLabel = items[activeItem];

  const togglePopUp = () => {
    setVisiblePopUp(!visiblePopUp);
  };

  const handleClick = (e) => {
    if (!e.path.includes(sortElRef.current)) {
      setVisiblePopUp(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
  }, []);

  const onClickItem = (index) => {
    setActiveItem(index);
    setVisiblePopUp(false);
  };

  return (
    <>
      <div ref={sortElRef} className="sort">
        <div className="sort__label">
          <img src={Arrow} alt="arrow" />
          <b>Сортировка по:</b>
          <span onClick={togglePopUp}>{activeLabel}</span>
        </div>
        {visiblePopUp && (
          <div className="sort__popup">
            <ul>
              {items.map((name, index) => (
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
          </div>
        )}
      </div>
    </>
  );
}
export default SortPopUp;
