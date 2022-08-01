import PropTypes from 'prop-types';
import { Wrapper, BtnWrapper } from './FeedbackOptions.styled';
const Feedback = ({ options, onFeedbackBtn }) => {
  return (
    <Wrapper>
      <BtnWrapper>
        {options.map(option => (
          <button
            type="button"
            onClick={() => {
              onFeedbackBtn(option);
            }}
            key={option}
          >
            {option}
          </button>
        ))}
        {/* <button type="button" onClick={onGoodBtn}>
          Good
        </button>
        <button type="button" onClick={onNeutralBtn}>
          Neutral
        </button>
        <button type="button" onClick={onBadBtn}>
          Bad
        </button> */}
      </BtnWrapper>
    </Wrapper>
  );
};
Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onFeedbackBtn: PropTypes.func.isRequired,
};
export default Feedback;
