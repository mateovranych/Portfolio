import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnComponent } from './msn.component';

describe('MsnComponent', () => {
  let component: MsnComponent;
  let fixture: ComponentFixture<MsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
