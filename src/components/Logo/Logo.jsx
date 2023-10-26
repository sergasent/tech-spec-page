import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link className="logo">
      <img className="logo__image" src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
