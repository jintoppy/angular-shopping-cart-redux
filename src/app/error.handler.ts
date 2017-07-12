import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler{
    constructor(){
        super(true);
    }
    handleError(msg){
        console.error('within error handler');
        console.info(msg);
        super.handleError(msg);
    }
}