import React from 'react'
import classes from './Burger.css';
import Burgeringredient from './Burgeringredient/Burgeringredient'
const Burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients)
        .map(igkey => {

            return [...Array(props.ingredients[igkey])].map((_, i) => {


                return <Burgeringredient key={igkey + i} type={igkey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <p>please stat using increadint</p>
    }

    return (
        <div className={classes.Burger}>
            <Burgeringredient type='bread-top' />
            {transformIngredients}
            <Burgeringredient type='bread-bottom' />
        </div>
    )

}

export default Burger