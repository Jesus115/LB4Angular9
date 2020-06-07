import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Note} from 'src/app/models/note';
import {DatabaseService} from 'src/app/services/database.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss'],
})
export class FormNoteComponent implements OnInit {
  @Input() id: string;
  note: Note = new Note();
  alerta: boolean = false;
  fallo: boolean = false;
  paso: boolean = false;
  message = '';

  constructor(
    public databaseService: DatabaseService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.id) {
      this.getOne();
    }
  }

  send(form: NgForm) {
    if (form.invalid) {
      this.fallo = true;
      this.paso = false;
      this.message = 'the form is incorrect';
      return;
    }
    if (this.id) {
      this.edit(form);
    } else {
      this.post(form);
    }
  }

  edit(form: NgForm) {
    this.databaseService.updateNote(form.value, this.id).subscribe(
      res => {
        this.fallo = false;

        this.paso = true;
        this.message = 'Data Update';
        this.router.navigateByUrl('/');
      },
      err => {
        console.error(err);
      },
    );
  }

  post(form: NgForm) {
    this.databaseService.postNote(form.value).subscribe(
      res => {
        console.log(res);
        this.fallo = false;

        this.paso = true;
        this.message = 'Data Save';
        this.router.navigateByUrl('/');
      },
      err => {
        console.error(err);
      },
    );
  }
  getOne() {
    this.databaseService.getOneNote(this.id).subscribe(
      (note: Note) => {
        this.note = note;
      },
      err => {
        console.log(err);
      },
    );
  }
}
