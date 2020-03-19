import React, { Component } from 'react';
import './App.css';
import { trainees } from './shared/trainees';
import Loader from './components/Loader';
import Trainee from './components/Trainee';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      employees: [],
      flag: true
    };
  }
  // state = {
  //   isLoading: false,
  //   employees: []
  // };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      const { flag } = this.state;
      if (flag) {
        const obj = {
          employees: trainees,
          isLoading: false
        };
        this.setState(obj, () => {
          console.log('callback');
        });
      }
    }, 2000);
  }
  render() {
    const { employees, isLoading } = this.state;
    const loading = <Loader size="small" />;
    const traineeObj = employees.map((trainee, index) => (
      <Trainee index={index} trainee={trainee} />
    ));
    console.log('traineeObj', traineeObj);
    return <div className="App">{isLoading ? loading : traineeObj}</div>;
  }
}

export default App;
