import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanPage } from './pengaturan.page';

describe('PengaturanPage', () => {
  let component: PengaturanPage;
  let fixture: ComponentFixture<PengaturanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
