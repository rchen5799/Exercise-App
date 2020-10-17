import React, { Component } from 'react';

export default class CreateExercises extends Component {
    constructor(props) {
        //Call super when constructing from subclass
        super(props);

        //Because 'this' is undefined, we need to define what 'this' is 
        //referring to. We want 'this' to refer to the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //State is how to create variables in React
        this.state = {
            //Correspondes with MongoDB
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    //Lets the user choose from a drop-down list
    //Auto-called before anything displayed on page
    //"Life-Cycle" function
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }


    //When username is changed, reset the state
    onChangeUsername(e) {
        this.setState({
            //Target is the 'textbox' in UI
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            //Target is the 'textbox' in UI
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            //Target is the 'textbox' in UI
            duration: e.target.value
        });
    }

    //will get date from library
    onChangeDate(date) {
        this.setState({
            //Target is the 'textbox' in UI
            date: date
        });
    }

    //Submit
    onSubmit(e) {
        //prevent the default HTML form submit behavior
        e.preventDefault();

        //instead, define behavior here
        //Can only define variables within a method
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        //Console logs this
        console.log(exercise);

        //Take the person back to the homepage
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                //Array of all the users from MongoDB database
                                //.map returns something for each element in array
                                this.state.users.map(function(user) {
                                    //Return an option of the select box
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                select={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            value="Create Exercise Log"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}