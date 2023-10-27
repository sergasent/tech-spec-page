import PropTypes from 'prop-types';
import clsx from 'clsx';

import './MobileMenu.scss';

const MobileMenu = ({ isOpened, onClose, children }) => {
  return (
    <section
      className={clsx({
        'mobile-menu': true,
        'mobile-menu_opened': isOpened,
      })}
      aria-label="Мобильное меню"
    >
      <header className="mobile-menu__header">
        <button
          onClick={onClose}
          type="button"
          className="mobile-menu__close-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            width="40"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99951 8.94287L10.3566 11.2999L11.4172 10.2393L9.06017 7.88221L11.2994 5.64295L10.2388 4.58229L7.99951 6.82155L5.76037 4.58241L4.69971 5.64307L6.93885 7.88221L4.58192 10.2391L5.64258 11.2998L7.99951 8.94287Z"
              fill="white"
            />
          </svg>
        </button>
      </header>
      <nav>
        <ul className="mobile-menu__nav-list">{children}</ul>
      </nav>
    </section>
  );
};

MobileMenu.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MobileMenu;
