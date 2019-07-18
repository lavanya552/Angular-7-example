import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-emp-list',
  template: `
  <h3>
  Employee list
  </h3>
  <ul class="items">
  <li (click)="onSelect(employee)" *ngFor="let employee of employees">
    <span class="badge">{{employee.id}}</span>{{employee.name}}
  </li>
  </ul>
  `,
  styles: []
})
export class EmpListComponent implements OnInit {
  employees=[
    {"id":1,"name":" Lavanya"},
    {"id":2,"name":" Siva"},
    {"id":3,"name":" Ramya"},
    {"id":4,"name":" Ananya"},
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(employee){
    this.router.navigate(['/employees',employee.id]);
  }

}
