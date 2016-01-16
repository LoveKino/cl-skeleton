var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');

gulp.task('default', ['clean', 'build']);

// watch to restart
gulp.watch([
    'src/**/*.js',
    'index.js'
], ['default']);

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'stage-0', 'react']
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('clean', function() {
    return del([
        'lib'
    ])
});