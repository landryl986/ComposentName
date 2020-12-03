import { Injectable } from '@angular/core';
import { ICharacter } from '../Interfaces/ICharacter';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: ICharacter;
  id = 0;
  route = 'https://localhost:5001/characters';

  constructor(private http: HttpClient) {
    this.character = {} as ICharacter;
  }

  GetAllCharacters(): Observable<Array<ICharacter>> {
    return this.http.get<[ICharacter]>(this.route);
  }

  AddCharacter(newCharacter: ICharacter): Observable<[ICharacter]> {
    newCharacter.Id = Math.floor((Math.random() * 10000) + 1);
    return this.http.post<[ICharacter]>(this.route, newCharacter);
  }

  DelCharacter(id: number): Observable<[ICharacter]> {
    return this.http.delete<[ICharacter]>(this.route + '/' + id.toString());
  }

  UpdateCharacter(updatedCharacter: ICharacter): Observable<[ICharacter]>{
    return this.http.post<[ICharacter]>(this.route + '/' + updatedCharacter.Id.toString(), updatedCharacter);
  }
}
