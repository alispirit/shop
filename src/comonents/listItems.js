import React, {Component} from 'react';
import {ListItem} from "./listItem";

export class ListItems extends Component {
    render() {
        var orders = this.props.orderList;
        return (
            <div className="border border-primary rounded">
                <h3 className="border-bottom border-primary py-2"> Shopping cart : </h3>
                {
                    orders.map(function (item, index) {
                        return <ListItem key={index} data={item['0']} index={index}/>
                    })
                }
            </div>
        );
    }
}
