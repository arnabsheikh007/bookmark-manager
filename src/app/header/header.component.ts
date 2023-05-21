import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() newFormStatus = new EventEmitter<{showForm:boolean}>();

  
  onClickNew(){
    this.newFormStatus.emit({
      showForm : true,
    });
  }
}
