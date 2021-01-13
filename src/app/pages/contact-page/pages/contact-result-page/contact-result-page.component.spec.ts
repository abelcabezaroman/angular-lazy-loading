import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactResultPageComponent } from './contact-result-page.component';

describe('ContactResultPageComponent', () => {
  let component: ContactResultPageComponent;
  let fixture: ComponentFixture<ContactResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
