import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExampleOneComponentComponent} from './example-one-component/example-one-component.component';
import {ExampleTwoComponentComponent} from './example-two-component/example-two-component.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import * as fromReducer from './store/example.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponentComponent,
    ExampleTwoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({example: fromReducer.reducer}, {}),
    NoopAnimationsModule,
    // EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // StoreRouterConnectingModule.forRoot(),
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
