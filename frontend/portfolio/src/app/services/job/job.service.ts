import { Injectable } from '@angular/core';
import {Job} from "../../jobs/job/job.class";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  job: Job = new Job(1, "url", "Company", new Date(2019,1, 1), new Date(2019, 2, 1), "Title", "Summary");

  jobs = [this.job, this.job, this.job];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}
