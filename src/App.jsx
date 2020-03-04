import React, { Component } from 'react';
import './App.scss';
import MealBox from './components/MealBox';
import meals from './meals.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      name: '',
      calories: '',
      image: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName(event) {
    const value = event.target.value;

    this.setState({
      name: value
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.calories;
    this.setState({
      [inputName]: value
    });
  }

  render() {
    const meals = this.state.meals;
    return (
      <div className="App">
        <h1 className="title">Meals</h1>
        <form className="form" onSubmit={this.sendMessage}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeName}
          />
          <input
            type="text"
            placeholder="Number of calories"
            name="text"
            onChange={this.handleInputChange}
          />
          <input type="file" value={this.state.image} />
          <button>Add a meal</button>
        </form>
        {this.state.meals.map(meal => {
          return <MealBox name={meal.name} image={meal.image} calories={meal.calories}></MealBox>;
        })}
      </div>
    );
  }
}

export default App;
