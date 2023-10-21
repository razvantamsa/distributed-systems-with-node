const sleep_st = (t) => new Promise((r) => setTimeout(r, t));
const sleep_im = () => new Promise((r) => setTimeout(r));

(async () => {
    setImmediate(() => console.log(1));
    console.log(2);
    await sleep_st(0);
    setImmediate(() => console.log(3));
    console.log(4);
    await sleep_im();
    setImmediate(() => console.log(5));
    await 1;
    setImmediate(() => console.log(7));
    console.log(8);
})();

// correct:
2
1
4
3
8
5
7
