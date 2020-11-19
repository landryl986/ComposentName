import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../../../login/Services/service-authentification.service';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {


  constructor(private route: Router, private service: ServiceAuthentificationService) { }

  ngOnInit(): void {
  }

  disconect(): void{
    this.service.disconect();
  }

}
