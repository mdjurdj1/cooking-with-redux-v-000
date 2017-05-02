import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { recipeFormAddIngredient } from '../../actions/ingredients'

export class AddIngredient extends Component {
  render(){

    handleClick(event) {
      this.props.recipeFormAddIngredient(this.props.id)
    }

    return(
      <div>
        <button onClick={(event)=>this.handleClick(event)}>{this.props.name}</button>
      </div>
    )
  }
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({recipeFormAddIngredient}, dispatch)
}
