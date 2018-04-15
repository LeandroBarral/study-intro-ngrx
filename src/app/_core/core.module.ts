import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmadeusModule } from '../amadeus/amadeus.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticatedGuard } from './authenticated.guard';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationService } from '../authentication/authentication.service';
import { authenticationHttpInterceptorFactory } from './authentication.http-interceptor';

@NgModule({
  imports: [CommonModule, AuthenticationModule.forRoot()],
  exports: [HttpClientModule, AuthenticationModule],
  declarations: []
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthenticationService,
        AuthenticatedGuard,
        authenticationHttpInterceptorFactory
      ]
    };
  }
}
