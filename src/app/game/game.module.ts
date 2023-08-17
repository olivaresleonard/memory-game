import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {GameComponent} from './game.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {CardStatusComponent} from './card-status/card-status.component';
import { MemoryComponent } from './memory/memory.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
];

@NgModule({
  declarations: [
    GameComponent,
    CardStatusComponent,
    MemoryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class GameModule {
}
