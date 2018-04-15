import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule],
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
