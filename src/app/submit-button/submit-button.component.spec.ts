import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonComponent } from './submit-button.component';
import {IAppState} from '../app.interface';
import {provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';
import {submitData} from '../app.actions';
import {initialState} from '../app.reducer';

describe('SubmitButtonComponent', () => {
  let component: SubmitButtonComponent;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitButtonComponent ],
      providers: [
        provideMockStore({ initialState: { app: initialState } })
      ]
    })
    .compileComponents();

    component = TestBed.createComponent(SubmitButtonComponent).componentInstance;
    store = TestBed.inject(Store);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('When clicked', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch');
      component.onClick();
    });

    it('should begin the submission process', () => {
      expect(store.dispatch).toHaveBeenCalledWith(submitData());
    });
  });
});
