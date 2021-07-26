import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskResponse } from 'src/app/models/task-response';
import { TasksService } from 'src/app/services/tasks/tasks.service'; 

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];


  @Input() task: TaskResponse;
  @Output() taskList =  new EventEmitter<TaskResponse[]>();
  constructor(public TasksService: TasksService) { }

  ngOnDestroy(): void {
    for(const sub of this.subscription) {
      sub.unsubscribe();
    } 
  }

  deleteTask(task: TaskResponse) {
    if(confirm('Desea eliminar la tarea?')) {
      this.subscription.push(
        this.TasksService.deleteTask(task._id!).subscribe(
          res => {
            //this.tasks = res;
            //console.log("Response -> ", res)
            this.subscription.push(
              this.TasksService.getAllTask().subscribe(
                res => {
                  this.taskList.emit(res);
                  //console.log("Response -> ", res)
                },
                err => {
                  console.log("Ocurrio un Error al obtener todos las tareas -> ", err)
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
 
  ngOnInit(): void {
  }

  updateTask(task: TaskResponse): void {
    const status = !task.done ? "Finalizar" : "Retornar"
    if(confirm(`Desea ${status} la tarea ${task._id}?`)) { 
      const upTask = task;
      upTask.done = !upTask.done
      upTask.hide = false;
      this.subscription.push(
        this.TasksService.updateTask(task._id!, upTask).subscribe(
          res => { 
            this.subscription.push(
              this.TasksService.getAllTask().subscribe(
                res => {
                  this.taskList.emit(res); 
                },
                err => {
                  console.log("Ocurrio un Error al obtener todos las tareas -> ", err)
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
