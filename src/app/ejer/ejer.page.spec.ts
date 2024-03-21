import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerPage } from './ejer.page';

describe('EjerPage', () => {
  let component: EjerPage;
  let fixture: ComponentFixture<EjerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EjerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
