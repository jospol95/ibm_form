import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoTabComponent } from './contact-info-tab.component';

describe('ContactInfoTabComponent', () => {
  let component: ContactInfoTabComponent;
  let fixture: ComponentFixture<ContactInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
