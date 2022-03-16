import React, { useState,useEffect } from 'react';
import Movie from './components/movie';

function App() {
  const [movieTitle, setmoiveTitle] = useState('');
  const [movieYear, setmoiveYear] = useState('');
  const [movies, setmovies] = useState([
    { title: 'movie1', year: 2001},
    { title: 'movie2', year: 2002},
    { title: 'movie3', year: 2003},
    { title: 'movie4', year: 2004},
    { title: 'movie5', year: 2005},
    { title: 'movie6', year: 2006},
    { title: 'movie7', year: 2007},
    { title: 'movie8', year: 2008},
    { title: 'movie9', year: 2009},
  ]);

  const addMoive = (event) => {
    event.preventDefault();
    setmovies([...movies, { title: movieTitle, year: movieYear }]);
    setmoiveTitle(''); setmoiveYear('');
  };

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    );
  });
  return (
    <div className="App">
      <h1>Movie List</h1>

      <form onSubmit={addMoive}>
        <input type="text" value={movieTitle} placeholder='영화 제목' onChange={e => setmoiveTitle(e.target.value)} />
        <br />
        <input type="text" value={movieYear} placeholder='개봉년도' onChange={e => setmoiveYear(e.target.value)} />
        <br />
        <button type='submit'>추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
