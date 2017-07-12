//import fs from 'fs';
import path from 'path';
import {readFile} from './streams';
import {emitter} from './messagebus';

emitter.on('onReadComplete', (d) => {
    console.log('inside main.js');
    console.log(d);
});
readFile();

// fs.readFile('./trial.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// const data = fs.readFileSync('./trial.txt');
// console.log(data.toString())


// fs.watchFile('./trial.txt', (err, fileDetails) => {
//     console.log('changed');
//     console.log(fileDetails);
// });