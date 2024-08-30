import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TaskbarService } from '../../services/taskbar.service';
import { MsnComponent } from "../../icons/msn/msn.component";
import { PapeleraComponent } from "../../icons/papelera/papelera.component";
import { AyudaComponent } from "../../icons/ayuda/ayuda.component";
import { ProyectsComponent } from "../../icons/proyects/proyects.component";
import { ProfileComponent } from "../../icons/profile/profile.component";


@Component({
  selector: 'app-task-bar',
  standalone: true,
  imports: [CommonModule, MsnComponent, PapeleraComponent, AyudaComponent, ProyectsComponent, ProfileComponent],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss'
})
export class TaskBarComponent implements OnInit {
  constructor(public readonly Taskbarservice : TaskbarService){

  }
  currentTime: Date = new Date();
  isMenuOpen: boolean = false;


  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000); // Actualiza la hora cada minuto
  }

  updateTime() {
    this.currentTime = new Date();
  }

  closeApp(appName: string, appIcon: string) {
    this.Taskbarservice.closeApp(appName);
  }

  focusApp(appName: string, appIcon: string) {
    this.Taskbarservice.openApp(appName, appIcon); // Focaliza la ventana si se hace clic en la taskbar
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.start-button') && !target.closest('.start-menu')) {
      this.isMenuOpen = false;
    }
  }

  icons = [
    { name: 'Profile', img: 'assets/agent.ico', x: 50, y: 50 },
    { name: 'Proyectos', img: 'assets/Folder.ico', x: 50, y: 50 },
    { name: 'Ayuda', img: 'assets/Help 3D.ico', x: 100, y: 50 },
    { name: 'MSN', img: 'assets/MSN.ico', x: 150, y: 50 },
    { name: 'Papelera de reciclaje', img: 'assets/Recycle Bin with paper.ico', x: 200, y: 50 }
  ];

  openApp(appName: string, appIcon: string) {
    console.log('Abriendo aplicación:', appName);
    console.log(`Abriendo aplicación: ${appName}`);
    this.Taskbarservice.openApp(appName, appIcon);
  }
}
