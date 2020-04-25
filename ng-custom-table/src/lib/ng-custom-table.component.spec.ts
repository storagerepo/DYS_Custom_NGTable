import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomTableComponent } from './ng-custom-table.component';

describe('NgCustomTableComponent', () => {
  let component: NgCustomTableComponent;
  let fixture: ComponentFixture<NgCustomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCustomTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
