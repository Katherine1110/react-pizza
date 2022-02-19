import { Route, Link } from 'react-router-dom';
import Button from '../Button/Button';
import PizzaLogo from '../../images/pizzaLogo.svg';
import Cart from '../../images/shoppingCart.svg';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <img width="38" src={PizzaLogo} alt="Pizza logo" />
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </Link>
      <Link to="/cart">
        <Button>
          <div className="button__delimiter"></div>
          <span>{300} &#8372;</span>
          <img src={Cart} alt="" />
        </Button>
      </Link>
    </nav>
  );
}

export default Header;
