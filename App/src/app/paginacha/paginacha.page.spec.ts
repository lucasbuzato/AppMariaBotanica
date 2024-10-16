import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginachaPage } from './paginacha.page';

describe('PaginachaPage', () => {
  let component: PaginachaPage;
  let fixture: ComponentFixture<PaginachaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginachaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
