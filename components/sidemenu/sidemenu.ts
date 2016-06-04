import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from 'angular2/core';
import {CapitalFirstPipe} from './capital-first-letter';
import {NgClass} from 'angular2/common';
@Component({
  selector: 'ng-sidemenu',
  directives: [NgClass],
  pipes: [CapitalFirstPipe],
  styles: [`
  li {
    font-weight: 400;
    margin-top: 4px;
    display: inline;
  }
  .sidebar-nav {
      position: absolute;
      top: 0;
      width: 250px;
      margin: 0;
      padding: 0;
      list-style: none;
  }

  .sidebar-nav li {
      text-indent: 20px;
      line-height: 40px;
  }

  .sidebar-nav li a {
      display: block;
      text-decoration: none;
      color: #999999;
  }

  .sidebar-nav li a:hover {
      text-decoration: none;
      color: #fff;
      background: rgba(255,255,255,0.2);
  }

  .sidebar-nav li a:active,
  .sidebar-nav li a:focus {
      text-decoration: none;
  }

  .sidebar-nav > .sidebar-brand {
      height: 65px;
      font-size: 18px;
      line-height: 60px;
  }

  .sidebar-nav > .sidebar-brand a {
      color: #999999;
  }

  .sidebar-nav > .sidebar-brand a:hover {
      color: #fff;
      background: none;
  }

  .sidebar-nav button {
      display: block;
      width: 100%;
      text-align: left;
  }

  .sidebar-nav button.category {
      background: rgba(0, 0, 0, .10);
  }

  .sidebar-nav button.indent {
      padding-left: 28px;
  }

  .sidebar-nav button.collapse {
      display: none;
  }
  i {
    writing-mode: tb-rl;
  }
  .fa-rotate-270 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  `],
  template: `
<div class="sideemnu-wrapper">
  <ul class="sidebar-nav">
      <li class="sidebar-brand" *ngFor="#category of categories">
        <button class="category" [attr.category]="category" (click)="onCategoryBtnClick(category)"><i class="fa fa-fw fa-caret-down" [ngClass]="{'fa-rotate-270': !categoryStateMap[category]}">&#9658;</i>{{category | capitalFirstLetter}}</button>
        <button class="indent" *ngFor="#algorithm of data[category]" [attr.algorithm]="algorithm.label" [attr.category]="category" [ngClass]="{collapse: categoryStateMap[category]}">{{algorithm.text}}</button>
      </li>
  </ul>
</div>
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
}
