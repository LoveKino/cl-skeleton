import 'babel-polyfill'; // this line must be first

import koa from 'koa';
import http from 'http';
import methods from './methods';
import path from 'path';

import gzip from 'koa-gzip';

import {
    logger, responseTime, access, error, parseBody, api, pushMid, Static, route
}
from 'cl-koa-midtools';

let listen = (server, port) => new Promise((r) => {
    server.listen(port, () => {
        r(server);
    });
});

let startApp = async (conf) => {
    let app = koa();
    let port = conf.server.port;
    let index = conf.web.index;
    let webRoot = conf.web.root;

    app.experimental = true;

    pushMid(app, [
        gzip(),

        responseTime,

        access(),

        error(),

        route('/', function* () {
            this.redirect(index);
        }),

        route(/\/static/, Static(
            webRoot, // root dir
            (ctx) => ctx.path.substring('/static'.length) // file path
        )),

        parseBody,

        route(/\/api/, api(methods))
    ]);

    let server = http.createServer(app.callback());

    await listen(server, port);

    logger.info('server start at port ' + server.address().port);

    return server;
};

/**
 * conf
 *     port
 */
module.exports = async (conf) => {
    try {
        return await startApp(conf);
    } catch (err) {
        logger.error(err);
    }
};