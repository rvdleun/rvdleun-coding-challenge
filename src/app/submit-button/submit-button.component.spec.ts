import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonComponent } from './submit-button.component';
import {IAppState} from "../app.interface";
import {provideMockStore} from "@ngrx/store/testing";

describe('SubmitButtonComponent', () => {
  let component: SubmitButtonComponent;

  beforeEach(async () => {
    const initialState: IAppState = {
      form: null,
      isSubmitting: false,
      isValid: false,
    };

    await TestBed.configureTestingModule({
      declarations: [ SubmitButtonComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    component = TestBed.createComponent(SubmitButtonComponent).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
