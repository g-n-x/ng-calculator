import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public problem = "";
  constructor() { }

  ngOnInit(): void {
  }

  btnClick(value: any) {
    this.problem += value;
  }

  calculate() {
    let result = eval(this.problem);
    if(result != undefined) {
      this.problem = result;
    } else {
      this.problem = "Error";
    }
  }

  clear() {
    this.problem = "";
  }

}
