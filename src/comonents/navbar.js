import React, {Component} from 'react';

export class Navbar extends Component {
    state = {
        totalProducts: 0
    }

    computeOrder(ols) {
        var total = 0, price = 0;
        // console.log(ols);
        ols.forEach((item) => {
            total++;
            price += item['0']['price'];
            // console.log(item['0']['price'])
        });
        console.log(total, price);
        return {"total": total, "price": price};

    }

    render() {
        var data = this.computeOrder(this.props.orderList);
        // console.log(data);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <a className="navbar-brand" href="#">Shopping </a>
                <div>
                    <p> count of order list : <span className="badge  badge-success ">{data.total}</span></p>

                    <p> price : <span className="badge  badge-warning ">{data.price}</span></p>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Product list</a>
                        <a className="nav-item nav-link" href="#">Login</a>
                        <a className="nav-item nav-link" href="#">Logot</a>

                    </div>
                </div>
            </nav>
        );
    }
};