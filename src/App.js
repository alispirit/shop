import React, {Component} from 'react';
import './App.css';
import {Order} from './comonents/order';
import {Navbar} from './comonents/navbar';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Login} from "./auth/login";

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
            <BrowserRouter>
                <div className="App">


                    <Navbar orderList={this.state.orderList}/>
                    {/*<div className="container">*/}
                    {/*    <Order addItem={this.addToList} removeItem={this.deleteFromList}/>*/}
                    {/*    <ListItems orderList={this.state.orderList}/>*/}
                    {/*</div>*/}
                    <Switch>
                        <Route exact path="/"
                               render={(props) => <Order addItem={this.addToList}
                                                         removeItem={this.deleteFromList} {...props} />}
                        />
                        <Route path="/login" component={Login}/>
                    </Switch>


                </div>
            </BrowserRouter>
        );
    }


}

