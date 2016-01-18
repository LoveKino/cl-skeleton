var path = require('path');

module.exports = {
    db: {
        hostname: '127.0.0.1',
        port: 27017,
        dbName: 'test'
    },
    server: {
        port: 3000
    },
    web: {
        index: '/static/page/index.html',
        root: path.join(__dirname, '../web/dist')
    }
};