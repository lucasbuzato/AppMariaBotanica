import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperosPage } from './temperos.page';

describe('TemperosPage', () => {
  let component: TemperosPage;
  let fixture: ComponentFixture<TemperosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
