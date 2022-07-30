// import PropTypes from 'prop-types';
import {
  StatisticWrapper,
  StatisticTitle,
  StatisticList,
} from './Statistics.styled';
import Notification from './Notification';
const Statistic = ({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positiveValue,
}) => {
  totalValue = goodValue + neutralValue + badValue;
  positiveValue = Math.round((goodValue / totalValue) * 100);
  return (
    <StatisticWrapper>
      <StatisticTitle>Statistic</StatisticTitle>
      {totalValue === 0 ? (
        <Notification />
      ) : (
        <StatisticList>
          <li>Good: {goodValue}</li>
          <li>Neutral: {neutralValue}</li>
          <li>Bad: {badValue}</li>
          <li>Total: {totalValue}</li>
          <li>Positive feedback: {positiveValue ? positiveValue : 0}%</li>
        </StatisticList>
      )}
    </StatisticWrapper>
  );
};
export default Statistic;
