import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from '../custom-validator';
import { delay, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css'
})
export class EquationComponent {

  averageTime: number = 0;

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [
    CustomValidator.addition('answer', 'a', 'b')
  ]
  );

  ngOnInit() {
    //console.log(this.mathForm.status);
    //console.log(this.mathForm.statusChanges);
    // let numberSolved = 0;
    // const startTime = new Date();

    // this.mathForm.statusChanges.pipe(
    //   filter(res => res === 'VALID'),
    //   delay(200)).subscribe(() => {
    //     numberSolved++;
    //     this.averageTime = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
    //     this.mathForm.setValue({
    //       a: this.randomNumber(),
    //       b: this.randomNumber(),
    //       answer: ''
    //     });

    //   });

    this.mathForm.statusChanges.pipe(
      filter(res => res === 'VALID'),
      delay(200),
      scan((acc, value) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }

      }, { numberSolved: 0, startTime: new Date() }
      )
    ).subscribe(({ numberSolved, startTime }) => {
      this.averageTime = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      });
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}


