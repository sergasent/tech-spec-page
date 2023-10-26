import PropTypes from 'prop-types';
import clsx from 'clsx';

import './TextLabel.scss';

const TextLabel = ({ image = '', children, type = 'block' }) => {
  return (
    <div
      className={clsx({
        'text-label': true,
        'text-label_type_block': type === 'block',
        'text-label_type_inline': type === 'inline',
      })}
    >
      {image && <img src={image} alt="Значёк" className="text-label__image" />}
      {children}
    </div>
  );
};

TextLabel.propTypes = {
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['block', 'inline']),
};

export default TextLabel;
