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

@NgModule({
  declarations: [
    AppComponent,

    SignupFormComponent,
    SubmitButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
