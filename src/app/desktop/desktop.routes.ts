import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { WindowsComponent } from "./windows/windows.component";
import { DesktopComponent } from "./desktop.component";
import { TaskBarComponent } from "./task-bar/task-bar.component";
import { IconsComponent } from "./icons/icons.component";

export const DESKTOP_ROUTES: Routes = [
    
    {
        path:'',component: DesktopComponent
    },
    {
        path:'',component: WindowsComponent
    },
    {
        path:'',component: TaskBarComponent
    },
    {
        path:'',component: IconsComponent
    }

    
];