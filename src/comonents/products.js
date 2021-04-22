import React, {Component} from 'react';
import {Product} from './product';

// import {ProductService} from '../services/productServices';

export class Products extends Component {
    state = {
        products: [
            {
                id: 1,
                title: ' title 1',
                price: 2000,
                src: "./img/1.jpg"
            }, {
                id: 2,
                title: ' title 2',
                price: 2500,
                src: "./img/1.jpg"
            }, {
                id: 3,
                title: ' title 3',
                price: 2500,
                src: "./img/1.jpg"
            }, {
                id: 4,
                title: ' title 4',
                price: 5000,
                src: "./img/1.jpg"
            }

        ]
    }

    render() {
        return (
            <div className="row">
                <h1 className="col-12"> Product list</h1>
                {
                    this.state.products.map(
                        (product, index) =>
                            <div className="col-6 " key={index}>
                                <Product src={product.src} price={product.price} title={product.title}/>
                            </div>
                    )
                }
            </div>
        );
    }
}

