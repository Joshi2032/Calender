import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaCPage } from './prueba-c.page';

describe('PruebaCPage', () => {
  let component: PruebaCPage;
  let fixture: ComponentFixture<PruebaCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebaCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
