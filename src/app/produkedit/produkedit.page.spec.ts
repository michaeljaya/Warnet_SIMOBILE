import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukeditPage } from './produkedit.page';

describe('ProdukeditPage', () => {
  let component: ProdukeditPage;
  let fixture: ComponentFixture<ProdukeditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
