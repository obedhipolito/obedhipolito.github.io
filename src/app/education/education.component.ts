import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let educacion = {
      fecha : "2019 -2022",
      carrera : "Ingerienria de software",
      universidad : "Universidad Veracruzana",
    };

    this.education.push(educacion)

  }
}
