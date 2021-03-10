import React, { Component } from 'react'
import Auxliary from '../../hoc/Auxliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Model from '../../components/UI/Model/Model';
import Ordersummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../.../../../axios-orders';
import Spiner from '../../components/UI/Spiner/spiner'
import Checkout from './Checkout/Checkout'
import { connect } from 'react-redux'
import * as burgerBuilderAction from '../../Store/action/index'





class Burgerbuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
        loading: false
    }


    componentDidMount() {
        this.props.oninitIngredients();

    }

    updatePurchaseState(ingredients) {


        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancleHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');

    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let ordersummary = <Ordersummary
            ingredients={this.props.ings}
            purchaseCancled={this.purchaseCancleHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.props.price}
        />

        if (this.state.loading) {
            console.log('spining...');
            ordersummary = <Spiner />;
        }
        return (
            <Auxliary>
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancleHandler}>
                    {ordersummary}
                </Model>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    incredientRemoved={this.props.onIngredientRemoved}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    disabled={disabledInfo}
                    price={this.props.price} />
            </Auxliary>
        )
    }
}


const mapStateToProps = state => {
    return {
        ings: state.burgerbuilderReducer.ingredients,
        price: state.burgerbuilderReducer.totalPrice,
        error: state.burgerbuilderReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderAction.addIngredients(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderAction.removeIngredients(ingName)),
        oninitIngredients: () => dispatch(burgerBuilderAction.initIngredients())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Burgerbuilder);