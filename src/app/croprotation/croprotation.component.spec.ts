import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroprotationComponent } from './croprotation.component';

describe('CroprotationComponent', () => {
  let component: CroprotationComponent;
  let fixture: ComponentFixture<CroprotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CroprotationComponent]
    });
    fixture = TestBed.createComponent(CroprotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
