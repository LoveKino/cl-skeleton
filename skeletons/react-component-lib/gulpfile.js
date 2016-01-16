var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var Spawner = require('cl-spawner');

var spawner = Spawner();

var spawn = (cmd, args) => spawner.spawn(cmd, args, {
    stdio: 'inherit',
    cwd: __dirname
})

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

gulp.task('packTest', function() {
    var p1 = spawn('./node_modules/.bin/webpack', ['--config', './test/base/webpack.config.js']);
    return Promise.all([ p1 ]);
});