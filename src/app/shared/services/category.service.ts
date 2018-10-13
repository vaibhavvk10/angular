import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { CategoryData } from '../models/category-model/category-data.model';
import { Category } from '../models/category-model/category.model';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {

  }

  public getCategories(index: number, pageSize: number): Observable<CategoryData> {
    return this.http.get('http://localhost:61677/api/Category?index=' + index + '&pageSize=' + pageSize)
      .pipe(map((res: any) => {
        return <CategoryData>res;
      }));
  }

  public saveCategories(category: Category): Observable<boolean> {
    return this.http.post('http://localhost:61677/api/Category/', category).pipe(map((res: any) => {
        return <boolean>res;
      }));
  }

  public updateCategories(id: number, category: Category): Observable<boolean> {
    return this.http.put('http://localhost:61677/api/Category/' + id, category).pipe(map((res: any) => {
        return <boolean>res;
      }));
  }

  public deleteCategories(id: number): Observable<boolean> {
    return this.http.delete('http://localhost:61677/api/Category/' + id).pipe(map((res: any) => {
        return <boolean>res;
      }));
  }
}
