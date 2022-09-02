import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha : "2021-2022",
      ubicacion : "Orizaba, Ver.",
      puesto: "Estudiante",
      empresa: "Uv",
      logros: [
        {descripcion: "desarrollar un lector de placas"},{descripcion: " desarrollar un reconocimiento de caracteres"}
      ]
    };
    let work2 = {
      fecha : "2020-2021",
      ubicacion : "Orizaba, Ver.",
      puesto: "Estudiante",
      empresa: "Uv",
      logros: [
        {descripcion: "utilizar herramienta MQTT"},{descripcion: " desarrollar emuladores"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }

}