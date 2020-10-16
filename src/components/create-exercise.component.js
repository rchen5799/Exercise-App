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
                <p>You are on the Create Exercises Component!</p>
            </div>
        )
    }
}