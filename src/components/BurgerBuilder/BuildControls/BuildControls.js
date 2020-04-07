import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import ingredient from '../Burger/Ingredient/Ingredient'
import buildControl from './BuildControl/BuildControl'
const buildControls = (props) => {

    let buildControlList = props.ingredientsProps.map((ingredient) => {

        return <BuildControl
            key={ingredient.id}
            label={ingredient.label}
            added={() => { props.addOrRemoveIngredient(ingredient.id, "add") }}
            removed={() => { props.addOrRemoveIngredient(ingredient.id, "remove") }}
            disableRemoving={ingredient.count === 0}

        />
    })
    return (
        <div className={classes.BuildControls}>

            <p>Total price is :{props.totalPrice.toFixed(2)}</p>

            {buildControlList}

            <button className={classes.OrderButton} onClick={props.sendOrder}>order Now</button>
        </div>
    )
}
export default buildControls 