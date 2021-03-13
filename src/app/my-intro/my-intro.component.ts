import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-intro',
  templateUrl: './my-intro.component.html',
  styleUrls: ['./my-intro.component.scss']
})
export class MyIntroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToResumeBuilder() {
    window.open('https://blitz-builder.herokuapp.com/template/goku/view?isSample=true', '_blank');
  }

  routeToContact() {
    this.router.navigate(['/contact']);
  }

}
