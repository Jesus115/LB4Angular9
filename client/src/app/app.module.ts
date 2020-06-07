import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormNoteComponent} from './components/form-note/form-note.component';
import {NavComponent} from './components/nav/nav.component';
import {NoteComponent} from './components/note/note.component';
import {MainComponent} from './containers/main/main.component';
import {NewNoteComponent} from './containers/new-note/new-note.component';
import { ReposComponent } from './components/repos/repos.component';
import { ReposNameComponent } from './components/repos-name/repos-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NoteComponent,
    NavComponent,
    NewNoteComponent,
    FormNoteComponent,
    ReposComponent,
    ReposNameComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
