import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  testUrl = "http://localhost:8080/get";

  constructor(private http: HttpClient) { }

  getTest(title: string): Observable<{"title":string, "sections": []}> {
    console.log("getTest()");
    const params = new HttpParams()
      .set("title", title);
    return this.http.get<{"title":string, "sections": []}>(this.testUrl, {params});
  }
}
