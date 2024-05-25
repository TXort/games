import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameFormComponent } from './videogame-form.component';

describe('VideogameFormComponent', () => {
  let component: VideogameFormComponent;
  let fixture: ComponentFixture<VideogameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogameFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideogameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
