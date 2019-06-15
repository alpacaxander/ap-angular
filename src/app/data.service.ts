import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  testUrl = "http://localhost:8080/getall";

  constructor(private http: HttpClient) { }

  getTest() {
    console.log("getTest()");
    return this.http.get(this.testUrl);
  }
}
