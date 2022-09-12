import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let languages = {
      idioma1 : "Español",
      idioma2 : "Ingles",
    };
    this.languages.push(languages)
  }

}
