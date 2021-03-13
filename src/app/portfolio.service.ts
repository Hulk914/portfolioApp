import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  languages = [
    { image: 'assets/js.png', text: 'javascript' },
    { image: 'assets/html5.png', text: 'html5' },
    { image: 'assets/css3.png', text: 'css3' },
    { image: 'assets/ts.svg', text: 'typescript' },
    { image: 'assets/java.png', text: 'java' },
    { image: 'assets/node.png', text: 'node.js' }
  ];

  frameworks = [
    { image: 'assets/angular.png', text: 'angular' },
    { image: 'assets/bootstrap.png', text: 'bootstrap' },
    { image: 'assets/react.png', text: 'react' },
    { image: 'assets/express.png', text: 'expressJS' },
    { image: 'assets/angularB.png', text: 'angular material' }
  ];

  tools = [
    { image: 'assets/vscode.png', text: 'vs code' },
    { image: 'assets/docker.png', text: 'docker' },
    { image: 'assets/npm.png', text: 'npm' },
    { image: 'assets/git.png', text: 'git' },
    { image: 'assets/chromeD.png', text: 'chrome dev tools' },
    { image: 'assets/jira.png', text: 'jira' },
    { image: 'assets/eclipse.png', text: 'eclipse' },
  ]


  constructor() { }
}
