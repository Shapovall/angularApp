import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() headerString: string;
  @Input() bodyString: string;
  @Input() set bodyArray(val: Product[] | Product){
    if (Array.isArray(val)){
      this.cardArray = val;
    }
    else if(val !== undefined){
      this.cardArray = [val];
    }
  };
  @Input() double = false;
  @Input() undouble = false;
  @Input() menu: Product[];
  
  @Input() set mainTitle(str: string){
    this.headerString = str;
  }

  cardArray: Product[];

  get getBodyString(){
    return this.bodyString;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardArray);
  }

}
