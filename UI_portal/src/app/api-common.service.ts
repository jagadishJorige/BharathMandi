import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {
  constructor(private http: HttpClient) { }

  getList(url: string): Observable<any[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(url, {headers: headers})
    .pipe(
      map((data: any)=> { return data }),
      catchError(err => { return throwError(()=> err) })
    );
  }
}
