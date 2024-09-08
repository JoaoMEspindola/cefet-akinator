import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfigComponent } from './pages/config/config.component';
import { GameComponent } from './pages/game/game.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    
    {
        path: 'config',
        component:ConfigComponent
    },

    {
        path:'game',
        component:GameComponent
    }
];
