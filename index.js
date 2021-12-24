class StamClass {
    constructor() {
        this.x = new Array(100).fill(1);
    }
}
function somethingQuiteNoticeable() {
    for (let i = 0; i < 10; i++) {
        arr.push(new StamClass());
    }
}
const arr = [];
setInterval(somethingQuiteNoticeable, 1000);
