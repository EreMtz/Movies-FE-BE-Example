export function createMovie(movie) {
  return fetch(`${process.env.REACT_APP_API_URL}/movies`, {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

export function getMovies() {
  return fetch(`${process.env.REACT_APP_API_URL}/movies`).then((response) =>
    response.json()
  );
}
