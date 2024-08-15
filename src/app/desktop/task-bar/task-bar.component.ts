import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss'
})
export class TaskBarComponent implements OnInit {
  currentTime: Date = new Date();
  isMenuOpen: boolean = false;


  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000); // Actualiza la hora cada minuto
  }

  updateTime() {
    this.currentTime = new Date();
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
