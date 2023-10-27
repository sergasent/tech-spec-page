import LabeledPoint from '../LabeledPoint/LabeledPoint';
import PrettyContainer from '../PrettyContainer/PrettyContainer';
import PrettyDiagramm from '../PrettyDiagramm/PrettyDiagramm';
import PrettySingleLabel from '../PrettySingleLabel/PrettySingleLabel';

const PrettyAnalitics = () => {
  const rectHeight = 11;
  const rectBorderRadius = 4;
  return (
    <PrettyContainer className="pretty-analitics pretty-container_size_medium pretty-container_type_analitics">
      <h2 className="pretty-container__title">Аналитика</h2>
      <PrettySingleLabel />
      <PrettyDiagramm diameter={145} lineWidth={8} />
      <ul className="pretty-container__list pretty-container__list_type_analitics">
        <li>
          <LabeledPoint
            pointColor="purple"
            rectHeight={rectHeight}
            rectBorderRadius={rectBorderRadius}
            labels={[
              {
                labelColor: 'medium-gray',
                labelWidth: 75,
              },
            ]}
          />
        </li>
        <li>
          <LabeledPoint
            pointColor="green"
            rectHeight={rectHeight}
            rectBorderRadius={rectBorderRadius}
            labels={[
              {
                labelColor: 'medium-gray',
                labelWidth: 37,
              },
            ]}
          />
        </li>
      </ul>
    </PrettyContainer>
  );
};

export default PrettyAnalitics;
