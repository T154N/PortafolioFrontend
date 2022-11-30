import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSOComponent } from './redes-so.component';

describe('RedesSOComponent', () => {
  let component: RedesSOComponent;
  let fixture: ComponentFixture<RedesSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
