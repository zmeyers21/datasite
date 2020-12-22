import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterOutletComponent } from './router-outlet.component';

@Component({ selector: 'drc-stub', template: ''})
class StubComponent {}

describe('RouterOutletComponent', () => {
  let component: RouterOutletComponent;
  let fixture: ComponentFixture<RouterOutletComponent>;
  let router: Router;

  const routes = [
    { path: 'stub', component: StubComponent},
    { path: 'response-lookup', component: StubComponent, data: { iframeId: 'xyz', tsUrl: 'abc'}},
    { path: 'student-history', component: StubComponent , data: {}},
  ];

  const activatedRoute = {
    firstChild: {
      snapshot: null
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes), HttpClientTestingModule ],
      declarations: [ RouterOutletComponent, StubComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
