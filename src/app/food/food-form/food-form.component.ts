import { Component, OnInit } from '@angular/core';
import { ACTIONS, IFood, MyAppState, Action } from '../food.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

  food!: IFood;
  
  constructor ( private store:Store<MyAppState>) {}
  ngOnInit() {
    this.store.dispatch({
      type:ACTIONS.GET_FOODS_SUCCESS
    })
   }

  addFood(food:IFood){

    let addAction:Action={
      type:ACTIONS.ADD_FOOD,
      payload:Object.assign({}, food)
    }
    this.store.dispatch(addAction);
  }
}
