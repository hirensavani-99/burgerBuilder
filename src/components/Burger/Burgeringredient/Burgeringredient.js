import React, { Component } from 'react';
import classes from './Burgeringredient.css'
import PropTypes from 'prop-types';


class Burgeringredient extends Component {
    render(){
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}> </div>;
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}> </div>;
                break;
            case ('Cheese'):
                ingredient = <div className={classes.Cheese}> </div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}> </div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}> </div>;
                break;

            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1} />
                    <div className={classes.Seeds2} />
                </div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;

    }

  
}
Burgeringredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Burgeringredient;