import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  idFromUrl: number;
  fio: string;

  @Input() idFromParent: number;

  @Output() msgFromChild: EventEmitter<string> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idFromUrl = this.activatedRoute.snapshot.params['id'];
    this.fio = this.activatedRoute.snapshot.params['fio'];

    setTimeout(() => this.createMsg(), 5000);
  }

  createMsg(): void {

    const str = 'Blablabla from child';
    this.msgFromChild.next(str);
  }

}
