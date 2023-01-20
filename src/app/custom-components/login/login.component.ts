import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

interface IStudent {
  fio: string;
  age: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  toggle = false;
  str = "Heelo world!!!"

  hideAndShow = false;
  message = "I'm here!!!"

  changeBackground = false;

  students: IStudent[] = [
    {
      fio: 'Ivanov',
      age: 25
    },
    {
      fio: 'Petrov',
      age: 20
    },
    {
      fio: 'Sidorov',
      age: 15
    }
  ];

  person: string = this.students[1].fio;


  constructor() { }

  ngOnInit(): void {
    // this.hideAnimatedDiv()
    
    setTimeout(() => this.showDiv(), 5000);
    setTimeout(() => this.hideDiv(), 10000);
  }

  // hideAnimatedDiv() {
  //   let animatedDiv = document.getElementById('scroll-animation');
  //   animatedDiv.style.display = 'block';
  //   setTimeout(() => {
  //     console.log('hide');
  //     animatedDiv.style.display = 'none';
  //   }, 3000);
  // }

  toggleDiv(): void {
    this.toggle = !this.toggle;
  }

  checkDiv(): void {
    this.changeBackground = !this.changeBackground;
  }

  hideDiv(): void {
    this.hideAndShow = this.hideAndShow;
  }

  showDiv(): void {
    this.hideAndShow = !this.hideAndShow;
  }
}
