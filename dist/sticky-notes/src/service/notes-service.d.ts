import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NotesService {
    private http;
    constructor(http: HttpClient);
    getNotes(): Observable<any>;
    createNotes(notes: any): Observable<any>;
    updateNote(note: any): Observable<any>;
    deleteNote(note: any): Observable<any>;
}
