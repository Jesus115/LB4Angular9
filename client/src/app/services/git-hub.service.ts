import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly URL: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}
  getRepo(usuario): Observable<any> {
    return this.http.get<any>(this.URL + `/${usuario}` + '/repos');
  }
  // getOneRepo(usuario: string) {
  //   return this.http.get(this.URL + `/${usuario}`);
  // }
}
