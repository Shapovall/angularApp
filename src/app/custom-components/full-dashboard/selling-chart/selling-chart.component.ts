import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'selling-chart',
  templateUrl: './selling-chart.component.html',
  styleUrls: ['./selling-chart.component.scss']
})
export class SellingChartComponent implements OnInit {
  @Input() myStr: String;
  id: number = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
