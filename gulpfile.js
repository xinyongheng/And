(function() {
  var base, clean, concat, gulp, jshint, rename, rev, runSequence, uglify, watch;

  gulp = require("gulp");

  runSequence = require("run-sequence");

  uglify = require("gulp-uglify");

  jshint = require("gulp-jshint");

  concat = require("gulp-concat");

  rename = require("gulp-rename");

  watch = require("gulp-watch");

  clean = require("gulp-clean");

  rev = require("gulp-rev");

  base = "public";

}).call(this);
