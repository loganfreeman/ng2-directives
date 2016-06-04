import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from 'angular2/core';
import {CapitalFirstPipe} from './capital-first-letter';
@Component({
  selector: 'ng-sidemenu',
  directives: [],
  pipes: [CapitalFirstPipe],
  template: `
  <ul class="sidebar-nav">
      <li class="sidebar-brand" *ngFor="#category of categories">
        <button class="category" [attr.category]="category" (click)="onCategoryBtnClick(category)"><i class="fa fa-fw fa-caret-down" [ngClass]="getCaretClass(category)"></i>{{category | capitalFirstLetter}}</button>
        <button class="indent" *ngFor="#algorithm of data[category]" [attr.algorithm]="algorithm.label" [attr.category]="category" [ngClass]="getCategoryState(category)">{{algorithm.text}}</button>
      </li>
  </ul>
  `
})
export class SideMenuComponent implements OnInit {
  @Input() public data: { [category: string]: any[]};
  @Output() public selected:EventEmitter<any> = new EventEmitter();
  public element:ElementRef;
  public categories: string[] = [];
  public categoryStateMap: { [category: string]: boolean} = {};
  public constructor(element:ElementRef) {
    this.element = element;
  }
  public ngOnInit():any {
    this.categories = Object.keys(this.data);
    for(let category of this.categories) {
      this.categoryStateMap[category] = true;
    }
  }
  public onCategoryBtnClick(category: string): void {
    if (this.categoryStateMap[category]) {
      this.categoryStateMap[category] = false;
    } else {
      this.categoryStateMap[category] = true;
    }
  }
  public getCategoryState(category: string): any {
    return {
      collapse: this.categoryStateMap[category]
    };
  }
  public getCaretClass(category: string): any {
    return {
      'fa-rotate-270': this.categoryStateMap[category]
    };
  }
}
