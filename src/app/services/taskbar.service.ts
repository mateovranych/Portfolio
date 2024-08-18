import { Injectable } from '@angular/core';

interface App {
  name: string;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskbarService {  
  apps: App[] = [];


  constructor() { }    

  openApp(appName: string) {
    const existingApp = this.apps.find(app => app.name === appName);
    if (existingApp) {
      existingApp.isOpen = true;
    } else {
      this.apps.push({ name: appName, isOpen: true });
    }
  }

  closeApp(appName: string) {
    const app = this.apps.find(app => app.name === appName);
    if (app) {
      app.isOpen = false;
    }
  }

}
