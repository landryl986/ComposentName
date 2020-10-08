import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  childs: Array<any> = [
    {id: 1, height: 200},
    {id: 2, height: 350}]

  constructor() { }

  ngOnInit(): void {
  }

}
