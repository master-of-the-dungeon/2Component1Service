import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-input-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {
  @Input() name = '';
  @Output() clicked = new EventEmitter<void>();

  onButtonClick() {
    this.clicked.emit();
  }
}
