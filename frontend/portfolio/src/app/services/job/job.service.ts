import {Injectable} from '@angular/core';
import {Job} from "../../jobs/job/job.class";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {AppSettings} from "../../app.settings";


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = AppSettings.jobsApiUrl + '/jobs';

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl).pipe(catchError(this.handleError<Job[]>('getJobs', [])));
  }

  getJob(id: number): Observable<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get<Job>(url).pipe(catchError(this.handleError<Job>(`getjob id=${id}`)))
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
