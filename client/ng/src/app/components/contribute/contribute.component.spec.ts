import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BackendServiceMock } from 'src/app/mocks/backend-service.mock';
import { BackendService, Status } from '../../services/backend.service';
import { ContributeComponent } from './contribute.component';

describe('ContributeComponent', () => {
  let component: ContributeComponent;
  let fixture: ComponentFixture<ContributeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContributeComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: BackendService,
          useClass: BackendServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send a joke when form is valid', () => {

    // fill form
    const f = component.contributeForm;
    f.get('category').setValue('Unit test');
    f.get('email').setValue('test@unit.fr');
    f.get('text').setValue('This is a unit test.');
    f.get('author').setValue('developer');
    f.get('acceptTerms').setValue(true);

    expect(f.invalid).toBeFalsy();
    
    expect(component.status).not.toBe(Status.SUCCESS);
    component.onSubmit();
    expect(component.status).toBe(Status.SUCCESS);
  });
});
