setImmediate(() => console.log(1));
console.log(2);
Promise.resolve().then(() => setTimeout(() => {
    setImmediate(() => console.log(3));
    console.log(4);
    Promise.resolve().then(() => setTimeout(() => {
        setImmediate(() => console.log(5));
        console.log(6);
        Promise.resolve().then(() => setTimeout(() => {
            setImmediate(() => console.log(7));
            console.log(8);
        }));
    }));
}));