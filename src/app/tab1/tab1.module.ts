import { ComponentsModule } from './../components/components.module';
import { PipesModule } from './../pipes/pipes.module';
import { ImagenPipePipe } from './../pipes/imagen-pipe.pipe';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    PipesModule,
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
