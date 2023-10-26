import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const AsideHeader = () => {
  return (
    <Header>
      <Link className="header__link header__link_type_language">En</Link>
      <nav>
        <ul className="header__nav-list header__nav-list_type_main">
          <li>
            <a
              href="tel:+74951234567"
              className="header__nav-link header__nav-link_type_aside"
            >
              +7 (495) 123-45-67
            </a>
          </li>
          <li>
            <button>Контакты</button>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default AsideHeader;
