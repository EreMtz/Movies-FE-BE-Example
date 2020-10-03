import React, { useEffect, useState } from 'react';

import Movie from 'components/Movie';
import { getMovies } from 'services/movie';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    getMovies().then(function (response) {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="card-columns">
      {movies.map(function (movie) {
        return (
          <Movie
            title={movie.title}
            description={movie.description}
            picture={movie.picture}
          />
        );
      })}
    </div>
  );
}

export default Movies;
