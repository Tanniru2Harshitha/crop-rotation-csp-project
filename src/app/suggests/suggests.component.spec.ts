import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestsComponent } from './suggests.component';

describe('SuggestsComponent', () => {
  let component: SuggestsComponent;
  let fixture: ComponentFixture<SuggestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestsComponent]
    });
    fixture = TestBed.createComponent(SuggestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
