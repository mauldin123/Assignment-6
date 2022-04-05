import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState } from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi'
import Navigation from './components/nav.js';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();



  return (
    <div className="App">
      <Router>
      <header className="App-header">
          <GiWeightLiftingUp className="App-logo" size={80}/>
          <h1>Chasen Gains</h1>
          <p>Log all of your favorite exercises below and chase your personal fitness dreams!</p>
          </header>
        <main>
          <Navigation />
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <CreateExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>
          </div>
          
        </main>
        
        <footer>
          <p>© 2022 Chasen Mauldin</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;