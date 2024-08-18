import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskbarService } from '../../services/taskbar.service';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './windows.component.html',
  styleUrl: './windows.component.scss'
})
export class WindowsComponent {
  constructor(public taskbarservice : TaskbarService){

  }
  @Input() appName: string = '';
  isOpen: boolean = true;

 

  closeApp() {
    this.taskbarservice.closeApp(this.appName);
  }

}
