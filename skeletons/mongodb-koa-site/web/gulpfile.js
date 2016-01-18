var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var Spawner = require('cl-spawner');

var spawner = Spawner();
// use this spawn instead of origin spawn
var spawn = function(cmd, params) {
    return spawner.spawn(cmd, params, {
        stdio: 'inherit',
        cwd: __dirname
    });
};

gulp.task('default', ['start']);

// watch to restart
gulp.watch([
    'src/**/*'
], ['restart']);

gulp.task('start', function(cb) {
    runSequence('stop', 'init', 'clean', 'build', cb);
});

gulp.task('restart', function(cb) {
    runSequence('stop', 'clean', 'build', cb);
});

gulp.task('build', ['moveWeb', 'webpack']);

gulp.task('moveWeb', function() {
    return gulp.src(['src/**/*',
            '!src/**/*.js'
        ])
        .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function() {
    return spawn('./node_modules/.bin/webpack');
});

gulp.task('init', function() {
    return spawn('npm', ['i']);
});

gulp.task('stop', function() {
    return spawner.killAll();
});

gulp.task('clean', function() {
    return del([
        'dist'
    ]);
});