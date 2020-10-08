import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {

  constructor() { }

  @Input() index: bigint;
  @Input() height: bigint;

  ngOnInit(): void {
  }

}
