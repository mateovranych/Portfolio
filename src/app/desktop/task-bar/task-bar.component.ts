import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TaskbarService } from '../../services/taskbar.service';


@Component({
  selector: 'app-task-bar',
  standalone: true,
  imports: [CommonModule],
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

  closeApp(appName: string) {
    this.Taskbarservice.closeApp(appName);
  }

  focusApp(appName: string) {
    this.Taskbarservice.openApp(appName); // Focaliza la ventana si se hace clic en la taskbar
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
}
