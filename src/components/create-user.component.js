import React, { Component } from 'react';

export default class CreateUsers extends Component {
    constructor(props) {
        //Call super when constructing from subclass
        super(props);

        //Because 'this' is undefined, we need to define what 'this' is 
        //referring to. We want 'this' to refer to the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //State is how to create variables in React
        this.state = {
            //Correspondes with MongoDB
            username: '',
            users: []
        }
    }

    //When username is changed, reset the state
    onChangeUsername(e) {
        this.setState({
            //Target is the 'textbox' in UI
            username: e.target.value
        });
    }

    //Submit
    onSubmit(e) {
        //prevent the default HTML form submit behavior
        e.preventDefault();

        //instead, define behavior here
        //Can only define variables within a method
        const user = {
            username: this.state.username,
        }

        //Console logs this
        console.log(user);

        //Set the username to 0; want user to stay on the same 
        //form upon submission
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn brn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}