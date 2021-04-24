import React, {Component} from 'react';

export class Product extends Component {
    constructor(props) {
        super(props);
    }

    atc(id) {
        this.props.addToCart(id);
    }

    dfc(id) {
        this.props.deleteFromCart(id);
    }

    render() {
        return (
            <div className="border border-secondary  rounded pt-3 my-2">
                <h3 className="text-secondary">
                    {this.props.title}
                </h3>

                <img className=" w-100" src={this.props.src} alt=""/>
                <p className=" badge  badge-warning p-2 mt-2 mb-0">
                    price : {this.props.price}
                </p>
                <div className="clearfix"></div>

                <div className="btn-group py-4">
                    <div className="btn btn-danger" onClick={() => this.dfc(this.props.id)}> -</div>
                    <div className="btn btn-info" onClick={() => this.atc(this.props.id)}> +</div>
                </div>
            </div>
        );
    }
}
