import { Component, Input } from '@angular/core';
import { Subject } from '../app';

@Component({
  selector: 'app-subject-detail',
  imports: [],
  templateUrl: './subject-detail.html',
  styleUrl: './subject-detail.css'
})
export class SubjectDetail {
  @Input() subject!: Subject;
}
