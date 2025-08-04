import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private URL: string = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }

  getUsers(limit:number=30):Observable<any> {
    // return this.http.get(this.URLUsers);
    return this.http.get<any>(`${this.URL}?limit=${limit}`);
  }
}
