import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {
  @Input() title = '';
  @Input() linkText = '';
  @Input() iconArray = [];
  @Input() routeURL = '';
  @Input() isExperience = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLink() {
    this.router.navigate([this.routeURL]);
  }

}
