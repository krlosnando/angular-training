import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-list-container',
  templateUrl: './data-list-container.component.html',
  styleUrls: ['./data-list-container.component.css']
})
export class DataListContainerComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  randomDataListEmitterTitle: string = 'Random List w/Emitter';
  randomDataListObservableTitle: string = 'Random List w/Observable';
  randomData: string[] = [];

  apiDataListEmitterTitle: string = 'Api List w/Emitter';
  apiDataListObservableTitle: string = 'Api List w/Observable';
  apiData: string[] = [];

  loadApiDataAsObservableFunction: () => Observable<string[]>;

  ngOnInit() {
    this.loadApiDataAsObservableFunction = this.loadApiDataAsObservable.bind(this);
  }

  loadRandomData() {
    this.randomData = [];
    for (let index = 0; index < 10; index++) {
      const value = Math.random().toString(36).substr(2, 5);
      this.randomData.push(value);
    }
  }

  loadRandomDataAsObservable(): Observable<string[]> {
    const data: string[] = [];
    for (let index = 0; index < 10; index++) {
      const value = Math.random().toString(36).substr(2, 5);
      data.push(value);
    }

    const result = new Observable<string[]>((observer) => {
      observer.next(data);
      observer.complete();
    });

    return result;
  }

  loadApiData() {
    this.apiData = [];
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: ApiResult[]) => {
      data.forEach(i => {
        this.apiData.push(`${i.email} (${i.name})`);
      });
    });
  }

  loadApiDataAsObservable(): Observable<string[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((data: ApiResult[]) => {
        const result: string[] = [];
        data.forEach(i => {
          result.push(`${i.email} (${i.name})`);
        });
        return result;
      }));
  }
}

export class ApiResult {
  public name: string;
  public email: string;
}
