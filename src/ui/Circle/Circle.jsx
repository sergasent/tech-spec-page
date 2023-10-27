import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Circle.scss';

const Circle = ({ color, radius = 0, className }) => {
  return (
    <div className="circle">
      <svg
        className={clsx({
          circle: true,
          [`circle_color_${color}`]: color,
          [className]: className,
        })}
        width={radius * 2}
        height={radius * 2}
      >
        <circle r={radius} cx="50%" cy="50%"></circle>
      </svg>
    </div>
  );
};

Circle.propTypes = {
  radius: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Circle;
