import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BulmaModule } from '../bulma/bulma.module';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SecureComponent } from './secure/secure.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, ReactiveFormsModule, CommonModule, BulmaModule],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    BulmaModule,
    NavbarComponent,
    SecureComponent
  ],
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
