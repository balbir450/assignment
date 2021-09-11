import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDataComponent } from './assets-data.component';

describe('AssetsDataComponent', () => {
  let component: AssetsDataComponent;
  let fixture: ComponentFixture<AssetsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
