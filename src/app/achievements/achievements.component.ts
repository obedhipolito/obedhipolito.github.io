import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let achievements = {
      fecha : "2022",
      certificacion : "curso javascrip",
      estado : "finalizado",
    };
    this.achievements.push(achievements)
  }
}
