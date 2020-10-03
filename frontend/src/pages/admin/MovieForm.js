import React, { useState } from 'react';
import * as firebase from 'firebase';
import { createMovie } from 'services/movie';
import { useHistory } from 'react-router-dom';

function MovieForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [progress, setProgress] = useState('');
  const history = useHistory();

  function submit(event) {
    event.preventDefault();

    // Creo la referencia del archivo en Firebase y la sube directamente
    const ref = firebase.storage().ref(picture.name);
    const task = ref.put(picture);

    task.on(
      'state_changed',
      function progress(info) {
        const percentage = (info.bytesTransferred / info.totalBytes) * 100;
        setProgress(percentage);
      },
      function error(info) {
        console.log(info);
      },
      function done() {
        ref
          .getDownloadURL()
          .then(function (url) {
            return createMovie({
              title,
              description,
              picture: url,
            });
          })
          .then(function (movie) {
            alert('Película creada!');
            history.push('/');
          });
      }
    );
  }

  return (
    <div class="container">
      <form onSubmit={submit}>
        <h1>Create a Movie</h1>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="picture">Picture</label>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="picture"
                onChange={(e) => setPicture(e.target.files[0])}
              />
              <label class="custom-file-label" for="picture">
                {picture.name || 'Choose file'}
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {progress > 0 ? (
        <div className="mt-4">
          <label>Uploading picture:</label>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MovieForm;
