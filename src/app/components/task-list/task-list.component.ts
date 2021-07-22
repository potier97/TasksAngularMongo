import { Component, OnInit } from '@angular/core';
import { TaskResponse } from 'src/app/models/task-response';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  tasks: TaskResponse[] = [];


  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  //   this.tasksService.getAllTask().subscribe(
  //     res: => {
  //       this.tasks = res;
  //     },
  //     err => {
  //       console.log("Ocurrio un Error")
  //     }
  //   )
  // }
  }

  addTask(task: TaskResponse) {
    console.log(task);
    //this.taskService.addTask(task);
  }

}
