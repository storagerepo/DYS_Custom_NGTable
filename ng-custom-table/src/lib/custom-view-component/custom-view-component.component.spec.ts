import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomViewComponentComponent } from './custom-view-component.component';

describe('CustomViewComponentComponent', () => {
  let component: CustomViewComponentComponent;
  let fixture: ComponentFixture<CustomViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
