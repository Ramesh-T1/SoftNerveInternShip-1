import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from '../listof-all-students/listof-all-students.model'

@Injectable({
  providedIn: 'root'
})
export class ListStudentsService {  

  constructor(private http:HttpClient) { }
  retrieveall(){
    return this.http.get<Student[]>("http://localhost:8080/retrieveall")
  }

  deleteUser(id:number) {
    return this.http.delete(`http://localhost:8080/delete/${id}`)
  }

  retrieveSingleUser(id:number)
  {
    return this.http.get<Student>(`http://localhost:8080/retrieveById/${id}`)
  }

  updateUser(id:number,Student:Student)
  {
    return this.http.put(`http://localhost:8080/update/${id}`,Student)
  }

  register(Student:Student){
    return this.http.post(`http://localhost:8080/register`,Student)
  }
}
