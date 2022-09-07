import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroInfoTabComponent } from './miembro-info-tab.component';

describe('MiembroInfoTabComponent', () => {
  let component: MiembroInfoTabComponent;
  let fixture: ComponentFixture<MiembroInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembroInfoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembroInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
