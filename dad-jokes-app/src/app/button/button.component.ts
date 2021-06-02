import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter();
  @Input() materialButtonType = '';
  @Input() color = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.materialButtonType);
  }

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
