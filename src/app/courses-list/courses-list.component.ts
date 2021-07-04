import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { allSubjectCourseMap } from '../../constants/landing-page-details';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit,OnDestroy {

  public subjectCousces = allSubjectCourseMap;
  courcesList: Array<any> = [];
  courseListView: Array<any> = [];
  interval:any;
  constructor(
    protected router: Router,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log(this.localStorage.retrieve('subject'));
      if (this.localStorage.retrieve('subject') == null) {
        this.router.navigateByUrl('home');
      } else {
        this.courcesList = this.subjectCousces.subjects.filter((elem) => {
          return elem.label == this.localStorage.retrieve('subject');
        });
      }
      this.courseListView = [...this.courcesList[0].cousrseList];
    }, 300)

  }
  ngOnDestroy(): void{
    clearInterval(this.interval);
  }
  navigateToCourseMaterial(item:any){
    this.localStorage.store("selectedMaterial",item);
    this.router.navigateByUrl('CoursesMaterial');
  }

}
