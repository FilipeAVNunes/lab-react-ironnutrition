import React, { Component } from 'react';

class MealBox extends Component {
  render() {
    const { name, image, calories } = this.props;
    return (
      <div className="media eachmeal">
        <img
          src={image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ 'max-width': '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{name}</h5>
          <small>{calories} cal</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-6 mr-5" type="number" value="1" />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}
export default MealBox;
