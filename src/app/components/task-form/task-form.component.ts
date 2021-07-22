import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];

  angForm: FormGroup = new FormGroup({
    description: new FormControl(''),
    author: new FormControl(''),
    done: new FormControl(''),
  });

  constructor(private fb: FormBuilder ) { }

  ngOnDestroy(): void {
    for(const sub of this.subscription) {
      sub.unsubscribe();
    } 
  }

  ngOnInit(): void {

    this.angForm = this.fb.group({ 
      description: new FormControl(''),
      author: new FormControl(''),
      done: new FormControl(''),
    }); 
  }


  //Crear una nueva tarea
  onCreateTask(): void {
    if (this.angForm.valid) {
      console.log("Ok ")
    }   
  }

}
