const fs = require('fs');
const file = fs.createWriteStream('./data.file');
const size = 1e7;
for(let i=0; i<= size; i++) {
    file.write(`${Math.random() * 100}\n`);
}
file.end();
