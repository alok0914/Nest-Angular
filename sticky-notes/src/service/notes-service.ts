import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NotesService {


  constructor(private http: HttpClient) {

  }

  getNotes(): Observable<any> {
    return this.http.get('http://localhost:3000/notes');
  }

  createNotes(notes: any): Observable<any> {
    return this.http.post('http://localhost:3000/notes', notes);
  }

  updateNote(note: any): Observable<any> {
    return this.http.put('http://localhost:3000/notes/' + note._id, note)
  }

  deleteNote(note: any): Observable<any> {
    return this.http.delete('http://localhost:3000/notes/' + note._id, note);
  }
}
