import React, {Component} from 'react';

export class Product extends Component {
    render() {
        return (
            <div className="border border-secondary rounded pt-3 my-2">
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    price : {this.props.price}
                </p>
                <img className=" w-100" src={this.props.src} alt=""/>
                <div className="btn-group py-4">
                    <div className="btn btn-danger"> +</div>
                    <div className="btn btn-info"> +</div>
                </div>
            </div>
        );
    }
}
