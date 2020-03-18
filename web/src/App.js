import React, { Component } from 'react';
import './App.css';
import { trainees } from './shared/trainees';
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      employees: []
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        employees: trainees,
        isLoading: false
      });
    }, 2000);
  }
  render() {
    const { employees, isLoading } = this.state;
    const loading = <Loader size="small" />;
    const traineeObj = employees.map((trainee, index) => {
      const { name } = trainee;
      return (
        <div className="item">
          <span>{index + 1}. </span>
          <span className="name">{name}</span>
        </div>
      );
    });
    console.log('traineeObj', traineeObj);
    return <div className="App">{isLoading ? loading : traineeObj}</div>;
  }
}

export default App;
