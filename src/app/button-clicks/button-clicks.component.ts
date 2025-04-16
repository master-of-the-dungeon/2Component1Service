import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-button-clicks',
  imports: [CommonModule, MatListModule],
  templateUrl: './button-clicks.component.html',
  styleUrls: ['./button-clicks.component.css']
})
export class ButtonClicksComponent {
  @Input() times: string[] = [];
  @Input() colors: string[] = [];
}
