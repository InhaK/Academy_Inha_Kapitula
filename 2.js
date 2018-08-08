console.log(`1 step`);
console.log(`2 step`);

new Promise((resolve, reject) => setTimeout(() => {
    console.log(`3 step`);
    resolve();
}, 2000)).then(() => {
    console.log(`4 step`);
});
