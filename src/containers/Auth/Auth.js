
import React, { Component } from 'react'
import Input from '../../components/UI/input/input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as actions from '../../Store/action/index'
import {connect} from 'react-redux'
class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'e-mail address'
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
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

    inputchangeHandler =(event,controlName)=>{
         const updatedControls = {
             ...this.state.controls,
             [controlName]:{
                 ...this.state.controls[controlName],
                 value:event.target.value,
                 valid: this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                 touched: true 
             }
         }
         this.setState({controls:updatedControls})
    }

    submitHandler=(event)=>{
        event.preventDefault();
        this.props.onAAuth(this.state.controls.email.value, this.state.controls.password.value,this.state.isSignUp)
    }

    switchAuthModeHandler = () =>{
        this.setState(prevState =>{
            return {isSignUp: !prevState.isSignUp}
        })
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
             key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldvalidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputchangeHandler(event, formElement.id)} /> 
         
        ))
        return (
            <div className = {classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {form}
                <Button btnType='Success'>Submit</Button>
                
                </form>
                <Button 
                clicked = {this.switchAuthModeHandler}
                btnType='Danger'>{this.state.isSignUp ? 'Switch to Sign IN' : 'Switch to Sing Up'}</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAAuth:(email,password,isSignUp)=>dispatch(actions.auth(email,password,isSignUp))
    }
}


export default connect(null,mapDispatchToProps)(Auth)