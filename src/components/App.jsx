import React, { useState, useEffect, Component } from 'react';
import { Container } from './App.styled';
import FeedbackSection from './Section/Section';
import Feedback from '../components/FeedbackOptions/FeedbackOptions';
import Statistic from '../components/Statistics/Statistics';
import Notification from '../components/Statistics/Notification';

class App1 extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    // console.log(option);
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const totalFeedback = this.countTotalFeedback();
    const feedBackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <FeedbackSection title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onFeedbackBtn={this.handleBtn}
          />
        </FeedbackSection>

        <FeedbackSection title="Statistic">
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={feedBackPercentage ? feedBackPercentage : 0}
            />
          )}
        </FeedbackSection>
      </Container>
    );
  }
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  handleBtn = option => {
    useState(prevState => ({ [option]: prevState[option] + 1 }));
    // console.log(option);
  };
  return (
    <Container>
      <FeedbackSection title="Please leave feedback">
        <Feedback options={Object.keys(this.state)} onFeedbackBtn={handleBtn} />
      </FeedbackSection>

      <FeedbackSection title="Statistic">
        {!totalFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={feedBackPercentage ? feedBackPercentage : 0}
          />
        )}
      </FeedbackSection>
    </Container>
  );
};

export default App;
