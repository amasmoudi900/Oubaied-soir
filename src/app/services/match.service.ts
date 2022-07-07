import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // Adresse du serveur BackEND
  matchURL: string = "http://localhost:3000/matches";

  constructor(private httpClient: HttpClient) { }

  addMatch(obj) {
    return this.httpClient.post<{ message: any }>(this.matchURL, obj);
  }

  deleteMatch(id) {
    return this.httpClient.delete<{ message: any }>(`${this.matchURL}/${id}`);
  }

  updateMatch(newObj) {
    return this.httpClient.put<{ message: any }>(this.matchURL, newObj);
  }

  getAllMatches() {
    return this.httpClient.get<{ result: any }>(this.matchURL);
  }

  getMatchById(id) {
    return this.httpClient.get<{ result: any, message: any }>(`${this.matchURL}/${id}`)
  }

  searchMatchByTeamOne(obj) {
    return this.httpClient.post<{ result: any }>(this.matchURL + "/search", obj);
  }
}
