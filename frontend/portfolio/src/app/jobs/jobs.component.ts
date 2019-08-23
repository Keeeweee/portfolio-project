import { Component, OnInit } from '@angular/core';
import {Job} from "./job/job.class";
import {JobService} from "../services/job/job.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.getJobs()
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

}
