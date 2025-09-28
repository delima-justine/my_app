import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

type Subject = {
    id: number;
    subject_code: string;
    subject_name: string;
    no_of_units: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Class Properties
  protected readonly title = signal('my_app');
  myClass = signal('my-class');
  tableClass = signal('table-class');
  myClasses = signal(['first', 'second']);
  isActive = signal(false);
  fruit = signal('');
  day = signal(2);

  subjects: Subject[] = [
    {
      id: 1,
      subject_code: "COMP009",
      subject_name: "Advance Programming",
      no_of_units: 5
    },

    {
      id: 2,
      subject_code: "COMP010",
      subject_name: "Information Management",
      no_of_units: 5
    },

    {
      id: 3,
      subject_code: "COMP012",
      subject_name: "Integrative Programming",
      no_of_units: 3
    }
  ];
}
