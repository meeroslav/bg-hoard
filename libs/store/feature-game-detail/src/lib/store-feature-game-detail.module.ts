import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GameDetailComponent },
    ]),
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
