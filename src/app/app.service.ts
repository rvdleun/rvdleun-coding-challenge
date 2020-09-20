import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISignupForm} from './app.interface';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  public submitForm(form: ISignupForm): Observable<null> {
    return this.httpClient.post<null>(environment.endpointUrl, form);
  }
}
