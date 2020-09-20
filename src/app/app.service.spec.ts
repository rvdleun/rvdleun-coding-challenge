import {AppService} from './app.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ISignupForm} from './app.interface';
import {environment} from '../environments/environment';

describe('app > app.service.ts', () => {
  let httpMock: HttpTestingController;
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppService,
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AppService);
  });

  describe('When submitting a form', () => {
    const form: ISignupForm = {
      firstName: '1',
      lastName: '2',
      email: '3',
      password: '4',
    };

    beforeEach(() => {
      service.submitForm(form).subscribe();
    });

    it('should make a HTTP call to the right endpoint while passing the form', () => {
      const req = httpMock.expectOne(environment.endpointUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(form);
    });
  });
});
