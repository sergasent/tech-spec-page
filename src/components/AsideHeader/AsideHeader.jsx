import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Button from '../../ui/Button/Button';
import PopupContacts from '../PopupContacts/PopupContacts';
import BurgerButton from '../../ui/BurgerButton/BurgerButton';

import './AsideHeader.scss';
import MobileMenu from '../../ui/MobileMenu/MobileMenu';

const AsideHeader = () => {
  const [isContactsPopupOpened, setContactsPopupOpened] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleContactsOpen = () => {
    setContactsPopupOpened(true);
  };

  const handleContactsClose = () => {
    setContactsPopupOpened(false);
  };

  const handleMenuClose = () => {
    setIsMenuOpened(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpened(true);
  };

  return (
    <Header className="aside-header">
      <PopupContacts
        isOpened={isContactsPopupOpened}
        onClose={handleContactsClose}
      />
      <MobileMenu isOpened={isMenuOpened} onClose={handleMenuClose}>
        <li>
          <Link className="aside-header__link" onClick={handleMenuClose}>
            Преимущества
          </Link>
        </li>
        <li>
          <Link className="aside-header__link" onClick={handleMenuClose}>
            Услуги
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              handleContactsOpen();
              handleMenuClose();
            }}
          >
            Контакты
          </Link>
        </li>
        <li>
          <Link className="aside-header__link" onClick={handleMenuClose}>
            Виджет
          </Link>
        </li>
        <li>
          <Link className="aside-header__link" onClick={handleMenuClose}>
            Кому
          </Link>
        </li>
        <li>
          <Link className="aside-header__link" onClick={handleMenuClose}>
            Тарифы
          </Link>
        </li>
        <li>
          <Link className="aside-header__link" onClick={handleMenuClose}>
            Блог
          </Link>
        </li>
      </MobileMenu>
      <Link className="header__link header__link_type_language">En</Link>
      <nav>
        <ul className="header__nav-list header__nav-list_type_aside">
          <li className="header__tel-link-item">
            <a
              href="tel:+74951234567"
              className="header__nav-link header__nav-link_type_aside"
            >
              +7 (495) 123-45-67
            </a>
          </li>
          <li>
            <Button
              onClick={handleContactsOpen}
              className="button_type_aside aside-header__contacts-button"
            >
              Контакты
            </Button>
          </li>
        </ul>
      </nav>
      <BurgerButton onClick={handleMenuOpen} />
    </Header>
  );
};

export default AsideHeader;
