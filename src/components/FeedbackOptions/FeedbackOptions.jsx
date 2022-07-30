// import PropTypes from 'prop-types';
import { Wrapper, BtnWrapper } from './FeedbackOptions.styled';
const Feedback = ({ onGoodBtn, onNeutralBtn, onBadBtn }) => {
  return (
    <Wrapper>
      <h2>Please leave feedback</h2>
      <BtnWrapper>
        <button type="button" onClick={onGoodBtn}>
          Good
        </button>
        <button type="button" onClick={onNeutralBtn}>
          Neutral
        </button>
        <button type="button" onClick={onBadBtn}>
          Bad
        </button>
      </BtnWrapper>
    </Wrapper>
  );
};
export default Feedback;
