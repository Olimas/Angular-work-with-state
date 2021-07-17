import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOneComponentComponent } from './example-one-component.component';

describe('ExampleOneComponentComponent', () => {
  let component: ExampleOneComponentComponent;
  let fixture: ComponentFixture<ExampleOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
