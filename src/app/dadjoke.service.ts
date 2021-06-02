import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DadjokeService {
  constructor(private http: HttpClient) {}

  search() {
    const headers = {
      Accept: 'application/json',
    };
    return this.http.get('https://icanhazdadjoke.com/', {
      headers,
    });
  }
}
