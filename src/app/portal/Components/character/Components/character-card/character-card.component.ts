import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICharacter} from '../../Interfaces/ICharacter';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  constructor() { }

  @Input() character: ICharacter;
  @Output() characterSelected = new EventEmitter<ICharacter>();
  @Output() characterSelectedUpdate = new EventEmitter<ICharacter>();

  ngOnInit(): void {
  }

  selectCharacter(): void {
    this.characterSelected.emit(this.character);
  }

  selectCharacterUpdate(): void {
    this.characterSelectedUpdate.emit(this.character);
  }

}
