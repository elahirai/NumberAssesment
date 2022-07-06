import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberCrunchServiceService {

  constructor(private http: HttpClient) { }

  //Post Data
  postData(data: any) {
    return this.http.post<any>("https://localhost:7051/StatusCalculator", data)
      .pipe(
        map((
          res: any) => {
          return res;
        }))
  }
}

