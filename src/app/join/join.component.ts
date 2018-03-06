import { Component, NgModule, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@NgModule({
  imports: [
     ReactiveFormsModule,
     FormGroup,
     MatInputModule,
     MatStepperModule,
     MatFormFieldModule
  ]
})


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})

export class JoinComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  options: FormGroup;
  hide = true;

  constructor(private _formBuilder: FormBuilder, fb: FormBuilder) {
     this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

   email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


}
