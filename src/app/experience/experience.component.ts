import { PortfolioService } from './../portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  iconArray = [];
  detailsInfo = [];

  constructor(private portService: PortfolioService) { }

  ngOnInit(): void {
    this.iconArray = this.portService.companyTech.fis.iconArray;
    this.detailsInfo = this.portService.companyTech.fis.aboutProd;
  }

  showSelectedCompany(event) {
    switch (+event.target.value) {
        case 0: {
          this.iconArray = this.portService.companyTech.fis.iconArray;
          this.detailsInfo = this.portService.companyTech.fis.aboutProd;
          break;
        }
        case 1: {
          this.iconArray = this.portService.companyTech.zycus.iconArray;
          this.detailsInfo = this.portService.companyTech.zycus.aboutProd;
          break;
        }
        case 2: {
          this.iconArray = this.portService.companyTech.infySenior.iconArray;
          this.detailsInfo = this.portService.companyTech.infySenior.aboutProd;
          break;
        }
        case 3: {
          this.iconArray = this.portService.companyTech.infySystem.iconArray;
          this.detailsInfo = this.portService.companyTech.infySystem.aboutProd;
          break;
        }
        case 4: {
          this.iconArray = this.portService.companyTech.ttl.iconArray;
          this.detailsInfo = this.portService.companyTech.ttl.aboutProd;
          break;
        }
        default: {
          this.iconArray = this.portService.companyTech.fis.iconArray;
          this.detailsInfo = this.portService.companyTech.fis.aboutProd;
          break;
        }
    }
  }

}
