import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

// reducers
import { reducers, metaReducers } from './app.reducer';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterEffects } from './_core/router.effects';
import { CoreModule } from './_core/core.module';
import { AmadeusModule } from './amadeus/amadeus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,

    LayoutModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
