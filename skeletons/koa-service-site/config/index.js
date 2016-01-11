var path = require('path');

module.exports = {
    server: {
        port: 3000
    },
    web: {
        index: '/static/page/index.html',
        root: path.join(__dirname, '../web/dist')
    }
};