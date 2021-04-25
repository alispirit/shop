import React, {Component} from 'react';
import _ from 'lodash';

export class Login extends Component {
    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {
            username: '',
            password: ''
        },
        messages: ''
    }
    username = React.createRef();
    password = React.createRef();
    validate = () => {
        const errors = {}
        const user = this.username.current.value;
        const pass = this.password.current.value;
        if (user.trim() === '')
            errors.username = "Username is required";
        if (pass.trim() === '')
            errors.password = "Password is required";
        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();
        // --- call the server
        const user = this.username.current.value;
        const pass = this.password.current.value;
        var account = {
            username: user,
            password: pass
        }

        this.setState({account});
        var errors = {};
        console.log(account);
        this.setState(
            {account},
            () => {
                // console.log(this.state);
                errors = this.validate();
                this.setState({errors})
                // console.log(errors === {},this.state.errors);
                console.log(_.isEmpty({}));
                if (_.isEmpty(errors)) {
                    var messages = "Welcome " + this.state.account.username + "you are loged in successfully";
                    this.setState({messages});
                } else {
                    this.setState({messages: ''});
                }
            }
        );

        // console.log("form subited");
    }

    handlerChange() {

    }

    render() {
        return (
            <div className="row">
                <h1 className="col-12 py-4"> Login Page</h1>
                <div className="col-10 offset-1 text-left">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="InputUser">Username</label>
                            <input onChange={this.handlerChange} ref={this.username} type="text"
                                   className="form-control" id="InputUser" placeholder="Enter Username"/>
                            <span className="text-danger">{this.state.errors.username}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword">Password</label>
                            <input onChange={this.handlerChange} ref={this.password} type="password"
                                   className="form-control" id="InputPassword" placeholder="Password"/>
                            <span className="text-danger">{this.state.errors.password}</span>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Login</button>
                    </form>
                </div>
                <div className="col-12">
                    <div className="text-success">
                        {this.state.messages}
                    </div>
                </div>

            </div>
        );
    }
};