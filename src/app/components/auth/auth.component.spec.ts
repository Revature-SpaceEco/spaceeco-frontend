import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule ],
      declarations: [ AuthComponent ],
      providers:[AuthService,{provide: HttpClient}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
