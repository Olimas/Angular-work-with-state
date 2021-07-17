import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleTwoComponentComponent} from './example-two-component.component';

describe('ExampleTwoComponentComponent', () => {
  let component: ExampleTwoComponentComponent;
  let fixture: ComponentFixture<ExampleTwoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTwoComponentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
