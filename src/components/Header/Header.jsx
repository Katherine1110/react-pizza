// import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Button from '../Button/Button';
import PizzaLogo from '../../images/pizzaLogo.svg';
import Cart from '../../images/shoppingCart.svg';

function Header() {
  return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="nav-link" href="/">
            <img width="38" src={PizzaLogo} alt="Pizza logo" />   
        </a>
        <a className="nav-link active" aria-current="page" href="/">
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
        </a>
        <a className="nav-link" href="/">
          <Button>
            <div className="button__delimiter"></div>
            <span>{300} &#8372;</span>
            <img src={Cart} alt="" />
          </Button>
        </a>
    </nav>

  );
}

export default Header;
