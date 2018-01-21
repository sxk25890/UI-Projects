import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndercomponentComponent } from './undercomponent.component';

describe('UndercomponentComponent', () => {
  let component: UndercomponentComponent;
  let fixture: ComponentFixture<UndercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
