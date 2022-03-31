import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilVewComponent } from './appareil-vew.component';

describe('AppareilVewComponent', () => {
  let component: AppareilVewComponent;
  let fixture: ComponentFixture<AppareilVewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilVewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilVewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
