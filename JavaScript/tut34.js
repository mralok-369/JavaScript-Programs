console.log('Asynchronous Programming');

setTimeout(() => {
    for (let index = 0; index < 450; index++) {
        const element = index;
        console.log('This is index number' + index);
    }
}, 100)


console.log('Printing Done');