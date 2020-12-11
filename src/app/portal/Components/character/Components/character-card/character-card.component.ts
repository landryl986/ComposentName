import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICharacter} from '../../Interfaces/ICharacter';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  imagePath: string;

  constructor() { }

  @Input() character: ICharacter;
  @Output() characterSelected = new EventEmitter<ICharacter>();
  @Output() characterSelectedUpdate = new EventEmitter<ICharacter>();

  ngOnInit(): void {
    this.GetImagePath();
  }

  selectCharacter(): void {
    this.characterSelected.emit(this.character);
  }

  GetImagePath(): string {
    if (this.character.Strength >= 5){
      this.imagePath = 'assets/Images/strong.png';
    } else {
      this.imagePath = 'assets/Images/faible.jpg';
    }
    return this.imagePath;
  }

  selectCharacterUpdate(): void {
    this.characterSelectedUpdate.emit(this.character);
  }

}
