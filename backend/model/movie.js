const { Schema, model } = require('mongoose');

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { collections: 'movies', timestamps: true }
);

module.exports = model('movie', MovieSchema);
