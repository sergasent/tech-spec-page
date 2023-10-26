import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Button.scss';

const Button = ({ className, children, onClick = null }) => {
  return (
    <button
      className={clsx({
        button: true,
        [className]: className,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

export default Button;
