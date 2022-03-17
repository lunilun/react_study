import React, { useState } from 'react';
import Movie from './components/movie';
import MovieForm from './components/movieForm';

import Navbar from './components/Navbar';
import User from './Pages/Users.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [movies, setmovies] = useState([]);

  const addMoive = (movie) => {
    setmovies([...movies, movie]);
  };

  const removemovie = (id) => {
    setmovies(movies.filter(movie => {return movie.id !== id }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie movie={movie} removemovie={removemovie} key={movie.id}/>
    );
  }) : '추가된 영화가 없습니다.';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route path="/movies">
            <h1>Movie List</h1>
            <MovieForm addMoive={addMoive}/>
            {renderMovies}
          </Route>

          <Route path="/users">
            <User/>
          </Route>

          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
