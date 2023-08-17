import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loggedGuard} from "./guard/logged.guard";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {authGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [loggedGuard]
  },
  {
    path: 'memory-game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule),
    canActivate: [authGuard]
  },
  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
