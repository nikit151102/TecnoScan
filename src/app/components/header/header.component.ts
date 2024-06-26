import { Component } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ButtonModule, MenuModule, ToastModule,TieredMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items = [
    {
      label: 'Главная',
      command: () => this.navigateTo('home')
    },
    {
      label: 'Информация',
      command: () => this.navigateTo('information')
    },
    {
      label: 'Контакты',
      command: () => this.navigateTo('contacts')
    }
  ];

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
