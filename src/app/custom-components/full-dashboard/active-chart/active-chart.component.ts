import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'active-chart',
  templateUrl: './active-chart.component.html',
  styleUrls: ['./active-chart.component.scss']
})
export class ActiveChartComponent implements OnInit {
  @Input() myArray: Number[];
  @Output() changedValue: EventEmitter<number> = new EventEmitter()
  id: number = null;
  value: number = 1;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  double(): void {
    this.value *= 2;
    this.changedValue.next(this.value);
  }

}
