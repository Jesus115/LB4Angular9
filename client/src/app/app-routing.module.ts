import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReposComponent} from './components/repos/repos.component';
import {MainComponent} from './containers/main/main.component';
import {NewNoteComponent} from './containers/new-note/new-note.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'repo',
    component: ReposComponent,
  },
  {
    path: 'new',
    component: NewNoteComponent,
  },
  {
    path: 'edit/:id',
    component: NewNoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
