import { Component } from '@angular/core';
import { DadjokeService } from './dadjoke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dadJoke: DadjokeService) {}
  randomDadJoke = '';

  getADadJoke = () => {
    this.dadJoke.search().subscribe((response: any) => {
      // console.log(response.joke);

      this.randomDadJoke = response.joke;
    });
  };
}
