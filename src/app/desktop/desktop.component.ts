import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { IconsComponent } from "./icons/icons.component";


@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule, 
            TaskBarComponent, 
            IconsComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  
  icons = [
    { name: 'Proyectos', img: 'assets/Folder.ico', x: 50, y: 50 },
    { name: 'Ayuda', img: 'assets/Help 3D.ico', x: 100, y: 50 },
    { name: 'MSN', img: 'assets/MSN.ico', x: 150, y: 50 },
    { name: 'Papelera de reciclaje', img: 'assets/Recycle Bin with paper.ico', x: 200, y: 50 }
  ];

}
