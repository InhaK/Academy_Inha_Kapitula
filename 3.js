Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
]).then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
});
