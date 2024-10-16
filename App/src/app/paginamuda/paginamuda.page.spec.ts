import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginamudaPage } from './paginamuda.page';

describe('PaginamudaPage', () => {
  let component: PaginamudaPage;
  let fixture: ComponentFixture<PaginamudaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginamudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
