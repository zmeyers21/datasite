import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UserDetailsComponent } from './user-details.component';
import { RegisteredUser } from 'src/app/core/models/registered-user.model';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

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
      imports: [HttpClientTestingModule],
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove ueser', fakeAsync(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    tick(1);
    spyOn(component.dataStore, 'removeRegisteredUser');
    spyOn(component.userService, 'changeUserContext');
    component.removeUser();
    tick(10);
    expect(component.dataStore.removeRegisteredUser).toHaveBeenCalledWith('1');
    expect(component.userService.changeUserContext).toHaveBeenCalled();
  }));
  
});
