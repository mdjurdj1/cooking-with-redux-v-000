import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { addRecipe } from '../../actions/recipes'
import { connect } from 'react-redux'

export class RecipesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: 0
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let recipe = Object.assign({}, this.state)
    this.props.addRecipe(recipe)
    this.setState({
      name: '',
      calories: 0
    })
  }

  render(){
    return(
      <div>
        <h1>New Recipe Form!</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
        Name: <input type='text' name='name' onChange={(event)=>this.handleChange(event)} value={this.state.name} /> <br />
        Calories: <input type='text' name='calories' onChange={(event)=>this.handleChange(event)} value={this.state.calories} /> <br />
        <input type='submit' />
        </form>
      </div>
    )
  }
}

export const ConnectedRecipesInput = connect(null, mapDispatchToProps)(RecipesInput)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipe: addRecipe }, dispatch)
}
