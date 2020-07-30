import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe( 'the new list', 'i dont the abt it','https://www.pikrepo.com/ffgcw/person-making-pasta')
];


  constructor() {

  }

  ngOnInit(): void {
  }

}
