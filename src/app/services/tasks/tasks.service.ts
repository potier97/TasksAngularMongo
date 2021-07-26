import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskResponse } from 'src/app/models/task-response';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class TasksService {


  apiUrl = environment.APIEndpoint;  // 'http//:localhost:3000/api'

  constructor(private httpClient: HttpClient) { }

 
  getAllTask(): Observable<TaskResponse[]> {
    return this.httpClient.get<TaskResponse[]>(this.apiUrl + "/getTasks")
    .pipe(
      map((res: TaskResponse[]) => {
        return res;
      }), 
    );
  }

  updateTask(id: number, task:TaskResponse ): Observable<TaskResponse> {
    return this.httpClient.put<TaskResponse>(this.apiUrl + "/updateTask/" + id, task)
    .pipe(
      map((res: TaskResponse) => {
        return res;
      }), 
    );
  }

  createTask(task: TaskResponse): Observable<TaskResponse> {
    return this.httpClient.post<TaskResponse>(this.apiUrl + "/newTask", task )
    .pipe(
      map((res: TaskResponse) => {
        return res;
      }), 
    );
  }

  deleteTask(id: number): Observable<TaskResponse> {
    return this.httpClient.delete<TaskResponse>(this.apiUrl + "/deleteTask/" + id)
    .pipe(
      map((res: TaskResponse) => {
        return res;
      }), 
    );
  }
}
