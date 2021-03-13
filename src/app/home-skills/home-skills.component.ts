import { PortfolioService } from './../portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss']
})
export class HomeSkillsComponent implements OnInit {
  languages: { image: string; text: string; }[];
  frameworks: { image: string; text: string; }[];
  tools: { image: string; text: string; }[];
  constructor(private portService: PortfolioService) { }

  ngOnInit(): void {
    this.languages = this.portService.languages;
    this.frameworks = this.portService.frameworks;
    this.tools = this.portService.tools;
  }

}
