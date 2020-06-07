import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Note} from '../../models/note';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-repos-name',
  templateUrl: './repos-name.component.html',
  styleUrls: ['./repos-name.component.scss'],
})
export class ReposNameComponent implements OnInit {
  note: Note = new Note();
  @Input() data: string[];

  name = 'Espere ...';
  //  name= this.data.name;

  constructor(
    private router: Router,
    public databaseService: DatabaseService,
  ) {}

  ngOnInit(): void {}
  dataList: [];
  form: string[];

  post(id) {
    this.note = {
      // id: this.data.id ? this.data.id : null,
      title: this.data.full_name
        ? this.data.full_name.toString()
        : 'dont  text',
      description: this.data.description
        ? this.data.description.toString()
        : 'dont  text',
      author: this.data.owner.login
        ? this.data.owner.login.toString()
        : 'dont  text',
    };
    console.log(this.form);
    this.databaseService.postNote(this.note).subscribe(
      res => {
        console.log(res);
        Swal.fire('Success', 'Data Save', 'success');
        this.router.navigateByUrl('/');
      },
      err => {
        console.error(err);
      },
    );
  }
}
