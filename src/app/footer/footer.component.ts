import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Necesario para ngClass y ngStyle
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Variables para ngClass
  isHighlighted = false;
  currentYear = new Date().getFullYear();

  // Objeto para ngStyle
  footerStyles = {
    'background-color': '#6c757d', // Color secundario de Bootstrap
    'color': 'white',
    'padding': '1rem 0',
    'margin-top': 'auto'
  };

  // Método para alternar el resaltado
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}