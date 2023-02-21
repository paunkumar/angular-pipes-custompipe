import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutputComponent } from './in-output.component';

describe('InOutputComponent', () => {
  let component: InOutputComponent;
  let fixture: ComponentFixture<InOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
