import plainhttp from 'cl-interflow/lib/plainhttp/ajaxCaller';

let { caller } = plainhttp({
    processor: plainhttp.processors.rc
});

caller({
    apiName: 'add',
    ins: [1, 2]
}).then(res => {
    document.write(res);
});