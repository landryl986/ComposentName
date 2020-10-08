import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grey',
  templateUrl: './grey.component.html',
  styleUrls: ['./grey.component.css']
})
export class GreyComponent implements OnInit {

  ids: Array<number> = [1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }




}
