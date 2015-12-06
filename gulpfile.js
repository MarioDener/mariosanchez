var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var nib = require('nib');

gulp.task('connect',function(){
	connect.server({
		root: 'www',
		livereload: true
	});
});

gulp.task('html',function(){
	gulp.src('www/*.html')
	.pipe(connect.reload());
});

gulp.task('jade',function(){
	gulp.src('sources/Components/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./www/'))
})

gulp.task('stylus',function(){
	gulp.src('./sources/css/*.styl')
	.pipe(stylus({use:nib(),compress:false}))
	.pipe(gulp.dest('./www/public/css'))
	.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(['sources/css/*styl'],['stylus']);
	gulp.watch(['www/*.html'],['html']);
	// gulp.watch(['sources/Components/*.jade'],['jade']);
});

gulp.task('default',['connect','watch']);