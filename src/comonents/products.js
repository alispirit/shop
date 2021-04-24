import React, {Component} from 'react';
import {Product} from './product';

import {ProductService} from '../services';

export class Products extends Component {
    constructor(props) {
        super(props);
        this.props.getproducts(this.state);
    }

    state = {
        products: []
    }

    componentDidMount() {
        this.setState({products: ProductService.getProducts()});
    }

    handleatc = (id) => {
        // console.log("product : ",id);
        this.props.atl(id);
    }
    handledfc = (id) => {
        this.props.dfc(id);
    }

    render() {
        return (
            <div className="row">
                <h1 className="col-12 py-4"> Product list</h1>
                {
                    this.state.products.map(
                        (product, index) =>
                            <div className="col-6 col-md-3 " key={index}>
                                <Product
                                    src={product.src}
                                    price={product.price}
                                    title={product.title}
                                    id={product.id}
                                    addToCart={this.handleatc}
                                    deleteFromCart={this.handledfc}
                                />
                            </div>
                    )
                }
            </div>
        );
    }
}

