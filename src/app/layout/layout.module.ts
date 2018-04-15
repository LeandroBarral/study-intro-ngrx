import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaModule } from '../bulma/bulma.module';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SecureComponent } from './secure/secure.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, CommonModule, BulmaModule],
  exports: [RouterModule, BulmaModule, NavbarComponent, SecureComponent],
  declarations: [NavbarComponent, SecureComponent]
})
export class LayoutModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
