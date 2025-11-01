import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignals } from './test-signals';

describe('TestSignals', () => {
  let component: TestSignals;
  let fixture: ComponentFixture<TestSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
