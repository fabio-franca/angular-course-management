import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];

  _filterBy!: string;

  filteredCourses: Course[] = [];

  exibirMsgNaoEncontrado!: Boolean;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();

    this.exibirMsgNaoEncontrado = false;
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {  //Função de retorno da requisição
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error: ', err)
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        alert('Excluído com sucesso');
        this.retrieveAll();
      },
      error: err => console.log(err)
    })
  }

  set filter(value) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => 
        course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)

    if(this.filteredCourses.length == 0) {
      this.exibirMsgNaoEncontrado = true;
    } else {
      this.exibirMsgNaoEncontrado = false;
    }
  }

  get filter() {
    return this._filterBy;
  }

}
