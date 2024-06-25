import { Component } from '@angular/core';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent {

  getTel(){
    window.open('tel:+87772516995')
  }
}
