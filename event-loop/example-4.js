const nt_recursive = () => process.nextTick(nt_recursive);
nt_recursive(); // setInterval will never run

const si_recurisve = () => setImmediate(si_recurisve);
si_recurisve(); // setInterval will run

setInterval(() => console.log('hi'), 10);