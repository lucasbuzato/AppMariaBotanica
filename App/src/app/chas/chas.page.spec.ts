import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChasPage } from './chas.page';

describe('ChasPage', () => {
  let component: ChasPage;
  let fixture: ComponentFixture<ChasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
