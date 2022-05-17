function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named() {
        console.log("Named function")
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('Anon')
}
