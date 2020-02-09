import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { quest } from '../model/quizauestion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpService: HttpClient) { }

  getquestion(){
    return this.httpService.get('../../assets/data.json');
  }

}
