import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Button from '../../ui/Button/Button';
import PopupContacts from '../PopupContacts/PopupContacts';

const AsideHeader = () => {
  const [isContactsPopupOpened, setContactsPopupOpened] = useState(false);

  const handleContactsOpen = () => {
    setContactsPopupOpened(true);
  };

  const handleContactsClose = () => {
    setContactsPopupOpened(false);
  };

  return (
    <Header>
      <PopupContacts
        isOpened={isContactsPopupOpened}
        onClose={handleContactsClose}
      />
      <Link className="header__link header__link_type_language">En</Link>
      <nav>
        <ul className="header__nav-list header__nav-list_type_aside">
          <li>
            <a
              href="tel:+74951234567"
              className="header__nav-link header__nav-link_type_aside"
            >
              +7 (495) 123-45-67
            </a>
          </li>
          <li>
            <Button onClick={handleContactsOpen} className="button_type_aside">
              Контакты
            </Button>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default AsideHeader;
