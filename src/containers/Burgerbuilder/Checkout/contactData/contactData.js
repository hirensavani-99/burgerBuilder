import React, { Component } from 'react'
import Button from '../../../../components/UI/Button/Button'
import classes from './contactData.css'
import axios from '../../../../axios-orders';
import Spinner from '../../../../components/UI/Spiner/spiner'
import Input from '../../../../components/UI/input/input'
import {connect} from 'react-redux' 

class contactData extends Component {
    state = {
        orderform: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched:false
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched:false
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code'
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched:false
               
            },
            methoad: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'fastest' },
                        { value: 'cheapest', displayValue: 'cheapest' }
                    ]
                },
                value: "",
                valid:true,
                validation:{}

            }

        },
        loading: false,
        formIsValid: false,
       
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const formData = {};
        for (let formElementidentifier in this.state.orderform) {
            formData[formElementidentifier] = this.state.orderform[formElementidentifier].value
        }
        const order = {
            ingredient: this.props.ings,
            price: this.props.price,
            order: formData

        }
        axios.post('/oredrs.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    checkValidity(value, rules) {
        let isvalid = true;

        if (rules.required) {
            isvalid = value.trim() !== '' && isvalid

        }

        
        if (rules.minLength) {
            isvalid = value.length >= rules.minLength  && isvalid

        }


        if (rules.maxLength) {
            isvalid = value.length <= rules.maxLength && isvalid

        }

        return isvalid

    }

    inputchangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderform
        }
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        updatedFormElement.touched = true;
        let formIsValid = true
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
        this.setState({ orderform: updatedOrderForm , formIsValid :formIsValid })

    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderform) {
            formElementsArray.push({
                id: key,
                config: this.state.orderform[key]
            })
        }
        let form = (<form onSubmit={this.orderHandler}>

            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldvalidate ={formElement.config.validation}
                    touched = {formElement.config.touched}
                    changed={(event) => this.inputchangeHandler(event, formElement.id)} />
            ))}
            <Button btnType='Success' disabled = {!this.state.formIsValid}>ORDER</Button>
        </form>)
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.contactData}>
                <h4>Enter your data</h4>
                {form}
            </div>

        )
    }

}


const mapStateToProps = state =>{
    return{
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(contactData)
