import fs from 'fs/promises';

const buffer = fs.readFile('file-system.mjs');

console.info(buffer.toString());

fs.writeFile('temp.txt', 'Hello World');
