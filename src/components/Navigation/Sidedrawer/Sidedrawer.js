import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './sideDrawer.css'
import Backdrop from '../../Backdrop/Backdrop';
import Auxliary from '../../../hoc/Auxliary'


const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
   
    return (
        <Auxliary>
          
            <Backdrop show={props.open} clicked={props.closed} />
            {console.log(props.open)}
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%' />
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </Auxliary>
    )

}

export default sideDrawer