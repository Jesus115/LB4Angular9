import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Note} from '../models/note';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private readonly URL: string = 'http://localhost:3000/notes';
  constructor(private http: HttpClient) {}
  getNotes() {
    return this.http.get(this.URL);
  }
  postNote(gitNote: Note) {
    return this.http.post(this.URL, gitNote);
  }
  updateNote(gitNote: Note, id: string) {
    return this.http.put(this.URL + `/${id}`, gitNote);
  }
  deleteNote(id: string) {
    return this.http.delete(this.URL + `/${id}`);
  }
  getOneNote(id: string) {
    return this.http.get(this.URL + `/${id}`);
  }
}
