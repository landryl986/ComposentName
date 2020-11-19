import { Injectable } from '@angular/core';
import { ICharacter } from '../Interfaces/ICharacter';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: ICharacter;
  route = 'https://localhost:5001/characters';

  constructor(private http: HttpClient) {
    this.character = {} as ICharacter;
  }

  GetAllCharacters(): Observable<Array<ICharacter>> {
    return this.http.get<[ICharacter]>(this.route);
  }
}