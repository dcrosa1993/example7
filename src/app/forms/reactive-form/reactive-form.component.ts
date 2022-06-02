import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form:FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(5)]),
      checkbox: new FormControl(true),
      color: new FormControl(''),
      date: new FormControl(''),
      datetime: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      file: new FormControl(''),
      image: new FormControl(''),
      month: new FormControl(''),
      number: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      time: new FormControl(''),
      week: new FormControl(''),
      search: new FormControl(''),
    })
  }

}
