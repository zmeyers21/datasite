import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisteredUser } from 'src/app/core/models/registered-user.model';
import { RegisteredUserComponent } from './registered-user.component';

describe('RegisteredUserComponent', () => {
  let component: RegisteredUserComponent;
  let fixture: ComponentFixture<RegisteredUserComponent>;
  
  const mockUser: RegisteredUser = {
    id: '1',
    firstName: 'Test User',
    lastName: '1',
    city: 'Test City',
    state: 'MN',
    zipCode: '12345',
    country: 'USA',
    company: 'Datasite',
    organizationType: 'Test Type',
    phone: '763.867.5309',
    disclaimerAccepted: true,
    languageCode: 'en'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredUserComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(RegisteredUserComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    expect(component).toBeTruthy();
  });

  it('should call details method', () => {
    fixture = TestBed.createComponent(RegisteredUserComponent);
    component = fixture.componentInstance;
    spyOn(component.userService, 'changeUserContext');
    spyOn(component.userService, 'changeDetailsId');
    component.details('1');
  });
});
