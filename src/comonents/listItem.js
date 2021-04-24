import React, {Component} from 'react';

export class ListItem extends Component {
    render() {
        var {data} = this.props;
        var {index} = this.props;
        return (
            <div className="alert alert-info">
                <span className="font-weight-bold">{index + 1}</span> - <h5 className="d-inline-block">{data.title}</h5>
            </div>
        );
    }
};