import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Movies from 'pages/Movies';
import MovieForm from 'pages/admin/MovieForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/admin/movies/form">
          <MovieForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
