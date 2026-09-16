import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukPage } from './produk.page';

describe('ProdukPage', () => {
  let component: ProdukPage;
  let fixture: ComponentFixture<ProdukPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
