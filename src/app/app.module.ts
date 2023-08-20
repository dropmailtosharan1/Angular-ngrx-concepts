import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './shared/food.service';
import { StoreModule } from '@ngrx/store';
import { food_reducer } from './food/food.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodFormComponent } from './food/food-form/food-form.component';
import { FoodEffects } from './food/food.effect';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    StoreModule.forRoot( {foods:food_reducer}),
    EffectsModule.forRoot( [FoodEffects]),
    AppRoutingModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
