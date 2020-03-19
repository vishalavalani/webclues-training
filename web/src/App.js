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
    this.setLoading();
    setTimeout(() => {
      const { flag } = this.state;
      if (flag) {
        const obj = {
          employees: trainees,
          isLoading: false
        };
        this.setState(obj, () => {
          console.log('callback');
          this.setLoading(false);
        });
      }
    }, 200);
  }
  setLoading = (loading = true) => {
    this.setState({ isLoading: loading });
  };
  employeeDeleteHandler = id => {
    console.log('employeeDeleteHandler called', id);
    // this.setLoading();
    setTimeout(() => {
      const employees = this.state.employees.filter(d => d.id !== id);
      this.setState(
        {
          employees
        },
        () => {
          // this.setLoading(false);
        }
      );
    }, 2000);
  };
  render() {
    const { employees, isLoading } = this.state;
    const loading = <Loader size="small" loading={isLoading} />;
    const traineeObj = employees.map((trainee, index) => (
      <Trainee
        key={trainee.id}
        index={index}
        trainee={trainee}
        onDelete={this.employeeDeleteHandler}
      />
    ));
    console.log('traineeObj', traineeObj);
    return <div className="App">{isLoading ? loading : traineeObj}</div>;
  }
}

export default App;
