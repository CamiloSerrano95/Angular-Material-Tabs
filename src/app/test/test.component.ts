import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  url:string;
  constructor() { }

  ngOnInit(): void {
    this.url = "http://localhost:4200/crud";
  }

}
