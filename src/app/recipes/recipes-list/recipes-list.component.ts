import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Title', 'Test Desc', 'https://blog.williams-sonoma.com/wp-content/uploads/2013/03/Grilled-cheese-pull.jpg'),
    new Recipe('Test Title', 'Test Desc', 'https://blog.williams-sonoma.com/wp-content/uploads/2013/03/Grilled-cheese-pull.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
