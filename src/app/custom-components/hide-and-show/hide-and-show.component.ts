import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';


@Component({
  selector: 'hide-and-show',
  templateUrl: './hide-and-show.component.html',
  styleUrls: ['./hide-and-show.component.scss']
})

export class HideAndShowComponent implements OnInit {

  show = true;
  arrProduct: Product[] = [
    {
      name: 'makaron',
      price: 200
    },
    {
      name: 'salat',
      price: 100
    },
    {
      name: 'water',
      price: 50
    },
    {
      name: 'cola',
      price: 350
    },
    {
      name: 'burger',
      price: 560
    },
  ]
  
  menu: Product[];
  count = 1;

  minute = 0;
  productNow: Product;

  double = false;
  undouble = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.show = !this.show, 50000);
    setInterval(() => {
      this.menu = this.arrProduct.slice(0, this.count);
      this.count++;
      if (this.count === 6) {
        this.count = 1;
      }
    }, 500);
    setInterval(() => {
      const d = new Date();
      this.minute = d.getMinutes();
      if (this.minute >= 0 && this.minute <= 20){
        this.productNow = this.arrProduct[2];
      }
      else if(this.minute > 20 && this.minute <= 40){
        this.productNow = this.arrProduct[0];
      }
      else {
        this.productNow = this.arrProduct[2];
      }
    }, 500);
  }

  changeSize(): void{
    this.double = !this.double;
    this.undouble = false;
  }

  changeSizeTwo(): void{
    this.undouble = !this.undouble;
    this.double = false;
  }
  // toggle(): void {
  //   console.log(this.show);
  //   this.show = !this.show;
  // }
}
