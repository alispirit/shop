import React, {Component} from 'react';
import {Products} from "./products";
import {ProductService} from '../services';
import {ListItems} from "./listItems";
export class Order extends Component {
    state = {
        products: [],
        order: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({products: ProductService.getProducts()});
    }


    addToList = (id) => {
        var pr = ProductService.getProductById(id);
        this.setState(
            {order: [...this.state.order, pr]},
            () => this.props.addItem(this.state.order)
        );
    }
    deleteFromList = (id) => {
        var {order} = this.state;
        var itemIndex = [];
        var indexDelete = -1;
        // let filteredArrayoo = this.state.order.filter(item =>   console.log("item :" ,item['0']['id'])  );
        for (var i = 0; i < order.length; i++) {
            if (order[i]['0']['id'] == id) {
                indexDelete = order.indexOf(order[i]);
                break;
            }
        }
        if (indexDelete > -1) {
            order.splice(indexDelete, 1);
        }
        console.log(order);
        this.setState({order});
        this.setState(
            {order},
            () => this.props.removeItem(this.state.order)
        );


        // console.log("->" ,filteredArray);
        // this.state.order.findIndex()
    }
    getproductsHandle = (data) => {
        // console.log(data)
    }


    render() {
        // console.log(this.state);

        return (
            <div>
                <Products dfc={this.deleteFromList} atl={this.addToList} getproducts={this.getproductsHandle}/>
                <ListItems orderList={this.state.order}/>
            </div>
        );
    }
};
