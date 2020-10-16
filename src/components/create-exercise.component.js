import React, { Component } from 'react';

export default class CreateExercises extends Component {
    constructor(props) {
        //Call super when constructing from subclass
        super(props);

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

        console.log(exercise)
    }

    render() {
        return (
            <div>
                <p>You are on the Create Exercises Component!</p>
            </div>
        )
    }
}