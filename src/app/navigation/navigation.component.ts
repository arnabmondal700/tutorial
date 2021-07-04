import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { availableSubjects } from '../../constants/landing-page-details';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  dropdownFlag = false;
  public pageLabels = availableSubjects;
  public wasInside = false;
  subjectListids: Array<any> = [...this.pageLabels.subjects];
  constructor(
    protected router: Router,
    protected localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    console.log(this.pageLabels);
    this.localStorage.clear("subject");
  }

  dropdownClicked() {
    this.wasInside = true;
    this.dropdownFlag = !this.dropdownFlag
  }
  
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.dropdownFlag = false;
    }
    this.wasInside = false;
  }
  navigateToHome() {
    this.router.navigateByUrl('home');
  }

  navigatetoCourseList(value: any) {
    this.localStorage.store("subject", value);
    this.router.navigate(['courseslist']);
    this.dropdownClicked();
  }
}
