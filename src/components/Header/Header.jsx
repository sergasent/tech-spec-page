import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Header.scss';

const Header = ({ className, children }) => {
  return (
    <header
      className={clsx({
        header: true,
        [className]: className,
      })}
    >
      {children}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Header;
