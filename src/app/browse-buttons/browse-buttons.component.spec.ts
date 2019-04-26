import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseButtonsComponent } from './browse-buttons.component';

describe('BrowseButtonsComponent', () => {
  let component: BrowseButtonsComponent;
  let fixture: ComponentFixture<BrowseButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
