import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import PizzaLogo from '../../images/pizzaLogo.svg';
import Cart from '../../images/shoppingCart.svg';
import Rectangle from '../../images/rectangle.svg';
import './header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
      <Link to="/">
        <div className="d-flex">
          <img width="38" src={PizzaLogo} alt="Pizza logo" />
          <h1>React Pizza</h1>
        </div>
        <p>самая вкусная пицца во вселенной</p>
      </Link>
      <Link className="" to="/cart">
        <Button>
          <div className="cartButton">
            <span>{300} &#8372;</span>
            <img src={Rectangle} alt="" />
            <img src={Cart} alt="" />
          </div>
        </Button>
      </Link>
    </nav>
  );
}

export default Header;
