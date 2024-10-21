import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantapagPage } from './plantapag.page';

describe('PlantapagPage', () => {
  let component: PlantapagPage;
  let fixture: ComponentFixture<PlantapagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantapagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
