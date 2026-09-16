import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TentangPage } from './tentang.page';

describe('TentangPage', () => {
  let component: TentangPage;
  let fixture: ComponentFixture<TentangPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
