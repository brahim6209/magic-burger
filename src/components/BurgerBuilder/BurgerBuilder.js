import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import axios from '../../utils/axios'

class BurgerBuilder extends Component {
  state = {
    ingredients: [],

    totalPrice: 0
  }
  constructor(props) {
    super(props)
    console.log('[constructor]')

  }


  componentDidMount() {
    console.log('[componentDidMount]')
    this.getIngredientsFromServer()
    //this.getLastBurgerFromServer()
    this.getbasicPriceFromServer()
  }
  componentDidUpdate() {
    console.log('[componentDidUpdate]')

  }


  getIngredientsFromServer = () => {
    axios.get('ingredients')
      .then((response) => {

        let newIngredients = response.data.ingredients.map((item) => {
          item.price *= 3
          return item
        })

        this.setState({
          ingredients: newIngredients
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }
  getIngredientsFromServer = () => {
    axios.get('ingredients')
      .then((response) => {

        let newIngredients = response.data.ingredients.map((item) => {
          item.price *= 3
          return item
        })

        this.setState({
          ingredients: newIngredients
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  getLastBurgerFromServer = () => {
    axios.get('lastBurger')
      .then((response) => {

        let newIngredients = response.data.burger.map((item) => {
          item.price *= 3
          return item
        })

        this.setState({
          ingredients: newIngredients
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  getbasicPriceFromServer = () => {
    axios.get('basicPrice')
      .then((response) => {

        console.log(response.data.basicPrice)

        this.setState({
          totalPrice: response.data.basicPrice
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  aadOrRemoveIngrdientHandler = (id, action) => {
    const newIngredients = [... this.state.ingredients]
    let newTotalPrice = this.state.totalPrice
    const index = newIngredients.findIndex((ingredient) => {
      return ingredient.id === id
    })
    if (action === "add") {
      newIngredients[index].count++
      newTotalPrice += newIngredients[index].price
    }
    else if (action === "remove") {
      newIngredients[index].count--
      newTotalPrice -= newIngredients[index].price
    }
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    })
  }
  sendMyOrderHandler = () => {
    axios.post('burger', {
      burger: this.state.ingredients
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    console.log('[render]')
    return (
      <div>
        <Burger ingredientsProps={this.state.ingredients} />

        <BuildControls
          ingredientsProps={this.state.ingredients}
          addOrRemoveIngredient={this.aadOrRemoveIngrdientHandler}
          totalPrice={this.state.totalPrice}
          sendOrder={this.sendMyOrderHandler} />
      </div >
    )
  }
}

export default BurgerBuilder