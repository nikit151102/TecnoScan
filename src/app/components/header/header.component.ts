import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  navigateTo(url: string): void {
    setTimeout(() => {
        const element = document.getElementById(url);
        console.log("element")
        if (element) {
          console.log("element", element)
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100); // Задержка в 100 миллисекунд
}

}
