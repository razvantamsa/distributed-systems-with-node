// Antipattern
function foo(count, callback) {
    if(count <= 0) {
        return callback(new TypeError('count > 0'));
    }
    myAsyncOperation(count, callback);
}