import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptationComponent } from './adaptation.component';

describe('AdaptationComponent', () => {
  let component: AdaptationComponent;
  let fixture: ComponentFixture<AdaptationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdaptationComponent]
    });
    fixture = TestBed.createComponent(AdaptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
