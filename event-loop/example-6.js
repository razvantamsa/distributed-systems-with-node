function foo(count, callback) {
    if(count <=0 ) {
        return process.nextTick(() => callback(new TypeError('count > 0')));
    }
    myAsyncOperation(count, callback);
}