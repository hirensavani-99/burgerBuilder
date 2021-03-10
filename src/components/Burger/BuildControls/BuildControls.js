import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './Buildcontrol/buildcontrol'


const Controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
    
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {Controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label}
            label={ctrl.label}
            added = {() => props.ingredientAdded(ctrl.type)}
            removed = {() => props.incredientRemoved(ctrl.type)}
            disabled ={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton}
        disabled = {!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>


)


export default BuildControls