import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskResponse } from './models/task-response';
import { TasksService } from './services/tasks/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  private subscription: Subscription[] = [];
 
  title = 'MONGO-TASKS'; 
  task: TaskResponse[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnDestroy(): void {
    for(const sub of this.subscription) {
      sub.unsubscribe();
    } 
  } 

  ngOnInit(): void {
    this.subscription.push(
      this.tasksService.getAllTask().subscribe(
        res => {
          //console.log(res)
          this.task = res; 
        },
        err => {
          console.log("Ocurrio un Error -> ", err)
        }
      ) 
    )
  }
  
  updateTaskList(newTaskList: TaskResponse[]): void {
    this.task = newTaskList;
  }


}
