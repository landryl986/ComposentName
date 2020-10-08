import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {

  constructor() { }

  @Input() myIdPink: bigint;

  ngOnInit(): void {
  }

}
