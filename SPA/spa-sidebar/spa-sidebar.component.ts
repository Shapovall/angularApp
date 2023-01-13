import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'spa-sidebar',
  templateUrl: './spa-sidebar.component.html',
  styleUrls: ['./spa-sidebar.component.scss']
})
export class SpaSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }

  goToRegister(): void {
    this.router.navigate(['register']);
  }

  goToDashboard(): void {
    this.router.navigate(['full-dashboard']);
  }

  goToParent(): void {
    this.router.navigate(['parent']);
  }

}
