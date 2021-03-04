import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICharacter} from '../../Interfaces/ICharacter';
import {CharacterService} from '../../Services/character.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  imagePath: string;

  // tslint:disable-next-line:variable-name
  constructor(private _characterService: CharacterService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  @Input() character: ICharacter;
  @Output() characterSelected = new EventEmitter<ICharacter>();
  @Output() characterSelectedUpdate = new EventEmitter<ICharacter>();

  uploadForm: FormGroup;

  ngOnInit(): void {
  }

  selectCharacter(): void {
    this.characterSelected.emit(this.character);
  }

  selectCharacterUpdate(): void {
    this.characterSelectedUpdate.emit(this.character);
  }

  onFileSelect(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit(): void {
    const SERVER_URL = 'https://localhost:5001/characters/' + this.character.Id.toString() + '/avatar';
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.httpClient.post<any>(SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
