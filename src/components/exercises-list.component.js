import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};
    }

    //getting exercises from the database
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            }) 
            .catch((error) => {
                console.log(error);
            })
    }

    //id is the object id from MongoDB
    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
        
        //Set state will auto update state with new state
        this.setState({
            //Filtering will give certain element back
            //In this case, if el.id != id that we're deleting
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <div>
                <p>You are on the Exercises List Component!</p>
            </div>
        )
    }
}