import { Component, OnInit } from '@angular/core';
import {Job} from "./job.class";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  job: Job = new Job(1, "url", "Company", new Date(2019,1, 1), new Date(2019, 2, 1), "Title", "Summary");
  currentDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
