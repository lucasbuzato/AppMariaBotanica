import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MudasPage } from './mudas.page';

describe('MudasPage', () => {
  let component: MudasPage;
  let fixture: ComponentFixture<MudasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MudasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
