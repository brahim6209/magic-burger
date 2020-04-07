import React from 'react'
import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'
import ingredient from './Ingredient/Ingredient'
const burger = (props) => {
    let ingredientsComponents = []
    for (let ingredient of props.ingredientsProps) {
        // let ingredientsComponents = props.ingredientsProps.map((ingredient) => {
        //     return <Ingredient type={ingredient.label} />
        // })
        for (let i = 0; i < ingredient.count; i++)
            ingredientsComponents.push(<Ingredient
                key={ingredient.id + '_' + i}
                type={ingredient.label}
            />)
    }

    let message = null
    if (ingredientsComponents.length === 0)
        message = <p>please start adding ingredients !!</p>
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {message}
            {ingredientsComponents}
            <Ingredient type="bread-bottom" />

        </div>

    )
}
export default burger