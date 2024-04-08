import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThingsTDPage } from './things-td.page';

describe('ThingsTDPage', () => {
  let component: ThingsTDPage;
  let fixture: ComponentFixture<ThingsTDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThingsTDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
