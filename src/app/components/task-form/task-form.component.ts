import { EventEmitter, Output } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TaskResponse } from 'src/app/models/task-response';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];

  @Output() taskList =  new EventEmitter<TaskResponse[]>();


  angForm: FormGroup = new FormGroup({
    description: new FormControl(''),
    author: new FormControl(''),
    done: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private TasksService: TasksService ) { }

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
      //console.log("Ok -> ", this.angForm.value)
      const data: TaskResponse = {
        _id: null,
        description: this.angForm.value.description,
        author: this.angForm.value.author,
        done: this.angForm.value.done, 
        hide: false
      }
      this.subscription.push(
        this.TasksService.createTask(data).subscribe(
          res => {
            //this.tasks = res;
            //console.log("Response -> ", res)
            this.subscription.push(
              this.TasksService.getAllTask().subscribe(
                res => {
                  //this.tasks = res;
                  this.taskList.emit(res); 
                  //this.angForm.setErrors(null);
                  this.angForm.reset();
                  this.angForm.get('description')?.setErrors(null);
                  this.angForm.get('author')?.setErrors(null);
                  this.angForm.get('done')?.setErrors(null);
 
                },
                err => {
                  console.log("Ocurrio un Error -> ", err)
                }
              )
            )
          },
          err => {
            console.log("Ocurrio un Error -> ", err)
          }
        )
      )
    }   
  }

}
