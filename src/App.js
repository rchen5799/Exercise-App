import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/boostrap.min.css'
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
