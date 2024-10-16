import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatempPage } from './paginatemp.page';

describe('PaginatempPage', () => {
  let component: PaginatempPage;
  let fixture: ComponentFixture<PaginatempPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
