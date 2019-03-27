import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionDetailComponent } from './protection-detail.component';

describe('ProtectionDetailComponent', () => {
  let component: ProtectionDetailComponent;
  let fixture: ComponentFixture<ProtectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
