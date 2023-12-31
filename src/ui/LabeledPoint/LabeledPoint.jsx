import PropTypes from 'prop-types';
import clsx from 'clsx';
import './LabeledPoint.scss';

const LabeledPoint = ({
  type = 'small',
  labels,
  pointColor,
  rectHeight = 10,
  rectBorderRadius = 0,
  className,
}) => {
  const defaultLabelHeight = 10;
  return (
    <div
      className={clsx({
        'labeled-point': true,
        [`labeled-point_type_${type}`]: type,
        [className]: className,
      })}
    >
      <svg
        className={clsx({
          'labeled-point__figure-square': true,
          [`labeled-point__figure-square_color_${pointColor}`]: pointColor,
        })}
        width={rectHeight}
        height={rectHeight}
        viewBox={`0 0 ${rectHeight} ${rectHeight}`}
      >
        <rect
          width={rectHeight}
          height={rectHeight}
          rx={rectBorderRadius}
          strokeWidth="0"
        />
      </svg>
      <div
        className={clsx({
          'labeled-point__labels-container': true,
          [`labeled-point__labels-container_type_${type}`]: type,
        })}
      >
        {labels?.map((label, index) => {
          const key = `label${index}`;
          return (
            <svg
              key={key}
              className={clsx({
                'labeled-point__figure-line': true,
                [`labeled-point__figure-line_color_${label.labelColor}`]:
                  label.labelColor,
              })}
              width={label.labelWidth}
              height={label.labelHeight || defaultLabelHeight}
            >
              <line
                x1={
                  label.labelHeight
                    ? label.labelHeight / 2
                    : defaultLabelHeight / 2
                }
                y1={
                  label.labelHeight
                    ? label.labelHeight / 2
                    : defaultLabelHeight / 2
                }
                x2={label.labelWidth - 5}
                y2={
                  label.labelHeight
                    ? label.labelHeight / 2
                    : defaultLabelHeight / 2
                }
                fill="none"
                strokeWidth={label.labelHeight || defaultLabelHeight}
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

LabeledPoint.propTypes = {
  type: PropTypes.oneOf(['small', 'medium', 'large']),
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      labelWidth: PropTypes.number,
      labelHeight: PropTypes.number,
      labelColor: PropTypes.string,
    }),
  ),
  rectHeight: PropTypes.number,
  rectBorderRadius: PropTypes.number,
  pointColor: PropTypes.string,
  className: PropTypes.string,
};

export default LabeledPoint;
