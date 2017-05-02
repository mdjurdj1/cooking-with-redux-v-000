import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Recipes extends Component {
  render(){

    const recipeList = this.props.recipes.map((recipe, index)=> {
      return <li key={index}>{recipe.name}</li>
    })

    return(
        <div>
          <ul>
            {recipeList}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {recipes: state.recipes}
}

export const ConnectedRecipes = connect(mapStateToProps)(Recipes)
