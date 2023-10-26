import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PopupContacts.scss';

import Popup from '../Popup/Popup';
import TextLabel from '../../ui/TextLabel/TextLabel';
import Button from '../../ui/Button/Button';
import locationIcon from '../../assets/location-mark.png';
import clocksIcon from '../../assets/three-o-clock-clock.png';
import telegramIcon from '../../assets/icon-telegram.svg';
import vkIcon from '../../assets/icon-vk.svg';
import yandexZenIcon from '../../assets/icon-yandex-zen.svg';

const PopupContacts = ({ isOpened, onClose }) => {
  return (
    <Popup isOpened={isOpened} onClose={onClose} className="contacts-popup">
      <h2 className="popup__title">Контактная информация</h2>

      <section className="contacts-popup__address">
        <TextLabel image={locationIcon} type={'block'}>
          <h3 className="contacts-popup__section-title">Наш офис</h3>
        </TextLabel>
        <p className="popup__text">Санкт-Петербург, ул. Такая-то, д. 1</p>
        <Link className="contacts-popup__map-link">Показать на карте</Link>
      </section>

      <section className="contacts-popup__contacts" aria-label="Контакты">
        <ul className="contacts-popup__contacts-container">
          <li className="contacts-popup__contact">
            <TextLabel type={'inline'}>Звоните:</TextLabel>
            <a href="tel:+74951234567" className="contacts-popup__contact-link">
              +7 (495) 123-45-67
            </a>
          </li>
          <li className="contacts-popup__contact">
            <TextLabel type={'inline'}>Пишите:</TextLabel>
            <a
              href="mailto:info@test.ru"
              className="contacts-popup__contact-link"
            >
              info@test.ru
            </a>
          </li>
        </ul>
        <Button className="button_type_contacts">Заказать звонок</Button>
      </section>

      <section className="contacts-popup__business-time">
        <TextLabel image={clocksIcon} type={'block'}>
          <h3 className="contacts-popup__section-title">Режим работы</h3>
        </TextLabel>
        <p className="popup__text">Пн-Пт — с 10:00 до 18:00</p>
        <p className="popup__text">Сб-Вс — выходной</p>
      </section>

      <section className="contacts-popup__social">
        <TextLabel type={'block'}>
          <h3 className="contacts-popup__section-title">Мы в соцсетях</h3>
        </TextLabel>
        <nav>
          <ul className="contacts-popup__social-container">
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="/"
                className="contacts-popup__social-link"
              >
                <img src={telegramIcon} alt="Телеграм" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="/"
                className="contacts-popup__social-link"
              >
                <img src={vkIcon} alt="Телеграм" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="/"
                className="contacts-popup__social-link"
              >
                <img src={yandexZenIcon} alt="Телеграм" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </Popup>
  );
};

PopupContacts.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PopupContacts;
