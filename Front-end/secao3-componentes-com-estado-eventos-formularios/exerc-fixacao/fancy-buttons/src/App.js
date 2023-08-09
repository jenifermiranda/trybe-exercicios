import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    btnOne: 0,
    btnTwo: 0,
    btnThree: 0,
  }

  handleBtnClick = () => {
    this.setState((prev) => ({
      btnOne: prev.btnOne + 1,
    }))
  }

  handleBtnTwo = () => {
    this.setState((prev) => ({
      btnTwo: prev.btnTwo + 1,
    }))
  }

  handleBtnThree = () => {
    this.setState((prev) => ({
      btnThree: prev.btnThree + 1,
    }))
  }

  btnColor(num) {
    return num > 0 && num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { btnOne } = this.state;
    const { btnTwo } = this.state;
    const { btnThree } = this.state;
    return (
      <div className="App">
        <button type='button' onClick={this.handleBtnClick}> Clicks</button>
        {`${btnOne}`}
        <button type='button' onClick={this.handleBtnTwo} style={{ backgroundColor: this.btnColor(btnThree) }}>Clicks</button>
        {`${btnTwo}`}
        <button type='button' onClick={this.handleBtnThree} style={{ backgroundColor: this.btnColor(btnThree) }}>Clicks</button>
        {`${btnThree}`}
      </div >
    );
  }
}

export default App;
