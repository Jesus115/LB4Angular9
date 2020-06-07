import {Component, Input, OnInit} from '@angular/core';
import {GitHubService} from '../../services/git-hub.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  @Input() users: string;
  dataList: [];
  constructor(private githubService: GitHubService) {}

  ngOnInit(): void {}
  getUsers() {
    this.githubService.getRepo(this.users).subscribe(data => {
      // console.log(data);
      this.dataList = data;
      console.log(this.dataList);
    });
  }
}
