import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li className='navItem'>
          <Link className='link' to='./'>
            <FaStore />
          </Link>
        </li>
        <li className='navItem'>
          <Link className='link' to='./cart'>
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
