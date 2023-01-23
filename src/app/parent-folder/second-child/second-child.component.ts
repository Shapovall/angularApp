import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TetsService } from 'src/app/services/test.service';

@Component({
  selector: 'second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
  providers: [TetsService]
})
export class SecondChildComponent implements OnInit {

  idUrl: number;
  car: string;
  msg: string;
  @Input() idFromChild: number;
  
  @Output() msgFromSecondChild: EventEmitter<string> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute, private testService: TetsService) { }

  ngOnInit(): void {
    // this.idUrl = this.activatedRoute.snapshot.params['id'];
    // this.car = this.activatedRoute.snapshot.params['car'];
    this.testService.setStr = 'Hello Country!';
    this.msg = this.testService.getStr;
  }

  newMessage(): void {
    const s = 'Hello, I`m a doctor.';
    this.msgFromSecondChild.next(s);
  }

}
