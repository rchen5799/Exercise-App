import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Exercise Component
//Functional React component
//No state nor life cycle component
//Use function component when accept props and return 
const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

//Class component
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
            //_id created from MongoDB automatically
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    //ExerciseList component that is utilized below
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise = {currentexercise} deleteExercise = {this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render() {
        return (
            <div>
               <h3>Logged Exercises</h3>
               <table className="table">
                   <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
               </table>
            </div>
        )
    }
}