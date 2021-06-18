import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneloneComponent } from './panelone.component';

describe('PaneloneComponent', () => {
  let component: PaneloneComponent;
  let fixture: ComponentFixture<PaneloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
