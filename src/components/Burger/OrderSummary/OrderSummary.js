import React from 'react';
import Auxliary from '../../../hoc/Auxliary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsummary = Object.keys(props.ingredients)
        .map(igkey => {
            return <li key={igkey}> <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}</li>
        })
    return (
        <Auxliary>

            <h3>Your Order is</h3>
            <p>A delicious burger with following ingredients : </p>
            <ul>
                {ingredientsummary}
            </ul>
            <p><strong>Total price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to check out </p>
            <Button btnType='Danger' clicked={props.purchaseCancled}>CANCLE</Button>
            <Button btnType='Success' clicked={props.purchaseContinued} >CONTINUE</Button>

        </Auxliary>
    )
}



export default orderSummary;