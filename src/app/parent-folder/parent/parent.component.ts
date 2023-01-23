import { Component, OnInit } from '@angular/core';
import { TetsService } from 'src/app/services/test.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [TetsService]
})
export class ParentComponent implements OnInit {
  msg: string;
  constructor(private testService: TetsService) { }

  ngOnInit(): void {
    this.testService.setStr = 'Hello World!';  
    this.msg = this.testService.getStr;
  }
}
