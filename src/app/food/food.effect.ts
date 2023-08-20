import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class FoodEffects {
  @Effect() getFood$: Observable<Action> = this.actions$.pipe(
    ofType('GET_FOODS'),
    mergeMap(action =>
      this.http.get('http://localhost:2222/foods-list').pipe(
        map(data => ({ type: 'GET_FOODS_SUCCESS', payload: data })),
        catchError(() => of({ type: 'GET_FOODS_FAILED' }))
      )
    )
  );
  
  constructor(private http: HttpClient, private actions$: Actions) {}
}

