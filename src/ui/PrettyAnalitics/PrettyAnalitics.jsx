import LabeledPoint from '../LabeledPoint/LabeledPoint';
import PrettyContainer from '../PrettyContainer/PrettyContainer';
import PrettyDiagramm from '../PrettyDiagramm/PrettyDiagramm';

const PrettyAnalitics = () => {
  return (
    <PrettyContainer className="pretty-container_size_medium pretty-container_type_analitics">
      <h2 className="pretty-container__title">Аналитика</h2>
      <PrettyDiagramm diameter={145} lineWidth={8} />
      <ul className="pretty-container__list pretty-container__list_type_analitics">
        <li>
          <LabeledPoint
            pointColor="purple"
            rectHeight="11"
            rectBorderRadius="4"
            labels={[
              {
                labelColor: 'light-gray',
                labelWidth: '75',
              },
            ]}
          />
        </li>
        <li>
          <LabeledPoint
            pointColor="green"
            rectHeight="11"
            rectBorderRadius="4"
            labels={[
              {
                labelColor: 'light-gray',
                labelWidth: '37',
              },
            ]}
          />
        </li>
      </ul>
    </PrettyContainer>
  );
};

export default PrettyAnalitics;