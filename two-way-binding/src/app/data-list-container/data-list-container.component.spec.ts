import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListContainerComponent } from './data-list-container.component';

describe('DataListContainerComponent', () => {
  let component: DataListContainerComponent;
  let fixture: ComponentFixture<DataListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
