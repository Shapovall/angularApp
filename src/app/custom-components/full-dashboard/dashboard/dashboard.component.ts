import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  arr: Number[] = [1, 2, 3, 4, 5];
  str: String = "Hello world!!!";
  valueFromActiveChart: number;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  handleValue(value: number): void {
    this.valueFromActiveChart = value;
  }

}
