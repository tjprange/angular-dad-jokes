import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter();
  //@Input() materialButtonType = ''; // not working, not sure how to update the Material UI property on the component
  @Input() color?: string;
  @Input() label?: string;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.materialButtonType);
  }

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
