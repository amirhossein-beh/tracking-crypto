import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoinsComponenetComponent } from './show-coins.component';

describe('ShowCoinsComponenetComponent', () => {
  let component: ShowCoinsComponenetComponent;
  let fixture: ComponentFixture<ShowCoinsComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCoinsComponenetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCoinsComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
