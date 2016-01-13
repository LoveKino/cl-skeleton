module.exports = (ctx, apiName) => {
    return () => {
        console.log('This is test function.');
        return 'hello';
    }
};