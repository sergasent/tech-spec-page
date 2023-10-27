import LabeledPoint from '../LabeledPoint/LabeledPoint';
import PrettyContainer from '../PrettyContainer/PrettyContainer';

import { TASKS_LIST } from '../../constants/constants';
import './PrettyTasks.scss';
import clsx from 'clsx';

const PrettyTasks = () => {
  const rectHeight = 47;
  const rectBorderRadius = 17;
  const smallRectHeight = 9;
  const smallRectBorderRadius = 5;
  const defaulLabelWidth = 137;
  const defaultPriceLabelWidth = 34;
  return (
    <PrettyContainer className="pretty-tasks pretty-container_size_medium pretty-container_type_tasks">
      <h2 className="pretty-container__title pretty-container__title_type_tasks">
        Список задач
      </h2>
      <ul className="pretty-tasks__headers-container">
        <li className="pretty-tasks__header">Задачи</li>
        <li className="pretty-tasks__header">Категория</li>
        <li className="pretty-tasks__header">Цена</li>
      </ul>
      <ul className="pretty-container__list pretty-container__list_type_tasks">
        {TASKS_LIST.map((item) => (
          <li
            key={item.id}
            className={clsx({
              'pretty-container__list-item pretty-container__list-item_type_tasks': true,
              'pretty-container__list-item_selected': item.id === 0,
            })}
          >
            <LabeledPoint
              className="pretty-tasks__labeled-point"
              type="large"
              pointColor="medium-gray"
              rectHeight={rectHeight}
              rectBorderRadius={rectBorderRadius}
              labels={[
                {
                  labelColor: 'dark-gray',
                  labelWidth: defaulLabelWidth,
                },
                {
                  labelColor: 'dark-gray',
                  labelWidth: item.task.secondLabelWidth,
                },
                {
                  labelColor: 'medium-gray',
                  labelWidth: item.task.thirdLabelWidth,
                },
              ]}
            />
            <LabeledPoint
              className="pretty-tasks__labeled-point"
              type="small"
              pointColor={item.category.color}
              rectHeight={smallRectHeight}
              rectBorderRadius={smallRectBorderRadius}
              labels={[
                {
                  labelColor: item.category.color,
                  labelWidth: item.category.labelWidth,
                },
              ]}
            />
            <LabeledPoint
              className="pretty-tasks__labeled-point"
              type="small"
              pointColor="dark-gray"
              rectHeight={0}
              rectBorderRadius={0}
              labels={[
                {
                  labelColor: 'dark-gray',
                  labelWidth: defaultPriceLabelWidth,
                },
              ]}
            />
          </li>
        ))}
      </ul>
    </PrettyContainer>
  );
};

export default PrettyTasks;
