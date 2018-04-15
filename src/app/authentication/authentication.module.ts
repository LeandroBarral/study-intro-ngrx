import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutModule } from '../layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './authentication.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './authentication.effects';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    LayoutModule,
    StoreModule.forFeature('authentication', reducers),
    EffectsModule.forFeature([AuthenticationEffects])
  ],
  declarations: [SignInComponent],
  exports: [SignInComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [AuthenticationService]
    };
  }
}
