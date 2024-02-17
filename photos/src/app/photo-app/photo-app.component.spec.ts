import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAppComponent } from './photo-app.component';

describe('PhotoAppComponent', () => {
  let component: PhotoAppComponent;
  let fixture: ComponentFixture<PhotoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
