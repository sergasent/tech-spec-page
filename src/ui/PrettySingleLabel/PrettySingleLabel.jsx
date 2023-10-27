import LabeledPoint from '../LabeledPoint/LabeledPoint';
import PrettyContainer from '../PrettyContainer/PrettyContainer';

const PrettySingleLabel = () => {
  const rectHeight = 12;
  const rectBorderRadius = 4;
  return (
    <PrettyContainer className="pretty-container_type_single">
      <LabeledPoint
        pointColor="orange"
        rectHeight={rectHeight}
        rectBorderRadius={rectBorderRadius}
        labels={[
          {
            labelColor: 'medium-gray',
            labelWidth: 46,
          },
        ]}
      />
    </PrettyContainer>
  );
};

export default PrettySingleLabel;
