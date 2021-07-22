import { Component, Input, OnInit } from '@angular/core';
import { TaskResponse } from 'src/app/models/task-response';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskResponse;
  constructor(public TasksService: TasksService) { }

  deleteTask(task: TaskResponse) {
    if(confirm('Desea eliminar la tarea?')) {
      console.log("Tareas -> ", task)
      //this.TasksService.deleteTask(task);
    }
  }
 
  ngOnInit(): void {
  }

}
