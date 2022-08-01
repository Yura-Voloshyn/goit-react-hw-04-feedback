import PropTypes from 'prop-types';
import { Section } from './Section.styled';
// import Feedback from '../FeedbackOptions/FeedbackOptions';
// import Statistic from '../Statistics/Statistics';
const FeedbackSection = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}

      {/* <Feedback
        onGoodBtn={onGoodBtn}
        onNeutralBtn={onNeutralBtn}
        onBadBtn={onBadBtn}
      />
      <Statistic
        goodValue={goodValue}
        neutralValue={neutralValue}
        badValue={badValue}
      /> */}
    </Section>
  );
};
FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FeedbackSection;
