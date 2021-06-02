import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlashcardsPageModule } from './flashcards.module';
import { FlashcardsService } from '../flashcards.service';
import { IFlashcards } from '../flashcards';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage implements OnInit {

  url = 'http://flashcardsdj.azurewebsites.net/api/Flashcard/GetList';

  FlashcardsAngular: IFlashcards[] = [{
    Id: null,
    Category: null,
    Question: null, 
    Answer: null, 
    Remembered: null
}];

  message="";
  
  constructor(private _flashcardsService: FlashcardsService){
  }

  ngOnInit(){
    
    console.log(history.state)
    this.message = history.state;

    this._flashcardsService.getFlashcards()
      .subscribe(data => this.FlashcardsAngular = data);
    console.log(this.FlashcardsAngular);
  }

  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  remember(){
    this.pick();
  }

  showAnswer(){
    this.answer();
  }

  nextQuestion(){
    this.later();
  }

  x='1';
  counter = parseInt(this.x);


  pick(){
    console.log(this.FlashcardsAngular);
      
    //schowaj odpowiedź
    var answer = <HTMLInputElement>document.getElementById("answer");
    answer.style.visibility = "hidden";

    // czytaj jaki element jest wyświetlany
    var questionText = <HTMLInputElement>document.getElementById("question");
    var question = questionText.innerText;
    console.log(question);
    console.log(questionText);
    
    var idText = <HTMLInputElement>document.getElementById("id");
    var id = idText.innerText;
    var answerText = <HTMLInputElement>document.getElementById("answer");
    var category = <HTMLInputElement>document.getElementById("category");


    //nadaj parametr remembered:yes;
    var idNum = parseInt(id);
    this.FlashcardsAngular[idNum-1].Remembered='yes';
    console.log(this.FlashcardsAngular[idNum-1].Remembered);
    console.log(this.FlashcardsAngular);
    //zaktualizuj stronę o nowe słowa

    //losuj element tablicy z remembered:'false'
    var random;

    if (this.counter < this.FlashcardsAngular.length){
      do{
        random = this.getRandomInt(0,this.FlashcardsAngular.length);
      }while(this.FlashcardsAngular[random].Remembered==="yes");

      console.log(random + "- wylosowana liczba");

      var Flashcardid = this.FlashcardsAngular[random].Id;
      id = Flashcardid.toString();
      idText.innerText=id;
      questionText.innerText = this.FlashcardsAngular[random].Question;
      answerText.innerText= this.FlashcardsAngular[random].Answer;
      category.innerText = this.FlashcardsAngular[random].Category;

      this.counter++;
      console.log(this.counter + "- licznik");
    }
    else{
      var card = <HTMLInputElement>document.getElementById("card");
      card.remove();
      var win = <HTMLInputElement>document.getElementById("end");
      win.style.visibility = "visible";
      var buttons = <HTMLInputElement>document.getElementById("buttons");
      buttons.style.visibility = "hidden";
    }

  }

  later(){
  //schowaj odpowiedź
  var answer = <HTMLInputElement>document.getElementById("answer");
  answer.style.visibility = "hidden";

  // czytaj jaki element jest wyświetlany
  var questionText = <HTMLInputElement>document.getElementById("question");
  var question = questionText.innerText;
  var idText = <HTMLInputElement>document.getElementById("id");
  var id = idText.innerText;
  var answerText = <HTMLInputElement>document.getElementById("answer");
  var category = <HTMLInputElement>document.getElementById("category");

  

  //zaktualizuj stronę o nowe słowa

  //losuj element tablicy z remembered:'false'
  var random;

  do{
  random = this.getRandomInt(0,this.FlashcardsAngular.length);
  }while( (this.FlashcardsAngular[random].Remembered=="yes"));

  console.log(random + "- wylosowana liczba");

  var Flashcardid = this.FlashcardsAngular[random].Id;
  id = Flashcardid.toString();
  idText.innerText=id;
  questionText.innerText = this.FlashcardsAngular[random].Question;
  answerText.innerText= this.FlashcardsAngular[random].Answer;
  category.innerText = this.FlashcardsAngular[random].Category;

  }

  answer(){
  var answer = <HTMLInputElement>document.getElementById("answer");
  console.log(answer);
  answer.style.visibility = "visible";
  }
  
}

