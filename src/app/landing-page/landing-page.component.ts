import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { availableSubjects } from '../../constants/landing-page-details';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  public pageLabels = availableSubjects;
  subjectListids: Array<any> = [...this.pageLabels.subjects];
  constructor(
    protected router: Router,
    protected localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    console.log(this.pageLabels);
    this.localStorage.clear("subject");
  }
  navigatetoCourseList(value: any) {
    this.localStorage.store("subject",value);
    this.router.navigateByUrl('courseslist');
  }
}
