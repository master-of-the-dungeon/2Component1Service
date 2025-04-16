import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClicksComponent } from './button-clicks.component';

describe('ButtonClicksComponent', () => {
  let component: ButtonClicksComponent;
  let fixture: ComponentFixture<ButtonClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonClicksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
