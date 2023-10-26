import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const MainHeader = () => {
  return (
    <Header>
      <img className="logo" src="" alt="logo" />
      <nav>
        <ul className="header__nav-list header__nav-list_type_main">
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
