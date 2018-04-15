import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BulmaModule } from '../bulma/bulma.module';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SecureComponent } from './secure/secure.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidemenuComponent } from './partials/sidemenu/sidemenu.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './layout.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('layout', reducers),
    EffectsModule.forFeature([]),
    BulmaModule
  ],
  exports: [
    LayoutRoutingModule,
    ReactiveFormsModule,
    BulmaModule,
    NavbarComponent,
    SecureComponent,
    SidemenuComponent,
    HomeComponent,
    NotFoundComponent
  ],
  declarations: [NavbarComponent, SecureComponent, SidemenuComponent, HomeComponent, NotFoundComponent]
})
export class LayoutModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
