import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteLogService {

  constructor() { }

  writeLog(text){
    console.log(text);
  }
}
