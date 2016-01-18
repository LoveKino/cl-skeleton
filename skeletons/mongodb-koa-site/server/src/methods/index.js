module.exports = (ctx, apiName) => {
    return async () => {
        console.log('This is test function.');

        // let col = ctx.db.collection('test_koa');
        // let ret = await col.insertOne({test: true});
        // console.log(ret);
        
        return 'hello';
    }
};