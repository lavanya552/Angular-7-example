import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dept-list',
  template: `
    <h3>
      Department list
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    <ul>

  `,
  styles: []
})
export class DeptListComponent implements OnInit {
  departments=[
    {"id": 1,"name":" Testing"},
    {"id": 2,"name":" Development"},
    {"id": 3,"name":" Marketing"},
    {"id": 4,"name":" IT"},
    {"id": 5,"name":" Administration"}
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }

}
