import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsService } from './colors.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Цвета, кнопки, 2 компонента';
  clickCount = 0;
  times: string[] = [];

  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.times$.subscribe(list => {
      this.times = list;
    });
  }

  onClicked() {
    this.clickCount++;
    this.colorsService.addTime();
  }

  get colors() {
    return this.colorsService.colors;
  }
}
