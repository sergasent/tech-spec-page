import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';

import './MainHeader.scss';

const MainHeader = () => {
  return (
    <Header className="main-header">
      <Logo />
      <nav>
        <ul className="main-header__nav-list header__nav-list header__nav-list_type_main">
          <li>
            <Link className="header__nav-link header__nav-link_type_main">
              Преимущества
            </Link>
          </li>
          <li>
            <Link className="header__nav-link header__nav-link_type_main">
              Услуги
            </Link>
          </li>
          <li>
            <Link className="header__nav-link header__nav-link_type_main">
              Виджет
            </Link>
          </li>
          <li>
            <Link className="header__nav-link header__nav-link_type_main">
              Кому
            </Link>
          </li>
          <li>
            <Link className="header__nav-link header__nav-link_type_main">
              Тарифы
            </Link>
          </li>
          <li>
            <Link className="header__nav-link header__nav-link_type_main">
              Блог
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;
