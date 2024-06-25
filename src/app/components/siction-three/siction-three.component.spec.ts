import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SictionThreeComponent } from './siction-three.component';

describe('SictionThreeComponent', () => {
  let component: SictionThreeComponent;
  let fixture: ComponentFixture<SictionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SictionThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SictionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
