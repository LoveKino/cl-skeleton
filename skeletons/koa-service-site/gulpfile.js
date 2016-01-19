var gulp = require('gulp');
var Spawner = require('cl-spawner');

var spawner = Spawner();

gulp.task('init', function () {
    var ts = [
        spawner.spawn('npm', ['i'], {
            stdio: 'inherit',
            cwd: __dirname + '/server'
        }),

        spawner.spawn('npm', ['i'], {
            stdio: 'inherit',
            cwd: __dirname + '/web'
        })
    ];
    return Promise.all(ts);
});

gulp.task('default', function () {
    var ts = [
        spawner.spawn('./node_modules/.bin/gulp', [], {
            stdio: 'inherit',
            cwd: __dirname + '/server'
        }),

        spawner.spawn('./node_modules/.bin/gulp', [], {
            stdio: 'inherit',
            cwd: __dirname + '/web'
        })
    ];

    return Promise.all(ts);
});

gulp.task('runProduction', function () {
    return spawner.spawn('./node_modules/.bin/pm2', ['startOrRestart', 'config/pm2.json'], {
        stdio: 'inherit',
        cwd: __dirname
    });
});