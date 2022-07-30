import { Section } from './Section.styled';
import Feedback from '../FeedbackOptions/FeedbackOptions';
import Statistic from '../Statistics/Statistics';
const FeedbackWrapper = ({
  goodValue,
  neutralValue,
  badValue,
  onGoodBtn,
  onNeutralBtn,
  onBadBtn,
}) => {
  return (
    <Section>
      <Feedback
        onGoodBtn={onGoodBtn}
        onNeutralBtn={onNeutralBtn}
        onBadBtn={onBadBtn}
      />
      <Statistic
        goodValue={goodValue}
        neutralValue={neutralValue}
        badValue={badValue}
      />
    </Section>
  );
};
export default FeedbackWrapper;
