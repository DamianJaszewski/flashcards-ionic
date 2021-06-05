# Got IT
> Aplikacja wieloplatformowa do nauki z fiszkami. Stworzona za pomocą frameworka Angular i Ionic. Aplikacja pobiera informacje z backendu Web Api C# z użyciem bazy danych sql i chmury Azure. 
## Spis treści
* [Informacje ogólne](#Informacje-ogólne)
* [Uruchamianie](#uruchamianie)
* [Dokumentacja](#dokumentacja)
* [Technologia](#Technologie)
* [Przykład kodu](#przykład-kodu)
* [Funkcjonalności](#Funkcjonalności)
* [Status](#status)
* [Kontakt](#kontakt)
## Informacje ogólne
Aplikacja jest przeznaczona dla osób chcących poszerzyć wiedzę z języka angielskiego, pojęć z zakresu IT w przyszłości zostanie rozbudowana o możliwość dodawania i edycji fiszek przez użytkownika.
## Uruchamianie
Uruchom aplikację za pomocą 'ionic serve', przejdź pod adres `http://localhost:8100` w swojej przeglądarce.
## Dokumentacja
![flashcard](./img/flashCard.png)
![menu](./img/menu.png)
## Technologie
* Angular 12.0.0.
## Przykład kodu
* Pobieranie danych:
```ruby
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
```
* Wyświetlanie fiszek:
```ruby

```
## Funkcjonalności
* Applikacja umożliwia wyświetlanie fiszek z bazy danych.
* Aplikacja umożliwia wybór kategorii.
* Aplikacja umożliwia wyświetlenie właściwej odpowiedzi.
* Aplikacja umożliwia ukrycie fiszki po naciśnięciu przycisku "Zapamiętane".
* Aplikacja wyświetla kolejną fiszkę po naciśnięciu przycisku "Na później".
* wyswietlenie pogody dla wprowadzonego miasta
## Kontakt
Aplikację stworzyli:
Damian Jaszewski @damianjaszewski@gmail.com
Bartosz Twardziak
Damian Hinc
