import PropTypes from 'prop-types';
import clsx from 'clsx';
import './IconLabel.scss';

const IconLabel = ({ className, color, image, width }) => {
  const defaultWidth = 69;
  const currentWidth = width ?? defaultWidth;
  const radius = (currentWidth - 4) / 2;
  return (
    <div
      className={clsx({
        'icon-label': true,
        [className]: className,
        [`icon-label_color_${color}`]: color,
      })}
    >
      <svg
        className={clsx({
          'icon-label__figure': true,
          [`icon-label__figure_color_${color}`]: color,
          // [className]: className,
        })}
        width={currentWidth}
        viewBox={`0 0 ${currentWidth} ${currentWidth}`}
      >
        <circle r={radius} cx="50%" cy="50%"></circle>
        <circle r={radius} cx="50%" cy="50%"></circle>
      </svg>
      <img
        className="icon-label__image"
        src={image}
        alt="Изображение специалиста"
      />
    </div>
  );
};

IconLabel.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default IconLabel;
