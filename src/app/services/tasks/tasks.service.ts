import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskResponse } from 'src/app/models/task-response';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

 
  getAllTask(): Observable<TaskResponse> {
    return this.httpClient.get<TaskResponse>(`https//:localhost.com/algo`)
    .pipe(
      map((res: TaskResponse) => {
        //console.log('Listando facturas', res) 
        return res;
      }), 
    );
  }

  updateTask(): void {

  }

  crateTask(): void {

  }

  deleteTask(): void {

  }
}
