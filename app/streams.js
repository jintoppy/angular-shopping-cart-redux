import fs from 'fs';
import {emitter} from './messagebus';

export const readFile = () => {
    const readStream = fs.createReadStream('./trial.txt');
    readStream.setEncoding('UTF8');

    let data = '';

    readStream.on('data', (chunk) => {
        data += chunk;
    });

    readStream.on('end', () => {
        console.log('reading completed');
        emitter.emit('onReadComplete', data);
    });
    readStream.on('error', (err) => {
        console.log(err);
    });

};

export const writeFile = () => {
    const stringVal = 'This is a trial output';
    const writeStream = fs.createWriteStream('./output.txt');
    writeStream.write(stringVal, 'UTF8');
    writeStream.end();

    writeStream.on('finish', () => {
        console.log('write completed');
    });
};

export const readAndWriteFile = () => {
    const anotherReadStream = fs.createReadStream('./trial.txt');
    const anotherWriteStream = fs.createWriteStream('./output2.txt');
    anotherReadStream.pipe(anotherWriteStream);
};



