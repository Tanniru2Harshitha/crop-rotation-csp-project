import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenenfitsComponent } from './benenfits.component';

describe('BenenfitsComponent', () => {
  let component: BenenfitsComponent;
  let fixture: ComponentFixture<BenenfitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenenfitsComponent]
    });
    fixture = TestBed.createComponent(BenenfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
