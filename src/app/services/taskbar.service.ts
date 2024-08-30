import { Injectable } from '@angular/core';

interface App {
  name: string;
  isOpen: boolean;
  icon: string; 

}

@Injectable({
  providedIn: 'root'
})
export class TaskbarService {  
  apps: App[] = [];

  constructor() { }    

  openApp(appName: string, appIcon: string) {
    const existingApp = this.apps.find(app => app.name === appName);
    if (existingApp) {
      existingApp.isOpen = true;
    } else {
      this.apps.push({ name: appName, isOpen: true, icon: appIcon });
    }
  }

  closeApp(appName: string) {
    const app = this.apps.find(app => app.name === appName);
    if (app) {
      app.isOpen = false;
    }
  }

}
