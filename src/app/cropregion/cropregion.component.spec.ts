import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropregionComponent } from './cropregion.component';

describe('CropregionComponent', () => {
  let component: CropregionComponent;
  let fixture: ComponentFixture<CropregionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropregionComponent]
    });
    fixture = TestBed.createComponent(CropregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
