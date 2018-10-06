
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }

  public getUsers(index: number, pageSize: number): Observable<UserData> {
    return this.http.get('http://localhost:61677/api/users?index=' + index + '&pageSize=' + pageSize)
      .pipe(map((res: any) => {
        return <UserData>res;
      }));
  }

  public saveUser(user: User): Observable<boolean> {
    return this.http.post('http://localhost:61677/api/users', user).pipe(map((res: any) => {
      return <boolean>res;
    }));
  }

  public updateUser(id: number, user: User): Observable<boolean> {
    return this.http.put('http://localhost:61677/api/users/' + id, user).pipe(map((res: any) => {
      return <boolean>res;
    }));
  }

  public deleteUser(id: number): Observable<boolean> {
    return this.http.delete('http://localhost:61677/api/users/' + id).pipe(map((res: any) => {
      return <boolean>res;
    }));
  }
}
