import React, { Component } from 'react';
import Auxliary from '../../hoc/Auxliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

    state = { showSideDrawer: false }
    
    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {

            console.log(this.state.showSideDrawer);
            return { showSideDrawer: !prevState.showSideDrawer }

        })

    }
    render() {
        return (
            <Auxliary>
                <Toolbar sideDrawerMover={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxliary>

        )
    }
}

export default Layout