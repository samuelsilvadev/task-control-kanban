import { EmailPasswordCredentials } from './../types/email-password-credentials.interface';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should does signin', inject([AuthService], (service: AuthService, done: DoneFn) => {
    const data: EmailPasswordCredentials = {
      email: 'samuelsilva@gmail.com',
      password: '123456'
    };
    service.signInServer(data).subscribe(resp => {
      console.log(resp);
      done();
    });
  }));


});
