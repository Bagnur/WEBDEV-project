import { Component, OnInit } from '@angular/core';
import { Category } from '../categories';
import { CategoryService } from '../categories_service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private service: CategoryService) {}

  ngOnInit(): void {
    this.service.get().subscribe((res)=>this.categories = res)
  }

  delete(category: Category): void {
    this.service.delete(category.id).subscribe((res)=>console.log(res))
    delete this.categories[this.categories.indexOf(category)];
  }

  post(): void {
    const input = document.getElementById('name') as HTMLInputElement
    const title = input.value
    if (title) {
      this.service.post(title).subscribe((res) => this.categories.push(res))
    }
  }

  update(category: Category): void {
    const input = document.getElementById(category.name + 'new_name') as HTMLInputElement
    const name = input.value
    if (name) {
      this.service.update(category.id, name).subscribe((res) => this.categories[this.categories.indexOf(category)].name = res.name)
    }
  }
}

