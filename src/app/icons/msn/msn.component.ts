import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-msn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msn.component.html',
  styleUrl: './msn.component.scss'
})
export class MsnComponent {
sendEmail() {
throw new Error('Method not implemented.');
}

}
