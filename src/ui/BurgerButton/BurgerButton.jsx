import PropTypes from 'prop-types';
import './BurgerButton.scss';

const BurgerButton = ({ onClick, className }) => (
  <button
    className={`burger-button ${className || ''}`}
    type="button"
    onClick={onClick}
    aria-label="Открыть меню"
  >
    <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 14L8 14V11L36 11V14Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 24L8 24V21L36 21V24Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 34L8 34V31L36 31V34Z"
      />
    </svg>
  </button>
);

BurgerButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BurgerButton;
