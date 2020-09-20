import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ISignupForm} from "./app.interface";
import {environment} from "../environments/environment";

@Injectable()
export class AppService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  public submitForm(form: ISignupForm) {
    return this.httpClient.post(environment.endpointUrl, form);
  }
}
