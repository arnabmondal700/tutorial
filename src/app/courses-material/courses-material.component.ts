import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
// import { allSubjectCourseMap } from '../../constants/landing-page-details';
@Component({
  selector: 'app-courses-material',
  templateUrl: './courses-material.component.html',
  styleUrls: ['./courses-material.component.less']
})
export class CoursesMaterialComponent implements OnInit {
  public subjectCousces: any;
  constructor(private localStorage: LocalStorageService,
    protected router: Router) { }

  ngOnInit(): void {
    if (this.localStorage.retrieve("selectedMaterial") !== null) {
      this.subjectCousces = this.localStorage.retrieve("selectedMaterial");
    } else {
      this.router.navigateByUrl('home');
    }
    console.log(this.localStorage.retrieve("selectedMaterial"));
  }
  copyToClipBoard(index: number) {

  }
  calculateRow(item: string) {
    return (item.match(/\n/g) || []).length + 1;
  }
}
