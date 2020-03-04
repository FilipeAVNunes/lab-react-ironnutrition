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
      image: '',
      active: false,
      contentOfNewMeal: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addMeal = this.addMeal.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  addMeal(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };
    const newMeals = [...this.state.meals, data];
    this.setState({
      meals: newMeals,
      active: false,
      contentOfNewMeal: ''
    });
  }

  toggleForm() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  render() {
    //const meals = this.state.meals;
    return (
      <div className="App">
        <h1 className="title">Meals</h1>
        <button onClick={this.toggleForm}>Add a meal?</button>
        {this.state.active && (
          <form className="form" onSubmit={this.addMeal} name="contentOfNewMeal">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              value={this.state.calories}
              placeholder="Number of calories"
              name="calories"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="image"
              value={this.state.image}
              placeholder="Image Url"
              onChange={this.handleInputChange}
            />
            <button>Add the meal to the list</button>
          </form>
        )}
        {this.state.meals.map(meal => {
          return (
            <MealBox
              name={meal.name}
              key={meal.name}
              image={meal.image}
              calories={meal.calories}
              quantity={meal.quantity}
            ></MealBox>
          );
        })}
      </div>
    );
  }
}

export default App;
