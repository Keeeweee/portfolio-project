import {Component, Input, OnInit} from '@angular/core';
import {Job} from "./job.class";
import {AppSettings} from "../../app.settings";

@Component({
  selector: 'job-view',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  private appSettings = AppSettings;

  @Input() job: Job;
  constructor() { }

  ngOnInit() {
  }

}
