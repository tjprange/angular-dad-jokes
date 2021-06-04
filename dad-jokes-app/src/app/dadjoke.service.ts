import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface DadJokeRespose {
  id: number;
  joke: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class DadjokeService {
  constructor(private http: HttpClient) {}

  search() {
    const headers = {
      Accept: 'application/json',
    };
    return this.http.get<DadJokeRespose>('https://icanhazdadjoke.com/', {
      headers,
    });
  }
}
