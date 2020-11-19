import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character/Services/character.service';
import {ICharacter} from "./Interfaces/ICharacter";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Array<ICharacter>;

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
    this.onGetCharacters();
  }
  onGetCharacters(): void{
    this._characterService.GetAllCharacters().subscribe(
      data =>
      {
        if (data){
          debugger;
          this.characters = data;
        }
      },
      error =>
      { debugger;}
    );

  }

}
