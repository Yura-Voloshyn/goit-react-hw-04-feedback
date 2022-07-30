import React, { Component } from 'react';
import { Container } from './App.styled';
import FeedbackWrapper from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodBtn = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    // console.log(this.state.good);
  };
  handleNeutralBtn = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    // console.log('click neutral');
  };
  handleBadBtn = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    // console.log('click bad');
  };

  render() {
    return (
      <Container>
        <FeedbackWrapper
          onGoodBtn={this.handleGoodBtn}
          onNeutralBtn={this.handleNeutralBtn}
          onBadBtn={this.handleBadBtn}
          goodValue={this.state.good}
          neutralValue={this.state.neutral}
          badValue={this.state.bad}
        />
      </Container>
    );
  }
}
export default App;
