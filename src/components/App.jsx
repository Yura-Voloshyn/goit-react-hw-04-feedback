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

// const salaries1 = {
//   Manager: { salary: 1000, tax: '10%' },
//   Designer: { salary: 600, tax: '30%' },
//   Artist: { salary: 1500, tax: '15%' },
// };
// const team1 = [
//   { name: 'Misha', specialization: 'Manager' },
//   { name: 'Max', specialization: 'Designer' },
//   { name: 'Vova', specialization: 'Designer' },
//   { name: 'Leo', specialization: 'Artist' },
// ];
// const salaries2 = {
//   TeamLead: { salary: 1000, tax: '99%' },
//   Architect: { salary: 9000, tax: '34%' },
// };
// const team2 = [
//   { name: 'Alexander', specialization: 'TeamLead' },
//   { name: 'Gaudi', specialization: 'Architect' },
//   { name: 'Koolhas', specialization: 'Architect' },
//   { name: 'Foster', specialization: 'Architect' },
//   { name: 'Napoleon', specialization: 'General' },
// ];

// function calculateTeamFinanceReport(salaries, team) {
//   let totalSalary = 0;
//   const totalBudget = { totalBudgetTeam: 0 };
//   const teamPositions = Object.keys(salaries);

//   if (teamPositions.length < 1 || teamPositions.length > 10) {
//     alert('minimum specializations amount is 1, maximum up to 10');
//     return;
//   }
//   if (team.length < 1 || team.length > 100) {
//     alert('minimal team size is 1, maximum up to 100');
//     return;
//   }

//   for (const position of teamPositions) {
//     const salary = salaries[position].salary;
//     const tax = Number(salaries[position].tax.replace(/[^0-9]/g, ''));
//     if (!Number.isInteger(salary) || salary < 100 || salary > 100000) {
//       alert(' salary after tax should be integer; min: 100, max: 100000');
//       return;
//     }
//     if (!Number.isInteger(tax) || tax < 0 || tax > 99) {
//       alert('tax percent should be integer; min: 0%, max: 99%');
//       return;
//     }
//     const positionCounter = team.filter(
//       member => member.specialization === position
//     ).length;
//     const salaryWithTaxCalculate = Math.abs((salary / (100 - tax)) * 100);

//     totalBudget[`totalBudget${position}`] = Math.floor(
//       positionCounter * salaryWithTaxCalculate
//     );
//     totalSalary += positionCounter * salaryWithTaxCalculate;
//   }
//   totalBudget.totalBudgetTeam = Math.floor(totalSalary);
//   return totalBudget;
// }

// const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
// console.log(JSON.stringify(financeReport1));

// const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
// console.log(JSON.stringify(financeReport2));
