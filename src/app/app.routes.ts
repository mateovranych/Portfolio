import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: ()=>
        import ('./desktop/desktop.routes').then((x)=> x.DESKTOP_ROUTES),
}];
