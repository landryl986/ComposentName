import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character/Services/character.service';
import {ICharacter} from './Interfaces/ICharacter';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Array<ICharacter>;
  character = {} as ICharacter;
  id: number

  // tslint:disable-next-line:variable-name
  constructor(private _characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.onGetCharacters();
  }
  onGetCharacters(): void{
    this._characterService.GetAllCharacters().subscribe(
      data =>
      {
        if (data){
          this.characters = data;
        }
      },
      error =>
      { }
    );

  }
  CreateCharacter(): void{
    this._characterService.AddCharacter(this.character).subscribe(
      data =>
      {
        if (data){
          this.onGetCharacters();
        }
      },
      error =>
      { }
    );
    this.character = {} as ICharacter;
  }
  UpdateCharacter(character: ICharacter): void{
    this._characterService.UpdateCharacter(character).subscribe(() => this.onGetCharacters());
  }
  delCharacter(character: ICharacter): void{
    this._characterService.DelCharacter(character.Id).subscribe(() => this.onGetCharacters());
  }

}
