import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>we hope you will enjoy</h1>
            <div>
                <Button btnType='Danger' clicked={props.checkoutcancle}>CANCLE</Button>
                <Button btnType='Success' clicked={props.checkoutcontinued}>Continue </Button>
            </div>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
          

        </div>

    )


}

export default checkoutSummary;

