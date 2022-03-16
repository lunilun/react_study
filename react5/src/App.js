import React from 'react';

function App() {
  const moives = [
    { title: 'movie1', year: 2001},
    { title: 'movie2', year: 2002},
    { title: 'movie3', year: 2003},
    { title: 'movie4', year: 2004},
    { title: 'movie5', year: 2005},
    { title: 'movie6', year: 2006},
    { title: 'movie7', year: 2007},
    { title: 'movie8', year: 2008},
    { title: 'movie9', year: 2009},
  ];

  const renderMovies = moives.map(movie => {
    return (
      <div className='movie' key={movie.title}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
    </div>
    );
  });
  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  );
}

export default App;
