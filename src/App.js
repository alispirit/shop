import React, {Component} from 'react';
import './App.css';
import {Order} from './comonents/order';
import {Navbar} from './comonents/navbar';
import {ListItems} from "./comonents/listItems"

export class App extends Component {
    state = {
        orderList: [],
    }
    addToList = (items) => {
        this.setState({orderList: items}, () => console.log(this.state))
    }
    deleteFromList = (items) => {
        this.setState({orderList: items}, () => console.log(this.state))
    }

    render() {
        return (
            <div className="App">
                <Navbar orderList={this.state.orderList}/>
                <div className="container">
                    <Order addItem={this.addToList} removeItem={this.deleteFromList}/>
                    <ListItems orderList={this.state.orderList}/>
                </div>

            </div>
        );
    }


}

