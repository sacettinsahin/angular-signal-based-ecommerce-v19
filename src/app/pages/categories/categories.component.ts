import { Component, inject, resource } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ButtonComponent } from '../../components/button/button.component';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-categories',
  imports: [MatTableModule, ButtonComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categoryService = inject(CategoryService);
  categories = resource({
    loader: () =>
      fetch('https://api.escuelajs.co/api/v1/categories').then((response) =>
        response.json()
      ),
  });
  //table
  displayedColumns: string[] = ['id','category','image', 'action'];

  delete(categoryId:number):void{
    this.categoryService.delete(categoryId).subscribe(
      res=>console.log(res),
      error=>console.log(error)
    )
  }

  update():void{

  }

  add():void{

  }

}
