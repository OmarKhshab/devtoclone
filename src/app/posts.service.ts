import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  public posts:any;
  public post$: Observable<any>;
  constructor(private http : HttpClient) { }
  public getPost() : Observable<any>{
    return this.http.get<any>(`https://dev.to/api/articles`).pipe(
      catchError(this.handleError))
  };
  };
