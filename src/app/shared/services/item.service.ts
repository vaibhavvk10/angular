import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/item-model/item.model';
import { ItemData } from '../models/item-model/item-data.model';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {

  }

  public getItems(index: number, pageSize: number): Observable<ItemData> {
    return this.http.get('http://localhost:61677/api/Item?index=' + index + '&pageSize=' + pageSize)
      .pipe(map((res: any) => {
        return <ItemData>res;
      }));
  }
  public getItemsByCategoryId(categoryId: number): Observable<Item[]> {
    return this.http.get('http://localhost:61677/api/Item?categoryId=' + categoryId )
      .pipe(map((res: any) => {
        return <Item[]>res;
      }));
  }

  public saveItems(item: Item): Observable<boolean> {
    return this.http.post('http://localhost:61677/api/Item/', item).pipe(map((res: any) => {
        return <boolean>res;
      }));
  }

  public updateItems(id: number, item: Item): Observable<boolean> {
    return this.http.put('http://localhost:61677/api/Item/' + id, item).pipe(map((res: any) => {
        return <boolean>res;
      }));
  }

  public deleteItems(id: number): Observable<boolean> {
    return this.http.delete('http://localhost:61677/api/Item/' + id).pipe(map((res: any) => {
        return <boolean>res;
      }));
  }
}
