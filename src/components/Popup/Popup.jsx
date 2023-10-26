import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Popup.scss';

const Popup = ({ isOpened, children, onClose, className }) => {
  const handleQuitClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx({
        popup: true,
        popup_opened: isOpened,
        [className]: className,
      })}
      onClick={handleQuitClick}
    >
      <section className="popup__container">{children}</section>
    </div>
  );
};

Popup.propTypes = {
  isOpened: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Popup;
