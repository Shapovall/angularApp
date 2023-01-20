import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {

  idUrl: number;
  car: string;

  @Input() idFromChild: number;
  
  @Output() msgFromSecondChild: EventEmitter<string> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUrl = this.activatedRoute.snapshot.params['id'];
    this.car = this.activatedRoute.snapshot.params['car'];
  }

  newMessage(): void {
    const s = 'Hello, I`m a doctor.';
    this.msgFromSecondChild.next(s);
  }

}
