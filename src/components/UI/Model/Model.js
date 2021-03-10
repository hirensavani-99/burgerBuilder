import React,{Component} from 'react'
import classes from './Model.css'
import Auxliary from '../../../hoc/Auxliary'
import Backdrop from '../../Backdrop/Backdrop'


class Model extends Component {
    shouldComponentUpdate(nextprops){
        return nextprops.show !== this.props.show || nextprops.children !== this.props.children;

    }

    componentWillUpdate(){
        console.log('[model] will update');
    }
    
    render(){
        return(
            <Auxliary>
            <Backdrop show={this.props.show}  clicked = {this.props.modelClosed}/>
            <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Auxliary>
        )
    }

}


export default Model;