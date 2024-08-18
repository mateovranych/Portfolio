import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { IconsComponent } from "./icons/icons.component";
import { TaskbarService } from '../services/taskbar.service';
import { WindowsComponent } from "./windows/windows.component";


@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule,
    TaskBarComponent,
    IconsComponent, WindowsComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  
  constructor(public taskbarservice:TaskbarService) {        
  }
  
  icons = [
    { name: 'Proyectos', img: 'assets/Folder.ico', x: 50, y: 50 },
    { name: 'Ayuda', img: 'assets/Help 3D.ico', x: 100, y: 50 },
    { name: 'MSN', img: 'assets/MSN.ico', x: 150, y: 50 },
    { name: 'Papelera de reciclaje', img: 'assets/Recycle Bin with paper.ico', x: 200, y: 50 }
  ];

  openApp(appName: string) {
    console.log('Abriendo aplicación:', appName);
    console.log(`Abriendo aplicación: ${appName}`);
    this.taskbarservice.openApp(appName);
  }

}
