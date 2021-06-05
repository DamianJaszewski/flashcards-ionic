import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';
import { IFlashcards } from '../flashcards';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage implements OnInit {

  FlashcardsAngular: IFlashcards[] = [{
    Id: null,
    Category: null,
    Question: null, 
    Answer: null, 
    Remembered: null
}];

  message = "";
  random = 0; 
  counter = 0;
  count = 0;
  
  constructor(private _flashcardsService: FlashcardsService){
  }

  ngOnInit(){
    
    console.log(history.state)
    this.message = history.state.name;
    console.log(this.message);
    this.message.toString();

    this._flashcardsService.getFlashcards()
      .subscribe(data => this.FlashcardsAngular = data);
    console.log(this.FlashcardsAngular);
  }

  getRandomInt() {
    do{ 
      this.random = Math.floor(Math.random() * this.FlashcardsAngular.length); 
    }
    while(!(this.FlashcardsAngular[this.random].Remembered=="no" && this.FlashcardsAngular[this.random].Category==this.message));
    return this.random;  
  }

  remember(){
    this.counter = 0;
    this.count++;

    for(var i = 0;i < this.FlashcardsAngular.length; i++){
      if(this.FlashcardsAngular[i].Category==this.message){
        this.counter++;
      }
    }

    if(this.count >= this.counter){
      var flashcard = <HTMLInputElement>document.getElementById("flashcard");
      flashcard.remove();
      var win = <HTMLInputElement>document.getElementById("end");
      win.style.visibility = "visible";
      var buttons = <HTMLInputElement>document.getElementById("buttons");
      buttons.style.visibility = "hidden";
    }else{
      var answer = <HTMLInputElement>document.getElementById("answer");
      answer.style.visibility = "hidden";
  
      var questionText = (<HTMLInputElement>document.getElementById("question")).innerText;
      var idText = (<HTMLInputElement>document.getElementById("id")).innerText;
      var answerText = <HTMLInputElement>document.getElementById("answer");
      var category = <HTMLInputElement>document.getElementById("category");
  
      //nadaj parametr remembered:yes;
      this.FlashcardsAngular[this.random].Remembered='yes';
  
      this.getRandomInt();
    }
  }

  nextQuestion(){
    console.log(this.FlashcardsAngular);
    var answer = <HTMLInputElement>document.getElementById("answer");
    answer.style.visibility = "hidden";

    this.getRandomInt();
  }

  showAnswer(){
    console.log(this.FlashcardsAngular);
    var answer = <HTMLInputElement>document.getElementById("answer");
    console.log(answer);
    answer.style.visibility = "visible";
  }

  // counter = 1;

  // remember2(){
  //   console.log(this.FlashcardsAngular);
      
  //   //schowaj odpowiedź
  //   var answer = <HTMLInputElement>document.getElementById("answer");
  //   answer.style.visibility = "hidden";

  //   // czytaj jaki element jest wyświetlany
  //   var questionText = <HTMLInputElement>document.getElementById("question");
  //   var question = questionText.innerText;
  //   console.log(question);
  //   console.log(questionText);
    
  //   var idText = <HTMLInputElement>document.getElementById("id");
  //   var id = idText.innerText;
  //   var answerText = <HTMLInputElement>document.getElementById("answer");
  //   var category = <HTMLInputElement>document.getElementById("category");


  //   //nadaj parametr remembered:yes;
  //   var idNum = parseInt(id);
  //   this.FlashcardsAngular[idNum-1].Remembered='yes';
  //   console.log(this.FlashcardsAngular[idNum-1].Remembered);
  //   console.log(this.FlashcardsAngular);
  //   //zaktualizuj stronę o nowe słowa

  //   //losuj element tablicy z remembered:'false'
  //   var random;

  //   if (this.counter < this.FlashcardsAngular.length){
  //     do{
  //       random = this.getRandomInt(0,this.FlashcardsAngular.length);
  //     }while(this.FlashcardsAngular[random].Remembered==="yes");

  //     console.log(random + "- wylosowana liczba");

  //     var Flashcardid = this.FlashcardsAngular[random].Id;
  //     id = Flashcardid.toString();
     

  //     this.counter++;
  //     console.log(this.counter + "- licznik");
  //   }
  //   else{
  //     var flashcard = <HTMLInputElement>document.getElementById("flashcard");
  //     flashcard.remove();
  //     var win = <HTMLInputElement>document.getElementById("end");
  //     win.style.visibility = "visible";
  //     var buttons = <HTMLInputElement>document.getElementById("buttons");
  //     buttons.style.visibility = "hidden";
  //   }

  // }

  // nextQuestion2(){
  // //schowaj odpowiedź
  // var answer = <HTMLInputElement>document.getElementById("answer");
  // answer.style.visibility = "hidden";

  // // czytaj jaki element jest wyświetlany
  // var questionText = <HTMLInputElement>document.getElementById("question");
  // var question = questionText.innerText;
  // var idText = <HTMLInputElement>document.getElementById("id");
  // var id = idText.innerText;
  // var answerText = <HTMLInputElement>document.getElementById("answer");
  // var category = <HTMLInputElement>document.getElementById("category");

  // //zaktualizuj stronę o nowe słowa

  // //losuj element tablicy z remembered:'false'
  // var random;

  // do{
    
  //   random = this.getRandomInt(0,this.FlashcardsAngular.length);
  //   console.log(this.FlashcardsAngular[random]);

  // }while(this.FlashcardsAngular[random].Remembered=="yes");

  // console.log(random + "- wylosowana liczba");

  // var Flashcardid = this.FlashcardsAngular[random].Id;
  // id = Flashcardid.toString();
  // idText.innerText=id;
  // questionText.innerText = this.FlashcardsAngular[random].Question;
  // answerText.innerText= this.FlashcardsAngular[random].Answer;
  // category.innerText = this.FlashcardsAngular[random].Category;
  // }
  
}

