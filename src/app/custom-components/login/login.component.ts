import { Component, OnInit } from '@angular/core';

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

  }

  toggleDiv(): void {
    this.toggle = !this.toggle;
  }

}
