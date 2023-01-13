import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  id = 100;
  msg: string;
  constructor() { }

  ngOnInit(): void {
  }

  handleMsg(msg: string): void {
    this.msg = msg;
  }

}
