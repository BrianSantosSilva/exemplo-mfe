import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNavbarComponent } from './container-navbar.component';

describe('ContainerNavbarComponent', () => {
  let component: ContainerNavbarComponent;
  let fixture: ComponentFixture<ContainerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
