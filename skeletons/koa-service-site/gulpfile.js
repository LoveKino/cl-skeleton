var gulp = require('gulp');
var Spawner = require('cl-spawner');

var spawner = Spawner();

var serverModule = './server/node_modules/.bin/gulp'

gulp.task('default', function() {
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