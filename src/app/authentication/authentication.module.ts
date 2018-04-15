import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule, LayoutModule],
  declarations: [SignInComponent],
  exports: [SignInComponent]
})
export class AuthenticationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: []
    };
  }
}
