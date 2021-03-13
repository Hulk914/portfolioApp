import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardLayoutComponent } from './contact-card-layout.component';

describe('ContactCardLayoutComponent', () => {
  let component: ContactCardLayoutComponent;
  let fixture: ComponentFixture<ContactCardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
