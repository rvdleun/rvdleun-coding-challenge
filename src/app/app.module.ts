import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { StoreModule } from '@ngrx/store';
import {appReducer} from "./app.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "./app.effects";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import { SubmitResultComponent } from './submit-result/submit-result.component';

@NgModule({
  declarations: [
    AppComponent,

    SignupFormComponent,
    SubmitButtonComponent,
    SubmitResultComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
