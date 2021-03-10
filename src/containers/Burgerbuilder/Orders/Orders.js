import React, { Component } from 'react'
import Order from '../../../components/Order/CheckoutSummary/Order'
import axios from '../../../axios-orders'

class Orders extends Component {

    state={
        orders:[],
        loading:true
    }
    componentDidMount() {
        axios.get('/oredrs.json')
            .then(res=>{
                const fetchedOrders = []
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id:key
                    });  
                }
               
                this.setState({loading:false, orders:fetchedOrders})
            })
            .catch(err=>{
                this.setState({loading:false})
            })
    }
    render() {
        return (
            <div>
               {
                   this.state.orders.map(order=>(
                       < Order key={order.id}
                       ingredient={order.ingredient}
                       price={order.price}/>
                   ))
               }
            </div>
        );
    }
}


export default Orders