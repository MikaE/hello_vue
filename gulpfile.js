var gulp = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('build', function() {
  browserify({
	  'entries': ['./main.js'],
		'transform' : ['vueify']
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./'))
})

gulp.task('default', ['build'])
