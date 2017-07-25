import { Injectable } from '@angular/core';



@Injectable()
export class RandomService {
  getRandomInt(min: number, max: number, cur: number): number {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    if (n === cur) {
      if (n < max) {
        n++;
      } else if (n > min) {
        n--;
      } else {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
    return n;
  }
}
