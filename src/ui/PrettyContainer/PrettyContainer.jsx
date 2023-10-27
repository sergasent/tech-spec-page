import clsx from 'clsx';
import PropTypes from 'prop-types';

import './PrettyContainer.scss';

const PrettyContainer = ({ children, className }) => {
  return (
    <div
      className={clsx({
        'pretty-container': true,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

PrettyContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PrettyContainer;
