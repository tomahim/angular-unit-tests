var gulp = require('gulp'),
  connect = require('gulp-connect'), //
karmaServer = require('karma').Server;

var yeoman = {
	tests: 'tests/',
};;
 
gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 9000
  });
});

gulp.task('test', function(done) {
	new karmaServer({
		configFile: __dirname + "/" + yeoman.tests + '/karma-conf.js'
	}, done).start();
});
 
gulp.task('default', ['server']);