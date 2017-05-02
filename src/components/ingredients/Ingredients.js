import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Ingredients extends Component {
  render(){

    const ingredientsList = this.props.ingredients.map((ing, index) => {
      return <li>{ing.name}</li>
    })

    return(
        <div>
          <ul>
            {ingredientsList}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { ingredients: state.ingredients }
}
export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)
