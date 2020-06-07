import {Component, OnInit} from '@angular/core';
import {Note} from 'src/app/models/note';
import {DatabaseService} from 'src/app/services/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  notes: Note[] = [];
  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.databaseService.getNotes().subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      },
      err => {
        console.log(err);
      },
    );
  }
}
