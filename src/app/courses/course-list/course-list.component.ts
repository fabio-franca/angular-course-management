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

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => 
        course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

  get filter() {
    return this._filterBy;
  }

}
