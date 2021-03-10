import React, { Component } from 'react'
import Checkoutsummary from '../../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './contactData/contactData'
import { connect } from 'react-redux'
class checkout extends Component {

    checkoutcancleHandler = () => {
        this.props.history.goBack();
    }

    checkoutcontinuedHandler = () => {
        this.props.history.replace('checkout/contact-data')
    }
    render() {
        return (
            <div>
                <Checkoutsummary ingredients={this.props.ings}
                    checkoutcancle={this.checkoutcancleHandler}
                    checkoutcontinued={this.checkoutcontinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        ings: state.burgerbuilderReducer.ingredients
    }
}


export default connect(mapStateToProps)(checkout)

