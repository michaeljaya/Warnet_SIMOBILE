import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukformPage } from './produkform.page';

describe('ProdukformPage', () => {
  let component: ProdukformPage;
  let fixture: ComponentFixture<ProdukformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
