const MovieModel = require('../model/movie');

exports.getAll = function () {
  return MovieModel.find({}).exec();
};

exports.create = function (movie) {
  console.log(movie);
  return new MovieModel(movie).save();
};
