'use strict'

const express = require('express')

const app = express()
const payload = initPayload()

const middlware =
    [
         (req, res, next) => {
            dataHandling();
            next();
        },
    ];
app.get('/', middlware, (req, res, next) => {
    res.send(payload());
});

app.listen(3000)

function dataHandling() {
    const arr = new Array(1000000);
    for (let i = 0; i < 1000000; i++) {
        arr[i] = Math.random();
    }
}

function initPayload (idSize = 20) {
    if (idSize < 6) throw Error('idSize must be greater than 5')
    return function payload () {
        let chars = ''
        let n = idSize
        const date = Date.now()
        const radix = 36
        n *= n * idSize
        while (n--) {
            const num = date + n
            chars += num.toString(radix).toUpperCase()
        }
        const id = chars.slice(-idSize)
        return { date, id }
    }
}
