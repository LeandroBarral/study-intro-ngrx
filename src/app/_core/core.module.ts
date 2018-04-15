import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmadeusModule } from '../amadeus/amadeus.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  exports: [HttpClientModule, AmadeusModule],
  declarations: []
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
