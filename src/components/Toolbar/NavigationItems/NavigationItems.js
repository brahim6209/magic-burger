import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem name="BurgerBuilder" active />
      <NavigationItem name="Checkout" />
    </ul>
  )
}

export default navigationItems 