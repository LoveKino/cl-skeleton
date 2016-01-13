import plainhttp from 'cl-interflow/lib/plainhttp/ajaxCaller';

let { caller } = plainhttp({
    processor: plainhttp.processors.rc
});

caller({
    options: {
        hostname: '127.0.0.1',
        port: 3000
    },
    apiName: 'add',
    ins: [1, 2]
}).then(res => {
    document.write(res);
});