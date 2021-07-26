import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TaskResponse } from 'src/app/models/task-response'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
 
  private subscription: Subscription[] = [];

  //@Input() task: TaskResponse[] = [];
  tasks: TaskResponse[] = [];

  // initialize a private variable _data, it's a BehaviorSubject
  private _data = new BehaviorSubject<TaskResponse[]>([]);

  // change data to use getter and setter
  @Input()
  set task(value) {
      // set the latest value for _data BehaviorSubject
      this._data.next(value);
  };

  get task() {
      // get the latest value from _data BehaviorSubject
      return this._data.getValue();
  } 


  ngOnDestroy(): void {
    for(const sub of this.subscription) {
      sub.unsubscribe();
    } 
  } 

  ngOnInit(): void { 
    // now we can subscribe to it, whenever input changes,
    // we will run our grouping logic
  this.subscription.push(
    this._data
        .subscribe(x => {
            //console.log(x) 
            this.tasks = x  
        })
  )
  }


  updateTaskList(newTaskList: TaskResponse[]): void {
    this.tasks = newTaskList;
  }
  
}
