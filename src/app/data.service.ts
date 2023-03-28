import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:7790/message";
@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {
  }

  getAllMessages(): Observable<any> {
    return this.http.get(baseUrl + '/listAll/');
  }

  getId(id: number): Observable<any> {
    return this.http.get(baseUrl + '$/get/${id}/');
  }

  newMessage(data: any): Observable<any> {
    return this.http.post( baseUrl + '/new/', data);
  }

  updateMessage(id: number, data: any): Observable<any> {
    return this.http.put( baseUrl + '/update/${id}/', data);
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete( baseUrl + '/delete/' + id + '/');
  }
}
