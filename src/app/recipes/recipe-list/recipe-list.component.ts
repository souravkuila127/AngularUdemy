import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test recipe','This is simply a test','https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
