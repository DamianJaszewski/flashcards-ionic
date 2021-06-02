import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlashcards } from './flashcards';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  url = 'http://flashcardsdj.azurewebsites.net/api/Flashcard/GetList';

  constructor(private http: HttpClient){
  }
  
  getFlashcards(): Observable<IFlashcards[]>{
    return this.http.get<IFlashcards[]>(this.url);
  }
  
  ngOnInit(): void {
  }
}
