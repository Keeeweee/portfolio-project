import {Component, Input, OnInit} from '@angular/core';
import {Job} from "./job.class";

@Component({
  selector: 'job-view',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() job: Job;
  constructor() { }

  ngOnInit() {
  }

}
