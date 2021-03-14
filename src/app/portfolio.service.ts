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
    { image: 'assets/postman.png', text: 'postman' },
    // { image: 'assets/chromeD.png', text: 'dev tools' },
    { image: 'assets/jira.png', text: 'jira' },
    { image: 'assets/eclipse.png', text: 'eclipse' }
  ];

  companyTech = {
    fis: {
      iconArray: [
        { image: 'assets/angular.png', text: 'angular' },
        { image: 'assets/js.png', text: 'javascript' },
        { image: 'assets/html5.png', text: 'html5' },
        { image: 'assets/css3.png', text: 'css3' },
        { image: 'assets/angularB.png', text: 'material' },
        { image: 'assets/vscode.png', text: 'vs code' },
        { image: 'assets/npm.png', text: 'npm' },
        { image: 'assets/git.png', text: 'git' },
        { image: 'assets/chromeD.png', text: 'dev tools' },
        { image: 'assets/bitbucket.png', text: 'bitbucket' },
        { image: 'assets/jira.png', text: 'jira' },
        { image: 'assets/vstudio.png', text: 'visual studio' },
        { image: 'assets/ts.svg', text: 'typescript' },
        { image: 'assets/postman.png', text: 'postman' }
      ],
      aboutProd: [
        'test',
        'test'
      ]
    },
    zycus: {
      iconArray: [
        { image: 'assets/angular.png', text: 'angular' },
        { image: 'assets/js.png', text: 'javascript' },
        { image: 'assets/html5.png', text: 'html5' },
        { image: 'assets/css3.png', text: 'css3' },
        { image: 'assets/node.png', text: 'node.js' },
        { image: 'assets/vscode.png', text: 'vs code' },
        { image: 'assets/npm.png', text: 'npm' },
        { image: 'assets/git.png', text: 'git' },
        { image: 'assets/chromeD.png', text: 'dev tools' },
        { image: 'assets/bitbucket.png', text: 'bitbucket' },
        { image: 'assets/jira.png', text: 'jira' },
        { image: 'assets/vstudio.png', text: 'visual studio' },
        { image: 'assets/express.png', text: 'expressJS' },
        { image: 'assets/bootstrap.png', text: 'bootstrap' },
        { image: 'assets/ts.svg', text: 'typescript' },
        { image: 'assets/postman.png', text: 'postman' }
      ],
      aboutProd: []
    },
    infySenior: {
      iconArray: [
        { image: 'assets/java.png', text: 'java' },
        { image: 'assets/eclipse.png', text: 'eclipse' },
        { image: 'assets/postman.png', text: 'postman' },
        { image: 'assets/vscode.png', text: 'vs code' },
        { image: 'assets/vstudio.png', text: 'visual studio' },
        { image: 'assets/cplus.png', text: 'c++' },
        { image: 'assets/python.png', text: 'python' },
        { image: 'assets/docker.png', text: 'docker' },
        { image: 'assets/kube.png', text: 'kubernetes' },
        { image: 'assets/npm.png', text: 'npm' },
        { image: 'assets/git.png', text: 'git' },
        { image: 'assets/chromeD.png', text: 'dev tools' },
        { image: 'assets/jira.png', text: 'jira' },
        { image: 'assets/bootstrap.png', text: 'bootstrap' },
        { image: 'assets/js.png', text: 'javascript' },
        { image: 'assets/html5.png', text: 'html5' },
        { image: 'assets/css3.png', text: 'css3' },
        { image: 'assets/ts.svg', text: 'typescript' },
        { image: 'assets/maven.png', text: 'maven' }
      ],
      aboutProd: []
    },
    infySystem: {
      iconArray: [
        { image: 'assets/vstudio.png', text: 'visual studio' },
        { image: 'assets/cplus.png', text: 'c++' },
        { image: 'assets/c.png', text: 'c' },
        { image: 'assets/wire.png', text: 'wireshark' },
        { image: 'assets/perf.png', text: 'perforce' },
        { image: 'assets/jira.png', text: 'jira' }
      ],
      aboutProd: []
    },
    infyTrainee: {
      iconArray: [],
      aboutProd: []
    },
    ttl: {
      iconArray: [],
      aboutProd: []
    },
  }


  constructor() { }
}
