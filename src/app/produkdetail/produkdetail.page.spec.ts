import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukdetailPage } from './produkdetail.page';

describe('ProdukdetailPage', () => {
  let component: ProdukdetailPage;
  let fixture: ComponentFixture<ProdukdetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
