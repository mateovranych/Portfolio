import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { IconsComponent } from "./icons/icons.component";
import { TaskbarService } from '../services/taskbar.service';
import { WindowsComponent } from "./windows/windows.component";
import { PapeleraComponent } from "../icons/papelera/papelera.component";
import { MsnComponent } from "../icons/msn/msn.component";
import { AyudaComponent } from "../icons/ayuda/ayuda.component";
import { ProyectsComponent } from "../icons/proyects/proyects.component";
import { ProfileComponent } from "../icons/profile/profile.component";



@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule,
    TaskBarComponent,
    IconsComponent,
    WindowsComponent,
    PapeleraComponent,
    MsnComponent,
    AyudaComponent,
    ProyectsComponent, 
    ProfileComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  
  constructor(public taskbarservice:TaskbarService) {        
  }
  
  icons = [
    { name: 'Profile', img: 'assets/agent.ico', x: 50, y: 50 },
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


 // Variables para arrastrar iconos
 isDraggingIcon = false;
 currentIconIndex: number | null = null;
 offsetX = 0;
 offsetY = 0;

 // Manejadores de eventos para los iconos
 onIconMouseDown(event: MouseEvent, index: number) {
   this.isDraggingIcon = true;
   this.currentIconIndex = index;
   this.offsetX = event.clientX - this.icons[index].x;
   this.offsetY = event.clientY - this.icons[index].y;
 }

 onIconMouseUp() {
   this.isDraggingIcon = false;
   this.currentIconIndex = null;
 }

 onIconMouseMove(event: MouseEvent) {
   if (this.isDraggingIcon && this.currentIconIndex !== null) {
     this.icons[this.currentIconIndex].x = event.clientX - this.offsetX;
     this.icons[this.currentIconIndex].y = event.clientY - this.offsetY;
   }
 }

 // Variables para arrastrar ventanas (en caso de que quieras arrastrarlas)
 isDraggingWindow = false;
 currentWindowElement: HTMLElement | null = null;
 windowOffsetX = 0;
 windowOffsetY = 0;

 // Manejadores de eventos para las ventanas
 onWindowMouseDown(event: MouseEvent, element: HTMLElement) {
   this.isDraggingWindow = true;
   this.currentWindowElement = element;
   this.windowOffsetX = event.clientX - element.getBoundingClientRect().left;
   this.windowOffsetY = event.clientY - element.getBoundingClientRect().top;
 }

 onWindowMouseUp() {
   this.isDraggingWindow = false;
   this.currentWindowElement = null;
 }

 onWindowMouseMove(event: MouseEvent) {
   if (this.isDraggingWindow && this.currentWindowElement) {
     this.currentWindowElement.style.left = `${event.clientX - this.windowOffsetX}px`;
     this.currentWindowElement.style.top = `${event.clientY - this.windowOffsetY}px`;
   }
 }

}
