import LabeledPoint from '../LabeledPoint/LabeledPoint';
import PrettyContainer from '../PrettyContainer/PrettyContainer';

const PrettyQueries = () => {
  const rectHeight = 36;
  const rectBorderRadius = 11;
  return (
    <PrettyContainer className="pretty-container_size_medium pretty-container_type_queries">
      <h2 className="pretty-container__title pretty-container__title_type_queries">
        Запросы
      </h2>
      <ul className="pretty-container__list pretty-container__list_type_queries">
        <li className="pretty-container__list-item pretty-container__list-item_type_queries">
          <LabeledPoint
            type="medium"
            pointColor="green"
            rectHeight={rectHeight}
            rectBorderRadius={rectBorderRadius}
            labels={[
              {
                labelColor: 'dark-gray',
                labelWidth: 143,
              },
              {
                labelColor: 'medium-gray',
                labelWidth: 74,
              },
            ]}
          />
        </li>
        <li className="pretty-container__list-item pretty-container__list-item_type_queries">
          <LabeledPoint
            type="medium"
            pointColor="purple"
            rectHeight={rectHeight}
            rectBorderRadius={rectBorderRadius}
            labels={[
              {
                labelColor: 'dark-gray',
                labelWidth: 143,
              },
              {
                labelColor: 'medium-gray',
                labelWidth: 74,
              },
            ]}
          />
        </li>
        <li className="pretty-container__list-item pretty-container__list-item_type_queries">
          <LabeledPoint
            type="medium"
            pointColor="orange"
            rectHeight={rectHeight}
            rectBorderRadius={rectBorderRadius}
            labels={[
              {
                labelColor: 'dark-gray',
                labelWidth: 143,
              },
              {
                labelColor: 'medium-gray',
                labelWidth: 74,
              },
            ]}
          />
        </li>
      </ul>
    </PrettyContainer>
  );
};

export default PrettyQueries;
